import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { PedidoCriadoV1Event } from '../../../restaurant-microservices-lab/src/pedidos/events/pedido-criado-v1.event';

describe('Contrato: pedido.criado.v1 (esperado pela Cozinha)', () => {
  it('aceita um payload com item (string) e mesa (número positivo)', async () => {
    const payloadDoProdutor = { item: 'hamburguer', mesa: 4 };
    const evento = plainToInstance(PedidoCriadoV1Event, payloadDoProdutor);
    const erros = await validate(evento);
    expect(erros).toHaveLength(0);
  });

  it('rejeita um payload onde mesa não é número', async () => {
    const payloadDoProdutor = { item: 'hamburguer', mesa: 'quatro' };
    const evento = plainToInstance(PedidoCriadoV1Event, payloadDoProdutor);
    const erros = await validate(evento);
    expect(erros.length).toBeGreaterThan(0);
  });
});
