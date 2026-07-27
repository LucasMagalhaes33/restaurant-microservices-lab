import { Test } from '@nestjs/testing';
import { CozinhaServiceController } from './cozinha-service.controller';
import { CozinhaServiceService } from './cozinha-service.service';

describe('CozinhaServiceController (componente)', () => {
  let controller: CozinhaServiceController;
  let service: CozinhaServiceService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CozinhaServiceController],
      providers: [CozinhaServiceService],
    }).compile();

    controller = moduleRef.get(CozinhaServiceController);
    service = moduleRef.get(CozinhaServiceService);
  });

  it('processa o pedido ao receber pagamento.aprovado válido', async () => {
    const spy = jest.spyOn(service, 'processarPedido');
    await controller.aoReceberPagamentoAprovado({
      item: 'hamburguer',
      mesa: 4,
    });
    expect(spy).toHaveBeenCalled();
  });

  it('não processa o pedido quando o payload é inválido', async () => {
    const spy = jest.spyOn(service, 'processarPedido');
    await controller.aoReceberPagamentoAprovado({
      item: 'hamburguer',
      mesa: 'quatro',
    } as any);
    expect(spy).not.toHaveBeenCalled();
  });
});
