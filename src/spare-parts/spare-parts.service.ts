import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { CustomerDto } from 'src/Customer/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { Repository } from 'typeorm';
import { SparePart } from './spare-part.entity';
import {ServiceCall} from "../service-calls/service-call.entity";
import {CreateSparePartDto} from "./dtos/create-spare-part.dto";

import {TicketDto} from "./dtos/ticket.dto";

import { ItemMasterEntity } from 'src/Item/ItemMaster';
import { UpdateSparePartDto } from './dtos/update-spare-part.dto';


@Injectable()
export class SparePartsService {
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
      @InjectRepository(SparePart) private readonly spareRepository:Repository<SparePart>,
      @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
      @InjectRepository(ServiceTicketEntity) private readonly serviceTicketRepository:Repository<ServiceTicketEntity>,
      @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>,
      @InjectRepository(ItemMasterEntity) private readonly itemMasterEntityRepository:Repository<ItemMasterEntity>
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
        return this.spareRepository.find({relations:['ServiceTicketEntity','ServiceTicketEntity.serviceCall']});
    }

    async update(id:number, attrs: Partial<TicketDto>){
         const serviceTicketEntity = await this.getServiceTicketOnlyById(id);
        console.log(attrs)
        if(!serviceTicketEntity){
            throw new Error('Not found');
        }
        Object.assign(serviceTicketEntity,attrs)
        return await this.serviceTicketRepository.save(serviceTicketEntity)
    }


    async updateSpare(id: number, attrs: Partial<UpdateSparePartDto>) {
      console.log(attrs)
     const sparePart = await this.spareRepository.findOne(id);
     
     if (!sparePart) {
         return new HttpException("Spare Part Not found",HttpStatus.BAD_REQUEST);
     }
     else {
      Object.assign(sparePart,attrs)
        
              await this.spareRepository.update({SPReqId:id},attrs)
             
     }
 }

          getServiceTicketById(id: number) {
              return this.serviceTicketRepository.findOne(id,{relations:['sparePart','sparePart.itemEntity','itemEntity']});
          }

         getServiceTicketOnlyById(id: number) {
              return this.serviceTicketRepository.findOne(id);
        }
          getSparePartById(Id:number){
            return this.serviceTicketRepository.findOne(Id)
          }
          getItemMasterEntity(){
            return this.itemMasterEntityRepository.find()
          }
          async remove(Id: number){
            const Spare = await this.getSparePartById(Id);
            if(!Spare){
              throw new Error('Not Found');
            }
            return this.serviceTicketRepository.remove(Spare);
          }
    findByItemCode(code:string) {
        return this.itemEntityRepository.findOne({ItemCode:code});
    }
    async createSparepart(body: CreateSparePartDto) {
        const ST=await this.serviceTicketRepository.create({...body})
        for (const SparePart of this.spareRepository.create(body.sparePart)){
            // console.log(SparePart.itemEntity)
            console.log(SparePart.ServiceTicketEntity)
            SparePart.ServiceTicketEntity=ST
            // const itemDB =await  this.findByItemCode(SparePart.itemEntity.ItemCode)
            // console.log(itemDB)
            // SparePart.itemEntity=itemDB;
         //   await this.itemEntityRepository.create(SparePart.itemEntity)
            await this.spareRepository.save({...SparePart})
        }
    }
}
