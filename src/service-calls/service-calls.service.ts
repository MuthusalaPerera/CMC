import { Injectable } from '@nestjs/common';
import {Column, OneToMany, Repository} from "typeorm";
import {ServiceCall, ServiceCall as Service} from "./service-call.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CustomerEntity} from "./customer.entity";
import {CustomerDto} from "./dtos/customer.dto";
import {CreateServiceCallDto} from "./dtos/create-service-call.dto";



@Injectable()
export class ServiceCallsService {
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>
    ) {}

    async createUser(customerDto:CustomerDto){
        console.log(customerDto)
       const customer= await this.customerDtoRepository.save({...customerDto})
        for(const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)){
            ServiceCall.customerEntity=customer
            console.log(ServiceCall)
            await this.serviceRepository.save({...ServiceCall})
        }
      return  customer;
    }

    find() {
        return this.customerDtoRepository.find(
            {relations:['serviceCalls']}
        );
    }
        async update(id: number, attrs: Partial<CustomerDto>) {
       // console.log(attrs)
            const customer = await this.getCustomerById(id);

            if (!customer) {
                throw new Error('User not found.');
            }
             Object.assign(customer.serviceCalls,attrs.serviceCalls)
            console.log(customer)
            for (const service of this.serviceRepository.create(attrs.serviceCalls)) {
                await this.serviceRepository.update(service.ItemCode, service)
            }
             return  await this.customerDtoRepository.update(id,{
                 name:attrs.name
             })
        }


    getCustomerById(Id: number) {
            return this.customerDtoRepository.findOne(Id,{relations:['serviceCalls']});
    }
}
