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
  DefaultValuePipe, UploadedFile
} from "@nestjs/common"
import { CreateServiceCallDto } from './dtos/create-service-call.dto';
import {ServiceCallsService} from "./service-calls.service";


import {CustomerDto} from "../Customer/dtos/customer.dto";
import {SerializedCustomer} from "./dtos/serilized.service";
import {CustomerEntity} from "../Customer/customer.entity";
import {Pagination} from "nestjs-typeorm-paginate";
import {ServiceCall} from "./service-call.entity";
import {classToPlain} from "class-transformer"
import {SerilizedItemDropdown, SerilizedUser, SerilizedUserDropdown} from "../Mobile/dto/serilized.mobile"
import {Solutions} from "../ServiceCallOther/Solutions"
import {SolutionDTO} from "../ServiceCallOther/SolutionDTO"
import {FileInterceptor} from "@nestjs/platform-express"

@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @Get()
   async listCustomer() {
    return await this.serviceCallsService.find();
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('list')
  async listCustomerAll() {
    const user = await this.serviceCallsService.findCustomer();
    const catResponses = user.map(user => classToPlain(new SerilizedUserDropdown(user)))
    console.log(catResponses)
    return catResponses
    
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('itemlist')
  async listItemAll() {
    const item = await this.serviceCallsService.findItem();
    const catResponses = item.map(item => classToPlain(new SerilizedItemDropdown(item)))
    console.log(catResponses)
    return catResponses
  }
  @Get('drop')
  async getDropDown() {
    return await this.serviceCallsService.findDropdown();
  }
  @Get('origindrop')
   async getOriginDropDown() {
    return await this.serviceCallsService.findOriginDropDown();
  }
  @Get('problemTypedrop')
   async getproblemTypeDown() {
    return await this.serviceCallsService.findproblemTypeDropDown();
  }
  // @Get('/:id')
  // async listCustomerId(@Param('id') id: string) {
  //   return await this.serviceCallsService.findById(parseInt(id));
  // }
  @Get('service')
  async listServiceCallsS() {
    return await this.serviceCallsService.findS();
  }
  @Get('service-documents')
  async listServiceCallsDocuments() {
    return await this.serviceCallsService.listServiceCallsDocuments();
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
  console.log(body)
    return  await this.serviceCallsService.createUser(body)
  }
  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
   handleUpload(@UploadedFile() file:Express.Multer.File) {
    console.log('file',file)
    return  'file upload';
  }
  @Post('/solutions')
  async AddSolutions(@Body() body:SolutionDTO) {
    console.log(body)
    return  await this.serviceCallsService.createNewSolutions(body)
  }
  @Post('/expences')
  async AddExpences(@Body() body) {
    console.log(body)
    return  await this.serviceCallsService.createNewExpences(body)
  }
  @Get('/getExpences')
  async getExpences() {
    return await this.serviceCallsService.getExpences();
  }
  @Get('/getSolutions')
  async getSolutions() {
    return await this.serviceCallsService.getSolutions();
  }
  @Put('/Schedule/:id')
  scheduleServiceCall(@Param('id') id: string, @Body() body) {
    return this.serviceCallsService.updateNextSchedule(parseInt(id), body);
  }
  @Put('a/:id')
  updateUser(@Param('id') id: string, @Body() body) {
    return this.serviceCallsService.update(parseInt(id), body);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  async getServiceCall(@Param('id',ParseIntPipe) id:number){
     const customer = await this.serviceCallsService.getCustomerById(id);
    if(customer) return customer
    else return {error:"NotFound"};
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/name/:name')
  async getCustomerName(@Param('name') name:string){
    const customer = await this.serviceCallsService.getCustomerByName(name);
    if(customer) return customer
    else return {error:"NotFound"};
  }
  @Get('item/:id')
  async getItem(@Param('id') id:string){
    const customer = await this.serviceCallsService.findByItemCode(id);
    if(customer) return customer;
    else return  {error:"NotFound"};
  }
  @Get('itemName/:name')
  async getName(@Param('name') name:string){
    const customer = await this.serviceCallsService.findByItemName(name);
    if(customer) return customer;
    else return  {error:"NotFound"};
  }
  @Delete('/:id')
  removeService(@Param('id') id: string) {
    return this.serviceCallsService.remove(parseInt(id));
  }
}
