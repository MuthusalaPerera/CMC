import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateServiceCallDto } from './dtos/create-service-call.dto';

@Controller('service-calls')
export class ServiceCallsController {
  @Get()
  listServiceCalls() {}

  @Post()
  createServiceCall(@Body() body: CreateServiceCallDto) {
    console.log(body);
  }

  @Get('/:id')
  getServiceCall(@Param('id') id: string) {
    console.log(id);
  }
}
