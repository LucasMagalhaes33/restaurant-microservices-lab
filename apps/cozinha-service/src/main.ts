import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { CozinhaServiceModule } from './cozinha-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CozinhaServiceModule);
  app.connectMicroservice({
    transport: Transport.NATS,
    options: { servers: [process.env.NATS_URL ?? 'nats://localhost:4222'] },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
