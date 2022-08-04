import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  Inject,
  Query,
  UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, NotFoundException
} from '@nestjs/common';
import { CreateServiceCallDto } from './dtos/create-service-call.dto';
import {ServiceCallsService} from "./service-calls.service";

@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @Get()
  listServiceCalls() {
    return this.serviceCallsService.find();
  }
  @Post()
  @UsePipes(ValidationPipe)
  createServiceCall(@Body() body: CreateServiceCallDto) {
    return this.serviceCallsService.createUser(body)
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('service/:id')
  getServiceCall(@Param('id',ParseIntPipe) id:number){
    const service =this.serviceCallsService.getServiceById(id);
    if(service) return service;
    else throw new NotFoundException();

  }
}
