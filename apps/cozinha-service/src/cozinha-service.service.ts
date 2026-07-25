import { Injectable } from '@nestjs/common';

@Injectable()
export class CozinhaServiceService {
  processarPedido(dto: any) {
    return { status: 'recebido pela cozinha', dto };
  }
}
