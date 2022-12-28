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
import { Inventory } from 'src/inventory/inventory.entity';
import { CreateinventoryDto } from 'src/inventory/dtos/create-inventory.dto';


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
      @InjectRepository(ItemMasterEntity) private readonly itemMasterEntityRepository:Repository<ItemMasterEntity>,
      @InjectRepository(Inventory) private readonly inventoryRepository:Repository<Inventory>
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
    async  createInventory(inventory:CreateinventoryDto){
      const sparepart=this.spareRepository.create(inventory.spareparts)
      if(sparepart){
        const spareobj=this.spareRepository.create({SPReqId:inventory.spareparts.SPReqId})
        inventory.spareparts=spareobj
        this.inventoryRepository.save(inventory)
       
      }
      return this.spareRepository.save(inventory.spareparts)
    }

    find(){
      return this.serviceTicketRepository.find();
    }
    findId(Id){
        return this.serviceTicketRepository.find({TicketId:Id});
    }
    findHistory(){
        return this.serviceTicketRepository.find({where:{Status:"completed"}});
    }
    findTicket(){
        return this.spareRepository.find({relations:['ServiceTicketEntity','ServiceTicketEntity.serviceCall']});
    }

    async update(id:number, attrs: Partial<TicketDto>){
        console.log(attrs)
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


        const ST=await this.serviceTicketRepository.findOne({TicketId:body.TicketId})
        // console.log(ST);
        const spare = await this.spareRepository.create(body.sparePart)
        spare.ServiceTicketEntity=ST
        console.log(spare);
        const savedSpare = await this.spareRepository.save(spare)
        //  console.log(savedSpare);
        for(const inventory of this.inventoryRepository.create(body.sparePart.inventory)){
          inventory.spareparts=savedSpare
          console.log("inventory");
          console.log(inventory);
          const Inventory=await this.inventoryRepository.save(inventory)
        }  
        
       
        
       
        return Inventory;

    }
}
