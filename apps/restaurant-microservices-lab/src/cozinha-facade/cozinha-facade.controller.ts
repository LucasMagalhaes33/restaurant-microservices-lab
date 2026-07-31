import { Controller, Post, Body, UseGuards, ServiceUnavailableException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
  import CircuitBreaker from 'opossum';
import { ServiceTokenGuard } from '../common/guards/service-token.guard';

@Controller('cozinha')
@UseGuards(ServiceTokenGuard)
export class CozinhaFacadeController {
  private readonly breaker: CircuitBreaker;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    const chamarCozinha = async (dto: any) => {
      const url = this.configService.get<string>('COZINHA_SERVICE_URL') ?? 'http://localhost:3001/cozinha';
      const resposta = await firstValueFrom(
        this.httpService.post(url, dto, { timeout: 2000 }),
      );
      return resposta.data;
    };

    this.breaker = new CircuitBreaker(chamarCozinha, {
      timeout: 2000,
      errorThresholdPercentage: 50,
      resetTimeout: 10000,
      volumeThreshold: 3, // com menos de 3 chamadas na janela, nem avalia abrir
    });

    this.breaker.fallback(() => {
      throw new ServiceUnavailableException('Cozinha temporariamente indisponível, tente novamente em instantes');
    });
  }

  @Post()
  async encaminhar(@Body() dto: any) {
    return this.breaker.fire(dto);
  }
}