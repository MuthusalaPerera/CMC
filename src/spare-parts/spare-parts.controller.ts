import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { CustomerDto } from 'src/service-calls/dtos/customer.dto';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { CreateSparePartDto } from 'src/spare-parts/dtos/create-spare-part.dto';
import { SparePartsService } from './spare-parts.service';

@Controller('spare-parts')
export class SparePartsController {
  constructor(@Inject('SpareParts_Service') private readonly sparePartsService:SparePartsService){}

    @Get()
    async listSpareParts() {
      return await this.sparePartsService.find();
      }
    @Post()
    async createSparePart(@Body() body: ServiceTicketDto) {
      console.log(body)
      return await this.sparePartsService.createSparepart(body)
    }
    @Put('1/:id')
    updateSparePart(@Param('id') id: string, @Body() body:ServiceTicketDto){
      return this.sparePartsService.update(parseInt(id),body);
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

