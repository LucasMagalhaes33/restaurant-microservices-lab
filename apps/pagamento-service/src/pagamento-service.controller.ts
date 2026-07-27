import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices';
import { PagamentoServiceService } from './pagamento-service.service';

@Controller()
export class PagamentoServiceController {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
    private readonly pagamentoServiceService: PagamentoServiceService,
  ) {}

  @EventPattern('pedido.criado.v1')
  async processarPagamento(@Payload() pedido: any) {
    const aprovado = this.pagamentoServiceService.decidirAprovacao(pedido);
    if (aprovado) {
      this.natsClient.emit('pagamento.aprovado', pedido);
    } else {
      this.natsClient.emit('pagamento.recusado', pedido);
    }
  }
}
