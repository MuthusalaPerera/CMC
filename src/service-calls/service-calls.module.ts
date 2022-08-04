import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCallsController } from './service-calls.controller';
import { ServiceCallsService } from './service-calls.service';
import { ServiceCall } from './service-call.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCall])],
  controllers: [ServiceCallsController],
  providers: [ServiceCallsService],
})
export class ServiceCallsModule {}
