import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import {ServiceCall} from "../service-calls/service-call.entity"
import {Repository} from "typeorm"
import {CustomerEntity} from "../Customer/customer.entity"
import {ItemEntity} from "../Item/Item.entity"
import {SerilizedUser} from "./dto/serilized.mobile"


@Injectable()
export class MobileService {
    
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>,
        @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>
    ) {}
    getCustomer(Id: number) {
         return this.customerDtoRepository.findOne(Id);
    }

    getAllCustomer() {
        return this.customerDtoRepository.find();
    }
    getAllItems(){
        return this.itemEntityRepository.find();
    }
    getAllService(){
        return this.serviceRepository.find();
    }
  
}
