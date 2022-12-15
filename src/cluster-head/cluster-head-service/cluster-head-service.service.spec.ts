import { Test, TestingModule } from '@nestjs/testing';
import { ClusterHeadServiceService } from './cluster-head-service.service';

describe('ClusterHeadServiceService', () => {
  let service: ClusterHeadServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClusterHeadServiceService],
    }).compile();

    service = module.get<ClusterHeadServiceService>(ClusterHeadServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
