import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { CustomerDto } from 'src/Customer/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { Repository } from 'typeorm';
import { ResourceAllocationEntity } from './ResourceAllocation.entity';
import {ServiceCall} from "../service-calls/service-call.entity";
import {CreateresourceAllocationDto} from "./dtos/create-resourceAllocation.dto";
import { CreateVehicleAllocationDto } from './dtos/create-vehicleAllocation.dto';
import { Vehicle } from 'src/Vehicle/Vehicle';



@Injectable()
export class resourceAllocationService {


    constructor(
       @InjectRepository(ResourceAllocationEntity) private readonly resourceAllocationRepository:Repository<ResourceAllocationEntity>,
      // @InjectRepository(ServiceCall) private readonly serviceRepository:Repository<ServiceCall>,
       @InjectRepository(ServiceTicketEntity) private readonly serviceTicketRepository:Repository<ServiceTicketEntity>,
       @InjectRepository(Vehicle) private readonly VehicleEntityRepository:Repository<Vehicle>
      ){}

      async createresourceAllocation(createResourceAllocation:CreateresourceAllocationDto){
       console.log(createResourceAllocation)
      const ticket=await this.serviceTicketRepository.findOne(createResourceAllocation.TicketId)
         console.log(ticket)
         if(!ticket){
          return new HttpException("Ticket Not found",HttpStatus.BAD_REQUEST);
         }
         else{
          const ticket=await this.serviceTicketRepository.create(createResourceAllocation)
                for( const ResourceAllocationEntity of this.resourceAllocationRepository.create(createResourceAllocation.resourceAllocation)){
                  ResourceAllocationEntity.serviceTicketEntity=ticket
              var ST=await this.resourceAllocationRepository.save(ResourceAllocationEntity)
          }
          return ST;
         }

    }


    // Vehicle

    
    async createVehicleAllocation(createVehicleAllocation:CreateVehicleAllocationDto){
      console.log(createVehicleAllocation)
   
        
              
        
           var ST=await this.VehicleEntityRepository.save(createVehicleAllocation)
         
        return ST;
        

   
   }



    // find(){
    //   return this.serviceTicketRepository.find();
    // }
    // findTicket(){
    //     // return this.resourceAllocationRepository.find({relations:['ServiceTicketEntity','ServiceTicketEntity.serviceCall']});
    // }
    
    // // async update(id:number, attrs: Partial<ServiceTicketDto>){
    // //   const sparepart = await this.getServiceTicketById(id);
    // //
    // //   if(!sparepart){
    // //     throw new Error('Not found');
    // //   }
    // //
    // //   Object.assign(sparepart.sparePart,attrs.sparePart)
    // //   console.log(sparepart.sparePart)
    // //   for (const part of sparepart.sparePart){
    // //     console.log(part.itemEntity)
    // //     await this.itemEntityRepository.update(part.itemEntity.ItemCode,part.itemEntity)
    // //     await this.spareRepository.update(part.SPReqId,part)
    // //   }
    // //     return await this.serviceTicketRepository.update(id,{
    // //       TicketId:attrs.TicketId
    //     })
    //
    // }
    //       getServiceTicketById(id: number) {
    //           return this.serviceTicketRepository.findOne(id,{relations:['resourceAllocation','resourceAllocation.itemEntity','itemEntity']});
    //       }
    //       getresourceAllocationById(Id:number){
    //         return this.serviceTicketRepository.findOne(Id)
    //       }
    //       async remove(Id: number){
    //         const resourceAllocation = await this.getresourceAllocationById(Id);
    //         if(!resourceAllocation){
    //           throw new Error('Not Found');
    //         }
    //         return this.serviceTicketRepository.remove(resourceAllocation);
    //       }
    // findByItemCode(code:string) {
    //     return this.itemEntityRepository.findOne({ItemCode:code});
    // }
    // async createresourceAllocation(body: CreateresourceAllocationDto) {
    //     const RA=await this.serviceTicketRepository.create({...body})
       
       
       
    //    // for (const resourceAllocation of this.resourceAllocationRepository.create(body.resourceAllocation)){
       
       
    //       // console.log(SparePart.itemEntity)
    //         // console.log(resourceAllocation.ServiceTicketEntity)
    //         // resourceAllocation.ServiceTicketEntity=RA
    //         // const itemDB =await  this.findByItemCode(SparePart.itemEntity.ItemCode)
    //         // console.log(itemDB)
    //         // SparePart.itemEntity=itemDB;
    //      //   await this.itemEntityRepository.create(SparePart.itemEntity)
           
         
    //      //await this.resourceAllocationRepository.save({...resourceAllocation})
        
        
        
    //     //}



    

  }