import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleControllerController } from './user-role-controller.controller';

describe('UserRoleControllerController', () => {
  let controller: UserRoleControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleControllerController],
    }).compile();

    controller = module.get<UserRoleControllerController>(UserRoleControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
