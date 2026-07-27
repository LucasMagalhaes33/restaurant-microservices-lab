import { PagamentoServiceService } from './pagamento-service.service';

describe('PagamentoServiceService', () => {
  const service = new PagamentoServiceService();

  it('aprova pagamento quando a mesa é par', () => {
    expect(service.decidirAprovacao({ mesa: 4 })).toBe(true);
  });

  it('recusa pagamento quando a mesa é ímpar', () => {
    expect(service.decidirAprovacao({ mesa: 5 })).toBe(false);
  });
});
