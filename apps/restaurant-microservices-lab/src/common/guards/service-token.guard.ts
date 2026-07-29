import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ServiceTokenGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const tokenRecebido = request.headers['x-service-token'];
    const tokenEsperado = this.configService.get<string>('SERVICE_TOKEN');

    if (tokenRecebido !== tokenEsperado) {
      throw new UnauthorizedException('Token de serviço inválido ou ausente');
    }
    return true;
  }
}