import { Test, TestingModule } from '@nestjs/testing';
import { ProblemTypeServiceService } from './problem-type-service.service';

describe('ProblemTypeServiceService', () => {
  let service: ProblemTypeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProblemTypeServiceService],
    }).compile();

    service = module.get<ProblemTypeServiceService>(ProblemTypeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
