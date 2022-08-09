import { Injectable } from '@nestjs/common';
import {Column, OneToMany, Repository} from "typeorm";
import {ServiceCall, ServiceCall as Service} from "./service-call.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CustomerEntity} from "./customer.entity";
import {CustomerDto} from "./dtos/customer.dto";
import {CreateServiceCallDto} from "./dtos/create-service-call.dto";
import {ItemEntity} from "./Item.entity";



@Injectable()
export class ServiceCallsService {
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>,
        @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>
    ) {}

    async createUser(customerDto:CustomerDto){
        console.log(customerDto)
       const customer= await this.customerDtoRepository.save({...customerDto})
        for(const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)){
            ServiceCall.customerEntity=customer
            await this.itemEntityRepository.save(ServiceCall.itemEntity)
            console.log(ServiceCall)
            await this.serviceRepository.save({...ServiceCall})
        }
      return  customer;
    }

    find() {
        return this.customerDtoRepository.find({relations:['serviceCalls','serviceCalls.itemEntity']});
    }
        async update(id: number, attrs: Partial<CustomerDto>) {
       // console.log(attrs)
            const customer = await this.getCustomerById(id);

            if (!customer) {
                throw new Error('User not found.');
            }
             Object.assign(customer.serviceCalls,attrs.serviceCalls)
            console.log(customer.serviceCalls)
            for (const service of customer.serviceCalls) {
                console.log(service.itemEntity)
                 await this.itemEntityRepository.update(service.itemEntity.ItemCode,service.itemEntity)
                 await this.serviceRepository.update(service.ItemCode, service)
            }
              return  await this.customerDtoRepository.update(id,{
                name:attrs.name
            })
        }


    getCustomerById(Id: number) {
            return this.customerDtoRepository.findOne(Id,{relations:['serviceCalls','serviceCalls.itemEntity']});
    }
    getServiceById(Id:number) {
        return this.serviceRepository.findOne(Id)
    }

    async remove(Id: number) {
        const user = await this.getServiceById(Id);

        if (!user) {
            throw new Error('User not found.');
        }
        return this.serviceRepository.remove(user);
    }
}
