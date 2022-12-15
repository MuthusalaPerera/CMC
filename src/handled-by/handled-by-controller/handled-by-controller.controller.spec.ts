import { Test, TestingModule } from '@nestjs/testing';
import { HandledByControllerController } from './handled-by-controller.controller';

describe('HandledByControllerController', () => {
  let controller: HandledByControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandledByControllerController],
    }).compile();

    controller = module.get<HandledByControllerController>(HandledByControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
