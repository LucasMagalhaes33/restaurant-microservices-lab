import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { PedidoCriadoV1Event } from './events/pedido-criado-v1.event';

@Injectable()
export class PedidosService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  async criarPedido(dto: any) {
    const evento = plainToInstance(PedidoCriadoV1Event, dto);
    const erros = await validate(evento);
    if (erros.length > 0) {
      throw new BadRequestException(
        'Payload de pedido inválido: ' + JSON.stringify(erros),
      );
    }

    this.natsClient.emit('pedido.criado.v1', evento);
    return { status: 'pedido criado', dto: evento };
  }
}
