import { Test, TestingModule } from '@nestjs/testing';
import { OriginTypeControllerController } from './origin-type-controller.controller';

describe('OriginTypeControllerController', () => {
  let controller: OriginTypeControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OriginTypeControllerController],
    }).compile();

    controller = module.get<OriginTypeControllerController>(OriginTypeControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
