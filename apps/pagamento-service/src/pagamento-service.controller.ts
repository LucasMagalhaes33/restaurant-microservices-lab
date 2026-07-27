import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class PagamentoServiceController {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
  ) {}

  @EventPattern('pedido.criado.v1')
  async processarPagamento(@Payload() pedido: any) {
    console.log('Pagamento recebeu pedido.criado.v1:', pedido);

    // simulação: mesas de número par são "aprovadas", ímpares são "recusadas"
    // (na vida real, aqui entraria a integração com o adquirente de cartão)
    const aprovado = pedido.mesa % 2 === 0;

    if (aprovado) {
      this.natsClient.emit('pagamento.aprovado', pedido);
      console.log('Pagamento aprovado, evento publicado');
    } else {
      this.natsClient.emit('pagamento.recusado', pedido);
      console.log('Pagamento recusado, evento de compensação publicado');
    }
  }
}
