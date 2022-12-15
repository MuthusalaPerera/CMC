import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {Column, createQueryBuilder, OneToMany, Repository} from "typeorm";
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
import {Resolution} from "../ServiceCallOther/Resolution";
import {ResolutionDTO} from "../ServiceCallOther/ResolutionDTO";
import {Remark} from "../ServiceCallOther/Remark";
import {File} from "../ServiceCallOther/File";
import {ExpencesDTO} from "../ServiceCallOther/ExpencesDTO";
import {EquipmetCard} from "../Customer/EquipmetCard";


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
        @InjectRepository(Resolution) private readonly resolutionRepository:Repository<Resolution>,
        @InjectRepository(File) private readonly fileRepository:Repository<File>,
         @InjectRepository(EquipmetCard) private readonly equipmentCardRepository:Repository<EquipmetCard>
    ) {}
    async createUser(customerDto:CustomerDto){
        const c=await this.getCustomerById(customerDto.CustomerId)
            if(!c) {
                const customer = await this.customerDtoRepository.save({...customerDto})
                // console.log(customer)
                for (const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)) {
                    ServiceCall.customerEntity = customer
                    const item =await  this.findByItemCode(ServiceCall.itemEntity.ItemCode)
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

    async createResolution(remark:Resolution){
        console.log(remark)
        const service = await this.serviceRepository.findOne(remark.serviceCall.ServiceCallId);
        console.log(remark)
        if (!service) {
            return new HttpException("Service Not found",HttpStatus.BAD_REQUEST);
        }
        else {
            const serviceObj = await this.serviceRepository.create(remark.serviceCall);
            remark.serviceCall=serviceObj
            return await this.resolutionRepository.save(remark)
        }

    }
    async getResolutionId(id:number){
        const servicecall=await this.serviceRepository.findOne(id)
        console.log(servicecall)
        return   this.resolutionRepository.find({where:{serviceCall:servicecall}})
    }

    async createRemark(remark:Remark){
        const service = await this.serviceRepository.findOne(remark.ServiceCallId);

        if (!service) {
            return new HttpException("Service Not found",HttpStatus.BAD_REQUEST);
        }
        else {
            Object.assign(service,remark)
            return   this.serviceRepository.save(remark)
        }

    }

    async createNewSolutions(solutions:Solutions){
        const servicecall=this.serviceRepository.create(solutions.serviceCall)
        solutions.serviceCall=servicecall;
        return   this.solutionsRepository.save(solutions)
    }
    async updateNewSolutions(solutions:Solutions){
        const usolutions = await this.solutionsRepository.findOne(solutions.Id);

        if (!usolutions) {
            return new HttpException("Solution Not found",HttpStatus.BAD_REQUEST);
        }
        else {
            Object.assign(usolutions,solutions)
            return   this.solutionsRepository.save(usolutions)
        }

    }
    async createNewExpences(expences:ExpencesDTO){
        const servicecall=this.serviceRepository.findOne(expences.serviceCall)
        if (!servicecall) {
            return new HttpException("Service Not found",HttpStatus.BAD_REQUEST);
        }
        else {
            const serviceObj = await this.serviceRepository.create(expences.serviceCall);
            expences.serviceCall=serviceObj
            console.log(expences)
            return await this.expencesRepository.save(expences)
        }

    }
    async getExpences(Id:number){
        const servicecall=await this.serviceRepository.findOne(Id)
        return   this.expencesRepository.find({where:{serviceCall:servicecall}})
    }
    async getSolutions(){
        return   this.solutionsRepository.find()
    }
    async getFiles(Id:number){
        const servicecall=await this.serviceRepository.findOne(Id)
        return   this.fileRepository.find({where:{serviceCall:servicecall}})
    }
    async getSolutionsId(id:number){
        const servicecall=await this.serviceRepository.findOne(id)
        console.log(servicecall)
        return   this.solutionsRepository.find({where:{serviceCall:servicecall}})
    }
    findTicketById(id:number){
        return this.serviceRepository.find({where:{ServiceCallId:id},relations:['serviceTicketEntities']});
    }
    reFormatServiceCall(serviceCall: ServiceCall) {
        //serviceTicketEntities:serviceCall.serviceTicketEntities
        const serviceCallObj =this.serviceRepository.create(serviceCall)
        // console.log(serviceCallObj.serviceTicketEntities.length)


                // console.log(ServiceTicketEntity)
                return  serviceCall.serviceTicketEntities.map(ServiceTicketEntity =>{return {
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

                })



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
    findEquipmentCard() {
        return  createQueryBuilder("EquipmetCard")
            .groupBy('custmrName')
            .getRawMany();
    }
    findItem() {
        return this.itemEntityRepository.find();
    }
    findEquipmentCardItem(name:string) {
        return  createQueryBuilder("EquipmetCard")
            .where('EquipmetCard.custmrName = :name')
            .setParameter('name', name)
            .getRawMany();
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
    // findById(id:number) {
    //     return this.customerDtoRepository.findOne(id);
    // }

    async findServiceById(id:number) {
        const service=await this.serviceRepository.findOne(id)
        return service;
    }
    async findServiceByIdNew(id:number) {
        const service=await this.serviceRepository.findOne(id)
        return [service];
    }
    findByItemCode(code:string) {
        return this.itemEntityRepository.findOne({ItemCode:code});
    }
    findByEquipmentCardItem(code:string) {
        return this.equipmentCardRepository.findOne({itemName:code});
    }
    findByItemName(name:string) {
        return this.itemEntityRepository.findOne({ItemDescription:name});
    }
    findS() {
        return this.serviceRepository.find({relations:['customerEntity','itemEntity']});
    }
    findById(id:number) {
        return this.serviceRepository.findOne({relations:['customerEntity','itemEntity']});
    }

    listServiceCallsDocuments() {
        return this.serviceRepository.find({where:{Status: "completed"}});
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
                    CustomerAddressId:attrs.CustomerAddressId,
                    TelephoneNo:attrs.TelephoneNo
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
    getCustomerByEquipmentCardName(name: string) {
        return this.equipmentCardRepository.findOne({custmrName: name});
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
