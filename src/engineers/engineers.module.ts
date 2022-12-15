import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineersDB } from 'src/IntialDB/Engineers';
import { EngineerControllerController } from './engineer-controller/engineer-controller.controller';
import { EngineerServiceService } from './engineer-service/engineer-service.service';

@Module({
  controllers: [EngineerControllerController],
  imports: [TypeOrmModule.forFeature([EngineersDB])],
  providers: [{
    provide: 'engineer_Service',
    useClass: EngineerServiceService
  }],
})
export class EngineersModule {}
