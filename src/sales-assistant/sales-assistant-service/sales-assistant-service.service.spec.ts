import { Test, TestingModule } from '@nestjs/testing';
import { SalesAssistantServiceService } from './sales-assistant-service.service';

describe('SalesAssistantServiceService', () => {
  let service: SalesAssistantServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesAssistantServiceService],
    }).compile();

    service = module.get<SalesAssistantServiceService>(SalesAssistantServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
