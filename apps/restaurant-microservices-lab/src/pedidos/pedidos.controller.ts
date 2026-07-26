import { Controller, Post, Body } from '@nestjs/common';
import { PedidosService } from './pedidos-service.service';


@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  criar(@Body() dto: any) {
    return this.pedidosService.criarPedido(dto);
  }
}
