import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { FiscalModule } from './fiscal/fiscal.module';
import { CozinhaFacadeModule } from './cozinha-facade/cozinha-facade.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 20 }]),
    PedidosModule,
    PagamentoModule,
    FiscalModule,
    CozinhaFacadeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}