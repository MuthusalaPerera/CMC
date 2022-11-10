import { Test, TestingModule } from '@nestjs/testing';
import { ProblemTypeControllerController } from './problem-type-controller.controller';

describe('ProblemTypeControllerController', () => {
  let controller: ProblemTypeControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProblemTypeControllerController],
    }).compile();

    controller = module.get<ProblemTypeControllerController>(ProblemTypeControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
