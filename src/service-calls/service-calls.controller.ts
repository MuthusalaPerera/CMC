import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  Inject,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
  NotFoundException,
  Patch,
  Put,
  Delete,
  Query,
  DefaultValuePipe
} from '@nestjs/common';
import { CreateServiceCallDto } from './dtos/create-service-call.dto';
import {ServiceCallsService} from "./service-calls.service";


import {CustomerDto} from "./dtos/customer.dto";
import {SerializedCustomer} from "./dtos/serilized.service";
import {CustomerEntity} from "./customer.entity";
import {Pagination} from "nestjs-typeorm-paginate";
import {ServiceCall} from "./service-call.entity";
;


@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @Get()
   async listCustomer() {
    return await this.serviceCallsService.find();
  }
  // @Get('/:id')
  // async listCustomerId(@Param('id') id: string) {
  //   return await this.serviceCallsService.findById(parseInt(id));
  // }
  @Get("service")
  async listServiceCallsS() {
    return await this.serviceCallsService.findS();
  }
  @Get('a/')
  async index(
      @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
      @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number = 5,
  ): Promise<Pagination<ServiceCall>> {
    limit = limit > 100 ? 100 : limit;
    return this.serviceCallsService.findP({
      page,
      limit,
    });
  }
  @Post()
  async createServiceCall(@Body() body: CustomerDto) {
    return  await this.serviceCallsService.createUser(body)
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: CustomerDto) {
    return this.serviceCallsService.update(parseInt(id), body);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async getServiceCall(@Param('id',ParseIntPipe) id:number){
     const customer = await this.serviceCallsService.getCustomerById(id);
    if(customer) return customer;
    else throw new NotFoundException();
  }
  @Delete('/:id')
  removeService(@Param('id') id: string) {
    return this.serviceCallsService.remove(parseInt(id));
  }
}
