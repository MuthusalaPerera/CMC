import { Test, TestingModule } from '@nestjs/testing';
import { HandledByServiceService } from './handled-by-service.service';

describe('HandledByServiceService', () => {
  let service: HandledByServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HandledByServiceService],
    }).compile();

    service = module.get<HandledByServiceService>(HandledByServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
