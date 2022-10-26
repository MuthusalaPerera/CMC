import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {Column, OneToMany, Repository} from "typeorm";
import {ServiceCall, ServiceCall as Service} from "./service-call.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CustomerEntity} from "../Customer/customer.entity";
import {CustomerDto} from "../Customer/dtos/customer.dto";
import {CreateServiceCallDto} from "./dtos/create-service-call.dto";
import {ItemEntity} from "../Item/Item.entity";
import {IPaginationOptions, paginate, Pagination} from "nestjs-typeorm-paginate";
import {UsersDropDown} from "../IntialDB/Users"



@Injectable()
export class ServiceCallsService {
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>,
        @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>,
        @InjectRepository(UsersDropDown) private readonly userDropDownRepository:Repository<UsersDropDown>
    ) {}
    async createUser(customerDto:CustomerDto){
       console.log(CustomerDto)
        const c=await this.getCustomerById(customerDto.CustomerId)
        //console.log(c)
            if(!c) {
                const customer = await this.customerDtoRepository.save({...customerDto})
                console.log(customer)
                for (const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)) {
                    ServiceCall.customerEntity = customer
                    const item =await  this.findByItemCode(ServiceCall.itemEntity.ItemCode)
                   // console.log(item)
                    if(!item){
                        await this.itemEntityRepository.save(ServiceCall.itemEntity)
                        await this.serviceRepository.save({...ServiceCall})
                    }
                    else{
                        await this.itemEntityRepository.create(ServiceCall.itemEntity)
                        await this.serviceRepository.save({...ServiceCall})
                    }
                }
                return customer
            }
            else
            {
                const customer = await this.customerDtoRepository.create({...customerDto})
                for (const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)) {
                    // console.log(ServiceCall)
                    const s = await this.findServiceById(ServiceCall.ServiceCallId)
                    console.log(s)
                    if(!s){
                        ServiceCall.customerEntity = customer
                        const item =await  this.findByItemCode(ServiceCall.itemEntity.ItemCode)
                        console.log(item)
                        if(!item){
                            await this.itemEntityRepository.save(ServiceCall.itemEntity)
                            await this.serviceRepository.save({...ServiceCall})
                        }
                        else{
                            // const i= this.itemEntityRepository.create(ServiceCall.itemEntity)
                              console.log(ServiceCall.itemEntity)
                             ServiceCall.itemEntity=item
                             await this.serviceRepository.save({...ServiceCall})
                        }
                       //  await this.itemEntityRepository.save(ServiceCall.itemEntity)
                       // // console.log(ServiceCall)
                       //  await this.serviceRepository.save({...ServiceCall})
                    }
                }
                return customer
            }
    }

    find() {
        return this.customerDtoRepository.find({relations:['serviceCalls','serviceCalls.itemEntity']});
    }
    findCustomer() {
        return this.customerDtoRepository.find();
    }
    findItem() {
        return this.itemEntityRepository.find();
    }
    findDropdown(){
        return this.userDropDownRepository.find()
    }
    findById(id:number) {
        return this.customerDtoRepository.findOne(id);
    }
    findServiceById(id:number) {
        return this.serviceRepository.findOne(id);
    }
    findByItemCode(code:string) {
        return this.itemEntityRepository.findOne({ItemCode:code});
    }
    findByItemName(name:string) {
        return this.itemEntityRepository.findOne({ItemDescription:name});
    }
    findS() {
        return this.serviceRepository.find({relations:['customerEntity','itemEntity']});
    }

    async findP(options: IPaginationOptions): Promise<Pagination<ServiceCall>> {
        return paginate(this.serviceRepository, options);
    }
        async update(id: number, attrs: Partial<CustomerDto>) {
             console.log(attrs)
            const customer = await this.getCustomerById(id);
             Object.assign(customer,attrs)
            if (!customer) {
                return new HttpException("Customer Not found",HttpStatus.BAD_REQUEST);
            }
            else {
                 Object.assign(customer.serviceCalls, attrs.serviceCalls)
                console.log(customer.serviceCalls)
                for (const service of customer.serviceCalls) {
                    // Object.assign(customer.serviceCalls.it, attrs.serviceCalls)
                     await this.itemEntityRepository.update({ItemCode:service.itemEntity.ItemCode}, service.itemEntity)
                    await this.serviceRepository.update(service.ServiceCallId, service)
                }
                return await this.customerDtoRepository.update(id, {
                    CustomeName: attrs.CustomeName,
                    ContactPerson:attrs.ContactPerson,
                })
            }
        }
        
    getCustomerById(Id: number) {
            return this.customerDtoRepository.findOne(Id,{relations:['serviceCalls','serviceCalls.itemEntity']});
    }

    getCustomerByName(name: string) {
        return this.customerDtoRepository.findOne({CustomeName: name}, {relations: ["serviceCalls", "serviceCalls.itemEntity"]});
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
