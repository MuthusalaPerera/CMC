import { Test, TestingModule } from '@nestjs/testing';
import { SalesAssistantControllerController } from './sales-assistant-controller.controller';

describe('SalesAssistantControllerController', () => {
  let controller: SalesAssistantControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesAssistantControllerController],
    }).compile();

    controller = module.get<SalesAssistantControllerController>(SalesAssistantControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
