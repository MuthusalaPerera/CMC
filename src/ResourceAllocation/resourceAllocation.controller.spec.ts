import { Test, TestingModule } from '@nestjs/testing';
import { resourceAllocationController } from './resourceAllocation.controller';

describe('resourceAllocationController', () => {
  let controller: resourceAllocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [resourceAllocationController],
    }).compile();

    controller = module.get<resourceAllocationController>(resourceAllocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
