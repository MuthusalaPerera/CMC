import { Injectable } from '@nestjs/common';
import {Column, OneToMany, Repository} from "typeorm";
import {ServiceCall, ServiceCall as Service} from "./service-call.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CustomerEntity} from "./customer.entity";
import {CustomerDto} from "./dtos/customer.dto";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import {User} from "../users/user.entity";


@Injectable()
export class ServiceCallsService {
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>
    ) {}

    async createUser(customerDto:CustomerDto){

       const customer= await this.customerDtoRepository.save(customerDto)
        for(const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)){

            var currentdate =  new Date()
            let dateTime = currentdate.getFullYear()+"" +(currentdate.getMonth()+1)+""+currentdate.getDate()+""+currentdate.getHours()+""+currentdate.getMinutes()+""+currentdate.getMilliseconds() ;
            console.log(dateTime)
            ServiceCall.ItemCode="S"+dateTime
            ServiceCall.customerEntity=customerDto;
            await this.serviceRepository.save(ServiceCall)
        }

       return  customer;
    }

    find() {
        return this.customerDtoRepository.find(
            {relations:['serviceCalls']}
        );
    }
        async update(id: number, attrs: Partial<CustomerEntity>) {
            const customer = await this.getCustomerById(id);

            if (!customer) {
                throw new Error('User not found.');
            }
             Object.assign(customer.serviceCalls,attrs.serviceCalls)
            await this.serviceRepository.save(customer.serviceCalls)
             return  await this.customerDtoRepository.update(id,{
                 name:attrs.name
             })
        }


    getCustomerById(Id: number) {
            return this.customerDtoRepository.findOne(Id,{relations:['serviceCalls']});
    }
}
