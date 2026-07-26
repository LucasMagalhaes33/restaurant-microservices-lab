import { Controller, Post, Body } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CozinhaServiceService } from './cozinha-service.service';
import { PedidoCriadoV1Event } from '../../restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event';
// numa estrutura mais madura, esse DTO viraria uma lib compartilhada (capítulo 6)

@Controller('cozinha')
export class CozinhaServiceController {
  constructor(private readonly cozinhaServiceService: CozinhaServiceService) {}

  @Post()
  receberPedido(@Body() dto: any) {
    return this.cozinhaServiceService.processarPedido(dto);
  }

  @EventPattern('pedido.criado.v1')
  async aoReceberPedidoCriado(@Payload() payload: any) {
    const evento = plainToInstance(PedidoCriadoV1Event, payload);
    const erros = await validate(evento);
    if (erros.length > 0) {
      console.error(
        'Evento pedido.criado.v1 chegou fora do contrato esperado:',
        erros,
      );
      return;
    }
    console.log('Cozinha recebeu evento pedido.criado.v1 (válido):', evento);
    return this.cozinhaServiceService.processarPedido(evento);
  }
}
