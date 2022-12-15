import { Test, TestingModule } from '@nestjs/testing';
import { EngineerControllerController } from './engineer-controller.controller';

describe('EngineerControllerController', () => {
  let controller: EngineerControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineerControllerController],
    }).compile();

    controller = module.get<EngineerControllerController>(EngineerControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
