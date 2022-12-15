import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClusterHead } from 'src/IntialDB/ClusterHead';
import { ClusterHeadControllerController } from './cluster-head-controller/cluster-head-controller.controller';
import { ClusterHeadServiceService } from './cluster-head-service/cluster-head-service.service';

@Module({
  controllers: [ClusterHeadControllerController],
  imports: [TypeOrmModule.forFeature([ClusterHead])],
  providers: [{
    provide: 'clusterHead_Service',
    useClass: ClusterHeadServiceService
  }],
})
export class ClusterHeadModule {}

