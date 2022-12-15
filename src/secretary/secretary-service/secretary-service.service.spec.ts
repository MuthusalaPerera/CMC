import { Test, TestingModule } from '@nestjs/testing';
import { SecretaryServiceService } from './secretary-service.service';

describe('SecretaryServiceService', () => {
  let service: SecretaryServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretaryServiceService],
    }).compile();

    service = module.get<SecretaryServiceService>(SecretaryServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
