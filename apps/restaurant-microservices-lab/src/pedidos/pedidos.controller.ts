import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PedidosService } from './pedidos.service';

@UseGuards(ThrottlerGuard)
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  criar(@Body() dto: any) {
    return this.pedidosService.criarPedido(dto);
  }
}