import { NestFactory } from '@nestjs/core';
import { CozinhaServiceModule } from './cozinha-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CozinhaServiceModule);
  await app.listen(3001);
}
bootstrap();
