import { Test, TestingModule } from '@nestjs/testing';
import { PagamentoServiceController } from './pagamento-service.controller';
import { PagamentoServiceService } from './pagamento-service.service';

describe('PagamentoServiceController', () => {
  let pagamentoServiceController: PagamentoServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PagamentoServiceController],
      providers: [PagamentoServiceService],
    }).compile();

    pagamentoServiceController = app.get<PagamentoServiceController>(PagamentoServiceController);
  });

});
