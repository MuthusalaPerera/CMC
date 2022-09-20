import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { CustomerDto } from 'src/Customer/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { Repository } from 'typeorm';
import { SparePart } from './spare-part.entity';
import {ServiceCall} from "../service-calls/service-call.entity";

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
      @InjectRepository(ServiceTicketEntity) private readonly ServiceTicketDtoRepository:Repository<ServiceTicketEntity>,
      @InjectRepository(ItemEntity) private readonly itemEntityRepository:Repository<ItemEntity>
      ){}

      async createSparepart(serviceTicketDto:ServiceTicketDto){
       console.log(serviceTicketDto)
          console.log(serviceTicketDto)
          const serviceCall=await this.serviceRepository.create({...serviceTicketDto})
          for( const ServiceTickets of this.ServiceTicketDtoRepository.create(serviceTicketDto.serviceTicket)){
              ServiceTickets.serviceCall=serviceCall
              const ST=await this.ServiceTicketDtoRepository.save({...ServiceTickets})
              for (const SparePart of this.spareRepository.create(ServiceTickets.sparePart)){
                  console.log(SparePart.itemEntity)
                  console.log(SparePart.ServiceTicketEntity)

                  SparePart.ServiceTicketEntity=ST
                  await this.itemEntityRepository.save(SparePart.itemEntity)
                  await this.spareRepository.save({...SparePart})
              }
          }
      return serviceCall;
    }

    find(){
      return this.ServiceTicketDtoRepository.find();
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
    //     return await this.ServiceTicketDtoRepository.update(id,{
    //       TicketId:attrs.TicketId
    //     })
    //
    // }
          getServiceTicketById(id: number) {
              return this.ServiceTicketDtoRepository.findOne(id,{relations:['sparePart','sparePart.itemEntity']});
          }
          getSparePartById(Id:number){
            return this.ServiceTicketDtoRepository.findOne(Id)
          }
          async remove(Id: number){
            const Spare = await this.getSparePartById(Id);
            if(!Spare){
              throw new Error('Not Found');
            }
            return this.ServiceTicketDtoRepository.remove(Spare);
          }


}
