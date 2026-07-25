import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { FiscalModule } from './fiscal/fiscal.module';
import { CozinhaFacadeModule } from './cozinha-facade/cozinha-facade.module';

@Module({
  imports: [PedidosModule, PagamentoModule, FiscalModule, CozinhaFacadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
