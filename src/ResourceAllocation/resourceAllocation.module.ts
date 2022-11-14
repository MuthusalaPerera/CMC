import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
//import { SparePart } from './spare-part.entity';
import {  resourceAllocationEntity } from './resourceAllocation.entity';
import { resourceAllocationController } from './resourceAllocation.controller';
import {  resourceAllocationService } from './resourceAllocation.service';
//import { SparePartsController } from './spare-parts.controller';
//import { SparePartsService } from './spare-parts.service';
import {ServiceCall} from "../service-calls/service-call.entity";

//@Module({
//   imports: [TypeOrmModule.forFeature(resourceAllocation,ServiceCall,CustomerEntity,ItemEntity,ServiceTicketEntity])],
//   controllers: [resourceAllocationController],
//   providers: [{
//     provide:'resourceAllocation_Service',
//     useClass: resourceAllocationService
//   }],
// })
//export class resourceAllocationModule {}
