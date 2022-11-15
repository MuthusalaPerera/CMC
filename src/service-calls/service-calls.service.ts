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
import { OriginsDropDown } from '../IntialDB/Origin';
import { ProblemTypesDropDown } from 'src/IntialDB/ProblemType';
import {Solutions} from "../ServiceCallOther/Solutions"
import {Expences} from "../ServiceCallOther/expences"
import {randomBytes} from "crypto";
import {ServiceTicketEntity} from "./service-ticket.entity";
import {map} from "rxjs/operators";



@Injectable()
export class ServiceCallsService {
    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository:Repository<CustomerEntity>,
        @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>,
        @InjectRepository(UsersDropDown) private readonly userDropDownRepository:Repository<UsersDropDown>,
        @InjectRepository(OriginsDropDown) private readonly originDropDownRepository:Repository<OriginsDropDown>,
        @InjectRepository(ProblemTypesDropDown) private readonly problemTypeDropDownRepository:Repository<ProblemTypesDropDown>,
        @InjectRepository(Solutions) private readonly solutionsRepository:Repository<Solutions>,
        @InjectRepository(Expences) private readonly expencesRepository:Repository<Expences>,
        @InjectRepository(ServiceTicketEntity) private readonly serviceTicketRepository:Repository<ServiceTicketEntity>,
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


    async createNewSolutions(solutions:Solutions){
        return   this.solutionsRepository.save(solutions)
    }
    async createNewExpences(expences:Expences){
        return   this.expencesRepository.save(expences)
    }
    async getExpences(){
        return   this.expencesRepository.find()
    }
    async getSolutions(){
        return   this.solutionsRepository.find()
    }
    findTicketById(id:number){
        return this.serviceRepository.find({where:{ServiceCallId:id},relations:['serviceTicketEntities']});
    }
    reFormatServiceCall(serviceCall: ServiceCall) {
        //serviceTicketEntities:serviceCall.serviceTicketEntities
        const serviceCallObj =this.serviceRepository.create(serviceCall)
        console.log(serviceCallObj.serviceTicketEntities.length)
        if(serviceCallObj.serviceTicketEntities.length!==0){
            for (const ServiceTicketEntity of serviceCall.serviceTicketEntities){

                console.log(ServiceTicketEntity)
                var ticket= {
                    TicketId: ServiceTicketEntity.TicketId,
                    TicketType: ServiceTicketEntity.TicketType,
                    Subject: ServiceTicketEntity.Subject,
                    AssignedTo: ServiceTicketEntity.AssignedTo,
                    AssignedBY: ServiceTicketEntity.AssignedBY,
                    EstimatedDuration: ServiceTicketEntity.EstimatedDuration,
                    ContactPerson: ServiceTicketEntity.ContactPerson,
                    PlannedStartDate: ServiceTicketEntity.PlannedStartDate,
                    PlannedEndDate: ServiceTicketEntity.PlannedEndDate,
                    ActualStartDate: ServiceTicketEntity.ActualStartDate,
                    ActualEndDate:ServiceTicketEntity.ActualEndDate,
                    CreatedOn: ServiceTicketEntity.CreatedOn,
                    priority:serviceCall.Priority
                }
            }
            return ticket
        }
        else{
            return {message:null}
        }




    }

    reFormatServiceTicket(serviceTicketEntity: ServiceTicketEntity) {
        const refomat = {
            TicketId: serviceTicketEntity.TicketId,
            TicketType: serviceTicketEntity.TicketType,
            Subject: serviceTicketEntity.Subject,
            AssignedTo: serviceTicketEntity.AssignedTo,
            AssignedBY: serviceTicketEntity.AssignedBY,
            EstimatedDuration: serviceTicketEntity.EstimatedDuration,
            ContactPerson: serviceTicketEntity.ContactPerson,
            PlannedStartDate: serviceTicketEntity.PlannedStartDate,
            PlannedEndDate: serviceTicketEntity.PlannedEndDate,
            ActualStartDate: serviceTicketEntity.ActualStartDate,
            ActualEndDate:serviceTicketEntity.ActualEndDate,
            CreatedOn: serviceTicketEntity.CreatedOn,
        }
        return refomat
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
    findproblemTypeDropDown() {
        return this.problemTypeDropDownRepository.find();
    }
    findOriginDropDown() {
        return this.originDropDownRepository.find();

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

    listServiceCallsDocuments() {
        return this.serviceRepository.find({Status: "completed"});
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

    async updateNextSchedule(id: number, attrs: Partial<ServiceCall>) {
        console.log(attrs)

             const servie = await this.getServiceById(id);
        if(!servie){
            return new HttpException("Service Not found",HttpStatus.BAD_REQUEST);
        }
        else{
            Object.assign(servie, attrs)
            console.log(servie)
            return await this.serviceRepository.save(servie)
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
