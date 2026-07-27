import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PagamentoServiceController } from './pagamento-service.controller';
import { PagamentoServiceService } from './pagamento-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_CLIENT',
        transport: Transport.NATS,
        options: { servers: ['nats://localhost:4222'] },
      },
    ]),
  ],
  controllers: [PagamentoServiceController],
  providers: [PagamentoServiceService],
})
export class PagamentoServiceModule {}
