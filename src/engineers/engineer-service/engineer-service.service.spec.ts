import { Test, TestingModule } from '@nestjs/testing';
import { EngineerServiceService } from './engineer-service.service';

describe('EngineerServiceService', () => {
  let service: EngineerServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineerServiceService],
    }).compile();

    service = module.get<EngineerServiceService>(EngineerServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
