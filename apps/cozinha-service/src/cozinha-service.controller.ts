import { Controller, Post, Body } from '@nestjs/common';
import { CozinhaServiceService } from './cozinha-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('cozinha')
export class CozinhaServiceController {
  constructor(private readonly cozinhaServiceService: CozinhaServiceService) {}

  @Post()
  receberPedido(@Body() dto: any) {
    return this.cozinhaServiceService.processarPedido(dto);
  }

  @EventPattern('pedido.criado')
  async aoReceberPedidoCriado(@Payload() dto: any) {
    console.log('Cozinha recebeu evento pedido.criado:', dto);
    return this.cozinhaServiceService.processarPedido(dto);
  }
}
