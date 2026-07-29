import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ServiceTokenGuard } from '../common/guards/service-token.guard';

@Controller('cozinha')
@UseGuards(ServiceTokenGuard)
export class CozinhaFacadeController {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  async encaminhar(@Body() dto: any) {
    const url = this.configService.get<string>('COZINHA_SERVICE_URL') ?? 'http://localhost:3001/cozinha';
    const resposta = await firstValueFrom(this.httpService.post(url, dto));
    return resposta.data;
  }
}