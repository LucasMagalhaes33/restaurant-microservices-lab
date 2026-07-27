import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { PagamentoServiceModule } from './pagamento-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PagamentoServiceModule);
  app.connectMicroservice({
    transport: Transport.NATS,
    options: { servers: ['nats://localhost:4222'] },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
