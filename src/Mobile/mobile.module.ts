import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm"
import {ServiceCall} from "../service-calls/service-call.entity"
import {CustomerEntity} from "../Customer/customer.entity"
import {ItemEntity} from "../Item/Item.entity"
import {MobileService} from "./mobile.service"
import {MobileController} from "./mobile.controller"
import Login from "../IntialDB/Login"

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCall,CustomerEntity,ItemEntity,Login])],
  controllers: [MobileController],
  providers: [{
    provide: 'Mobile_Service',
    useClass: MobileService
  }],
})
export class MobileModule {}
