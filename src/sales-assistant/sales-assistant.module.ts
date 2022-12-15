import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesAssistantDB } from 'src/IntialDB/SalesAssistant';
import { SalesAssistantControllerController } from './sales-assistant-controller/sales-assistant-controller.controller';
import { SalesAssistantServiceService } from './sales-assistant-service/sales-assistant-service.service';

@Module({
  controllers: [SalesAssistantControllerController],
  imports: [TypeOrmModule.forFeature([SalesAssistantDB])],
  providers: [{
    provide: 'salesAssistant_Service',
    useClass: SalesAssistantServiceService
  }],
})
export class SalesAssistantModule {}

