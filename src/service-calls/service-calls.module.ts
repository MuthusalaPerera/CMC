import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCallsController } from './service-calls.controller';
import { ServiceCallsService } from './service-calls.service';
import { ServiceCall } from './service-call.entity';
import {CustomerEntity} from "../Customer/customer.entity";
import {SerializedCustomer} from "./dtos/serilized.service";
import {ItemEntity} from "../Item/Item.entity";
import {UsersDropDown} from "../IntialDB/Users"
import { OriginsDropDown } from 'src/IntialDB/Origin';
import { ProblemTypesDropDown } from 'src/IntialDB/ProblemType';
import {Solutions} from "../ServiceCallOther/Solutions"
import {Expences} from "../ServiceCallOther/expences"
import {ServiceTicketEntity} from "./service-ticket.entity";


@Module({
  imports: [TypeOrmModule.forFeature([ServiceCall,CustomerEntity,ItemEntity,UsersDropDown,OriginsDropDown,ProblemTypesDropDown,Solutions,Expences,ServiceTicketEntity])],
  controllers: [ServiceCallsController],
  providers: [{
    provide: 'ServiceCalls_Service',
    useClass: ServiceCallsService
  }],
})
export class ServiceCallsModule {}
