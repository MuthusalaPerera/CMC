import { Test, TestingModule } from '@nestjs/testing';
import { OriginTypeServiceService } from './origin-type-service.service';

describe('OriginTypeServiceService', () => {
  let service: OriginTypeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OriginTypeServiceService],
    }).compile();

    service = module.get<OriginTypeServiceService>(OriginTypeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
