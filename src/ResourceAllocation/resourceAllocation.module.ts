import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { resourceAllocationController } from './resourceAllocation.controller';
import {  resourceAllocationService } from './resourceAllocation.service';
import {ServiceCall} from "../service-calls/service-call.entity";
import { ResourceAllocationEntity } from './resourceAllocation.entity';
import { Vehicle } from 'src/Vehicle/Vehicle';


@Module({
  imports: [TypeOrmModule.forFeature([ResourceAllocationEntity,ServiceTicketEntity,Vehicle])],
  controllers: [resourceAllocationController],
  providers: [{
    provide:'resourceAllocation_Service',
    useClass: resourceAllocationService
  }],
})
export class resourceAllocationModule {}
