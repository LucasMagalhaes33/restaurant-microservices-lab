import { Test, TestingModule } from '@nestjs/testing';
import { CozinhaServiceController } from './cozinha-service.controller';
import { CozinhaServiceService } from './cozinha-service.service';

describe('CozinhaServiceController', () => {
  let cozinhaServiceController: CozinhaServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CozinhaServiceController],
      providers: [CozinhaServiceService],
    }).compile();

    cozinhaServiceController = app.get<CozinhaServiceController>(CozinhaServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cozinhaServiceController.getHello()).toBe('Hello World!');
    });
  });
});
