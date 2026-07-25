import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CozinhaFacadeController } from './cozinha-facade.controller';

@Module({
  imports: [HttpModule],
  controllers: [CozinhaFacadeController],
})
export class CozinhaFacadeModule {}
