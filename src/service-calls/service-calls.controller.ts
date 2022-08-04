import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  Inject,
  UseInterceptors, ClassSerializerInterceptor, ParseIntPipe, NotFoundException
} from '@nestjs/common';
import { CreateServiceCallDto } from './dtos/create-service-call.dto';
import {ServiceCallsService} from "./service-calls.service";
import {SerializedService} from "./dtos/serilized.service";


@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @Get()
   async listServiceCalls() {
    return await this.serviceCallsService.find();
  }
  @Post()
  @UsePipes(ValidationPipe)
  async createServiceCall(@Body() body: CreateServiceCallDto) {
    return  await this.serviceCallsService.createUser(body)
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('service/:id')
  async getServiceCall(@Param('id',ParseIntPipe) id:number){
     const service = await this.serviceCallsService.getServiceById(id);
    if(service) return new SerializedService(service);
    else throw new NotFoundException();

  }
}
