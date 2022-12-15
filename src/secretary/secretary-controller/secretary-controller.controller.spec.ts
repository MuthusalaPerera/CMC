import { Test, TestingModule } from '@nestjs/testing';
import { SecretaryControllerController } from './secretary-controller.controller';

describe('SecretaryControllerController', () => {
  let controller: SecretaryControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretaryControllerController],
    }).compile();

    controller = module.get<SecretaryControllerController>(SecretaryControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
