import { Test, TestingModule } from '@nestjs/testing';
import { resourceAllocationService } from './resourceAllocation.service';

describe('resourceAllocationService', () => {
  let service: resourceAllocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [resourceAllocationService],
    }).compile();

    service = module.get<resourceAllocationService>(resourceAllocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
