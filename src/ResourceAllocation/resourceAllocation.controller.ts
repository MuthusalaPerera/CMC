import { Body, Controller, Get, Post, Param, ClassSerializerInterceptor, Delete, Inject, NotFoundException, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CreateresourceAllocationDto } from 'src/ResourceAllocation/dtos/create-resourceAllocation.dto';
import { resourceAllocationService } from 'src/ResourceAllocation/resourceAllocation.service';
import { ServiceTicketDto } from 'src/service-calls/dtos/service-ticket.dto';
import { CreateVehicleAllocationDto } from './dtos/create-vehicleAllocation.dto';
import { resourceAllocationDto } from './dtos/resourceAllocation';


@Controller('resourceAllocation')
export class resourceAllocationController {
  constructor(@Inject('resourceAllocation_Service') private readonly resourceAllocationService:resourceAllocationService){}

    // @Get()
    // async listresourceAllocation() {
    //   return await this.resourceAllocationService.find();
    //   }

  @Get('/get')
  async listTickets() {
    return await this.resourceAllocationService.find();
  }
    // @Post()
    // async createResourceAllocation(@Body() body: CreateresourceAllocationDto) {
    // console.log(resourceAllocationDto)
    //   return await this.resourceAllocationService.createServiceticket(body)
    // }
  @Post('/create')
  async createresourceAllocation(@Body() body: CreateresourceAllocationDto) {
   // console.log(body)
    return await this.resourceAllocationService.createresourceAllocation(body)
  }

  //vehicle reervation
  @Post('/createVehicle')
  async createVehicleAllocation(@Body() body: CreateVehicleAllocationDto) {
   //  console.log(body)
    return await this.resourceAllocationService.createVehicleAllocation(body)
  }
  

    // @Put('1/:id')
    // updateSparePart(@Param('id') id: string, @Body() body:ServiceTicketDto){
    //   return this.sparePartsService.update(parseInt(id),body);
    // }
    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get('/:id')
    // async getresourceAllocation(@Param('id', ParseIntPipe) id: number) {
    //   const resourceAllocation = await this.resourceAllocationService.getresourceAllocationById(id);
    //   if(resourceAllocation) return resourceAllocation;
    //   else throw new NotFoundException();
    // }
      // @Delete('/:id')
      // removeServic(@Param('id') id:string){
      //   return this.resourceAllocationService.remove(parseInt(id));
      // }

     }

