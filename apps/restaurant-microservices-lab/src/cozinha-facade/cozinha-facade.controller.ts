import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('cozinha')
export class CozinhaFacadeController {
  constructor(private readonly httpService: HttpService) {}

  @Post()
  async encaminhar(@Body() dto: any) {
    const resposta = await firstValueFrom(
      this.httpService.post('http://localhost:3001/cozinha', dto),
    );
    return resposta.data;
  }
}
