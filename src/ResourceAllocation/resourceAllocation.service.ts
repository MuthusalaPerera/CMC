import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { CustomerDto } from 'src/Customer/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { Repository } from 'typeorm';
import { resourceAllocationEntity } from './resourceAllocation.entity';
import {ServiceCall} from "../service-calls/service-call.entity";
import {CreateresourceAllocationDto} from "./dtos/create-resourceAllocation.dto";

@Injectable()
export class resourceAllocationService {
  // remove(arg0: number) {
  //   throw new Error('Method not implemented.');
  // }
  // getSparePartById(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  // update(arg0: number, body: ServiceTicketEntity) {
  //   throw new Error('Method not implemented.');
  // }

    constructor(
      @InjectRepository(resourceAllocationEntity) private readonly resourceAllocationRepository:Repository<resourceAllocationEntity>,
      @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
      @InjectRepository(ServiceTicketEntity) private readonly serviceTicketRepository:Repository<ServiceTicketEntity>,
      @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>
      ){}

      async createServiceticket(serviceTicketDto:ServiceTicketDto){
       console.log(serviceTicketDto)
          console.log(serviceTicketDto)
          const serviceCall=await this.serviceRepository.create({...serviceTicketDto})
          for( const ServiceTickets of this.serviceTicketRepository.create(serviceTicketDto.serviceTicket)){
              ServiceTickets.serviceCall=serviceCall
              const ST=await this.serviceTicketRepository.save({...ServiceTickets})
          }
      return serviceCall;
    }

    find(){
      return this.serviceTicketRepository.find();
    }
    findTicket(){
        return this.resourceAllocationRepository.find({relations:['ServiceTicketEntity','ServiceTicketEntity.serviceCall']});
    }
    
    // async update(id:number, attrs: Partial<ServiceTicketDto>){
    //   const sparepart = await this.getServiceTicketById(id);
    //
    //   if(!sparepart){
    //     throw new Error('Not found');
    //   }
    //
    //   Object.assign(sparepart.sparePart,attrs.sparePart)
    //   console.log(sparepart.sparePart)
    //   for (const part of sparepart.sparePart){
    //     console.log(part.itemEntity)
    //     await this.itemEntityRepository.update(part.itemEntity.ItemCode,part.itemEntity)
    //     await this.spareRepository.update(part.SPReqId,part)
    //   }
    //     return await this.serviceTicketRepository.update(id,{
    //       TicketId:attrs.TicketId
    //     })
    //
    // }
          getServiceTicketById(id: number) {
              return this.serviceTicketRepository.findOne(id,{relations:['resourceAllocation','resourceAllocation.itemEntity','itemEntity']});
          }
          getresourceAllocationById(Id:number){
            return this.serviceTicketRepository.findOne(Id)
          }
          async remove(Id: number){
            const resourceAllocation = await this.getresourceAllocationById(Id);
            if(!resourceAllocation){
              throw new Error('Not Found');
            }
            return this.serviceTicketRepository.remove(resourceAllocation);
          }
    findByItemCode(code:string) {
        return this.itemEntityRepository.findOne({ItemCode:code});
    }
    async createresourceAllocation(body: CreateresourceAllocationDto) {
        const RA=await this.serviceTicketRepository.create({...body})
        for (const resourceAllocation of this.resourceAllocationRepository.create(body.resourceAllocation)){
            // console.log(SparePart.itemEntity)
            console.log(resourceAllocation.ServiceTicketEntity)
            resourceAllocation.ServiceTicketEntity=RA
            // const itemDB =await  this.findByItemCode(SparePart.itemEntity.ItemCode)
            // console.log(itemDB)
            // SparePart.itemEntity=itemDB;
         //   await this.itemEntityRepository.create(SparePart.itemEntity)
            await this.resourceAllocationRepository.save({...resourceAllocation})
        }
    }
}
