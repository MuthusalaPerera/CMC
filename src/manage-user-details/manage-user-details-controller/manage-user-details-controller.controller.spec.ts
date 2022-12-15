import { Test, TestingModule } from '@nestjs/testing';
import { ManageUserDetailsControllerController } from './manage-user-details-controller.controller';

describe('ManageUserDetailsControllerController', () => {
  let controller: ManageUserDetailsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageUserDetailsControllerController],
    }).compile();

    controller = module.get<ManageUserDetailsControllerController>(ManageUserDetailsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
