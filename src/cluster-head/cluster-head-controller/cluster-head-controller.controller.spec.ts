import { Test, TestingModule } from '@nestjs/testing';
import { ClusterHeadControllerController } from './cluster-head-controller.controller';

describe('ClusterHeadControllerController', () => {
  let controller: ClusterHeadControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClusterHeadControllerController],
    }).compile();

    controller = module.get<ClusterHeadControllerController>(ClusterHeadControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
