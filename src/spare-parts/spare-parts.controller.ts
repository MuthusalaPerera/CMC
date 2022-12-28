import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { CustomerDto } from 'src/Customer/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { CreateSparePartDto } from 'src/spare-parts/dtos/create-spare-part.dto';
import { UpdateSparePartDto } from './dtos/update-spare-part.dto';
import { SparePartsService } from './spare-parts.service';
import {TicketDto} from "./dtos/ticket.dto";

@Controller('spare-parts')
export class SparePartsController {
  constructor(@Inject('SpareParts_Service') private readonly sparePartsService:SparePartsService){}

    @Get('/FindTicket')
    async listSpareParts() {
      return await this.sparePartsService.find();
      }
  @Get('/FindTicket/:id')
  async listSparePartsId(@Param('id') id: string) {
    return await this.sparePartsService.findId(id);
  }
  @Get('/History')
  async History() {
    return await this.sparePartsService.findHistory();
  }

  @Get('/Ticket')
  async listTickets() {
    return await this.sparePartsService.findTicket();
  }
    @Post()
    async createServiceTicket(@Body() body: ServiceTicketDto) {
    console.log(ServiceTicketDto)
      return await this.sparePartsService.createServiceticket(body)
    }
  @Post('fileUpload')
  async attachment(@Body() body: ServiceTicketDto) {
    console.log(ServiceTicketDto)
    return await this.sparePartsService.createServiceticket(body)
  }
  @Post('/create')
  async createSparePart(@Body() body: CreateSparePartDto) {
    console.log(ServiceTicketDto)
    return await this.sparePartsService.createSparepart(body)
  }

    @Put('/ticket/:id')
    updateSparePart1(@Param('id') id: string, @Body() body:TicketDto) {
        console.log(body)
        return this.sparePartsService.update(parseInt(id), body);
    }
  @Get('/itemService')
  async getItemEntity() {
    const sparepart = await this.sparePartsService.getItemMasterEntity();
    if(sparepart) return sparepart;
    else throw new NotFoundException();
  }

    @Put('/updateSpare/:id')
    updateSparePart(@Param('id',ParseIntPipe) id: number, @Body() body:UpdateSparePartDto){
      return this.sparePartsService.updateSpare(id,body);

    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:id')
    async getSparePart(@Param('id', ParseIntPipe) id: number) {
      const sparepart = await this.sparePartsService.getSparePartById(id);
      if(sparepart) return sparepart;
      else throw new NotFoundException();
    }
      @Delete('/:id')
      removeServic(@Param('id') id:string){
        return this.sparePartsService.remove(parseInt(id));
      }

     }

