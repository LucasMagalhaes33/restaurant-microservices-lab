import { IsString, IsInt, IsPositive } from 'class-validator';

export class PedidoCriadoV1Event {
  @IsString()
  item: string;

  @IsInt()
  @IsPositive()
  mesa: number;
}
