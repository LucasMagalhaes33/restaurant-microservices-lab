import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { CozinhaModule } from './cozinha/cozinha.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { FiscalModule } from './fiscal/fiscal.module';

@Module({
  imports: [PedidosModule, CozinhaModule, PagamentoModule, FiscalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
