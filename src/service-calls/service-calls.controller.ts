import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  Inject,
  UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, NotFoundException, Patch, Put
} from '@nestjs/common';
import { CreateServiceCallDto } from './dtos/create-service-call.dto';
import {ServiceCallsService} from "./service-calls.service";


import {CustomerDto} from "./dtos/customer.dto";
import {SerializedCustomer} from "./dtos/serilized.service";
;


@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @Get()
   async listServiceCalls() {
    return await this.serviceCallsService.find();
  }
  @Post()
  async createServiceCall(@Body() body: CustomerDto) {
    return  await this.serviceCallsService.createUser(body)
  }
  // @Put('1/:id')
  // updateUser(@Param('id') id: string, @Body() body: CustomerDto) {
  //   return this.serviceCallsService.update(parseInt(id), body);
  // }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async getServiceCall(@Param('id',ParseIntPipe) id:number){
     const customer = await this.serviceCallsService.getCustomerById(id);
    if(customer) return customer;
    else throw new NotFoundException();
  }
}
