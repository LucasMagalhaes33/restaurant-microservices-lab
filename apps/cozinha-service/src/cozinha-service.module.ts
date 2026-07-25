import { Module } from '@nestjs/common';
import { CozinhaServiceController } from './cozinha-service.controller';
import { CozinhaServiceService } from './cozinha-service.service';

@Module({
  imports: [],
  controllers: [CozinhaServiceController],
  providers: [CozinhaServiceService],
})
export class CozinhaServiceModule {}
