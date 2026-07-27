import { Controller, Post, Body, Get } from '@nestjs/common';
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

  @EventPattern('pagamento.aprovado')
  async aoReceberPagamentoAprovado(@Payload() payload: any) {
    const evento = plainToInstance(PedidoCriadoV1Event, payload);
    const erros = await validate(evento);
    if (erros.length > 0) {
      console.error(
        'Evento pagamento.aprovado chegou fora do contrato esperado:',
        erros,
      );
      return;
    }
    console.log(
      'Cozinha recebeu pagamento.aprovado (válido), iniciando preparo:',
      evento,
    );
    return this.cozinhaServiceService.processarPedido(evento);
  }

  @EventPattern('pagamento.recusado')
  async aoReceberPagamentoRecusado(@Payload() payload: any) {
    console.log(
      'Cozinha recebeu pagamento.recusado — pedido cancelado, não preparar:',
      payload,
    );
    // aqui entraria a lógica real de compensação, se algo já tivesse sido iniciado
  }

  @Get('health')
  health() {
    return { status: 'ok' };
  }
}
