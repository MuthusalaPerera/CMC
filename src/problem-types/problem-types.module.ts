import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemTypesDropDown } from 'src/IntialDB/ProblemType';
import { ProblemTypeControllerController } from './problem-type-controller/problem-type-controller.controller';
import { ProblemTypeServiceService } from './problem-type-service/problem-type-service.service';

@Module({
  controllers: [ProblemTypeControllerController],
  imports: [TypeOrmModule.forFeature([ProblemTypesDropDown])],
  providers: [{
    provide: 'problemTypes_Service',
    useClass: ProblemTypeServiceService
  }],
})
export class ProblemTypesModule {}

