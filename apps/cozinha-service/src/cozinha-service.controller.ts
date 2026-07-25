import { Controller, Post, Body } from '@nestjs/common';
import { CozinhaServiceService } from './cozinha-service.service';

@Controller('cozinha')
export class CozinhaServiceController {
  constructor(private readonly cozinhaServiceService: CozinhaServiceService) {}

  @Post()
  receberPedido(@Body() dto: any) {
    return this.cozinhaServiceService.processarPedido(dto);
  }
}
