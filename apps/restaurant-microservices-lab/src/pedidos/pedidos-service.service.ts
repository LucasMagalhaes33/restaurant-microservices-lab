import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PedidosService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  criarPedido(dto: any) {
    this.natsClient.emit('pedido.criado', dto);
    return { status: 'pedido criado', dto };
  }
}
