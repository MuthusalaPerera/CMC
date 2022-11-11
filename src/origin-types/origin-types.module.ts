import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OriginsDropDown } from 'src/IntialDB/Origin';
import { OriginTypeControllerController } from './origin-type-controller/origin-type-controller.controller';
import { OriginTypeServiceService } from './origin-type-service/origin-type-service.service';

@Module({
  controllers: [OriginTypeControllerController],
  imports: [TypeOrmModule.forFeature([OriginsDropDown])],
  providers: [{
    provide: 'originTypes_Service',
    useClass: OriginTypeServiceService
  }],
})

export class OriginTypesModule {}
