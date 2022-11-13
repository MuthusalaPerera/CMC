import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleServiceService } from './user-role-service.service';

describe('UserRoleServiceService', () => {
  let service: UserRoleServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRoleServiceService],
    }).compile();

    service = module.get<UserRoleServiceService>(UserRoleServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
