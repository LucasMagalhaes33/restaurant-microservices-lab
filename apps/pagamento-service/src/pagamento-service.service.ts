import { Injectable } from '@nestjs/common';

@Injectable()
export class PagamentoServiceService {
  decidirAprovacao(pedido: { mesa: number }): boolean {
    return pedido.mesa % 2 === 0;
  }
}
