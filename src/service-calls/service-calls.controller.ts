import {Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, Inject, Query} from '@nestjs/common';
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

  @Get('/:id')
  getServiceCall(@Param('id') id: string) {
    console.log(id);
  }
}
