import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HandledBy } from 'src/IntialDB/handledBy';
import { HandledByControllerController } from './handled-by-controller/handled-by-controller.controller';
import { HandledByServiceService } from './handled-by-service/handled-by-service.service';

@Module({
  controllers: [HandledByControllerController],
  imports: [TypeOrmModule.forFeature([HandledBy])],
  providers: [{
    provide: 'handledBy_Service',
    useClass: HandledByServiceService
  }],
})
export class HandledByModule {}


