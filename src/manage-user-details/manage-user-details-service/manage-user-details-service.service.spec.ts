import { Test, TestingModule } from '@nestjs/testing';
import { ManageUserDetailsServiceService } from './manage-user-details-service.service';

describe('ManageUserDetailsServiceService', () => {
  let service: ManageUserDetailsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageUserDetailsServiceService],
    }).compile();

    service = module.get<ManageUserDetailsServiceService>(ManageUserDetailsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
