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
import {
  SerilizedItemDropdown,
  SerilizedProblem,
  SerilizedUser,
  SerilizedUserDropdown
} from "../Mobile/dto/serilized.mobile"
import {Solutions} from "../ServiceCallOther/Solutions"
import {SolutionDTO} from "../ServiceCallOther/SolutionDTO"
import {FileInterceptor} from "@nestjs/platform-express"
import {randomBytes} from "crypto";
import {Resolution} from "../ServiceCallOther/Resolution";
import {ResolutionDTO} from "../ServiceCallOther/ResolutionDTO";
import {Remark} from "../ServiceCallOther/Remark";
import {ExpencesDTO} from "../ServiceCallOther/ExpencesDTO";

@Controller('service-calls')
export class ServiceCallsController {
  constructor(@Inject('ServiceCalls_Service') private readonly serviceCallsService:ServiceCallsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('s')
   async listCustomer() {
    //return await this.serviceCallsService.find();
    const customers = await this.serviceCallsService.find();
    if(customers.length!==0){
      return   customers
    }
    else {
      return [{message:null}]
    }
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('list')
  async listCustomerAll() {
    const user = await this.serviceCallsService.findEquipmentCard();
    const catResponses = user.map(user => classToPlain(new SerilizedUserDropdown(user)))
    console.log(catResponses)
    //return catResponses
    if(catResponses.length!==0){
      return   catResponses
    }
    else {
      return [{message:null}]
    }
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/itemlist/:id')
  async listItemAll(@Param('id')id: string) {
    const item = await this.serviceCallsService.findEquipmentCardItem(id);
    const catResponses = item.map(item => classToPlain(new SerilizedItemDropdown(item)))
    console.log(catResponses)
    //return catResponses
    if(catResponses.length!==0){
      return   catResponses
    }
    else {
      return [{message:null}]
    }
  }
  @Get('drop')
  async getDropDown() {
    const drop =  await this.serviceCallsService.findDropdown();
    if(drop.length!==0){
      return   drop
    }
    else {
      return [{message:null}]
    }
  }
  @Get('origindrop')
   async getOriginDropDown() {
    const originType = await this.serviceCallsService.findOriginDropDown();
    if(originType.length!==0){
      return   originType
    }
    else {
      return [{message:null}]
    }
  }
  @Get('problemTypedrop')
   async getproblemTypeDown() {
    const problemType = await this.serviceCallsService.findproblemTypeDropDown();
    if(problemType.length!==0){
      return   problemType
    }
    else {
      return [{message:null}]
    }
  }
  // @Get('/:id')
  // async listCustomerId(@Param('id') id: string) {
  //   return await this.serviceCallsService.findById(parseInt(id));
  // }
  @Get('service')
  async listServiceCall() {
    const allServiceCalls = await this.serviceCallsService.findS();
    if(allServiceCalls.length!==0){
      return   allServiceCalls
    }
    else {
      return [{message:null}]
    }
  }
  @Get('service/:id')
  async listServiceCallsById(@Param('id')id: string) {
    const serviceCallsById = await this.serviceCallsService.findServiceByIdNew(parseInt(id));
    if(serviceCallsById.length!==0){
      return   serviceCallsById
    }
    else {
      return [{message:null}]
    }
  }
  @Get('service-documents')
  async listServiceCallsDocuments() {
    const serviceDocuments = await this.serviceCallsService.listServiceCallsDocuments();
    if(serviceDocuments.length!==0){
      return   serviceDocuments
    }
    else {
      return [{message:null}]
    }
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
  @Post("/resolutions")
  async createResolution(@Body() body:ResolutionDTO) {
    return  await this.serviceCallsService.createResolution(body)
  }
  @Put("/remark")
  async createRemark(@Body() body:Remark) {
    console.log(body)
    return  await this.serviceCallsService.createRemark(body)
  }
  @Get('/getResolutionsId/:id')
  async getRemarkId(@Param('id')id: string) {
    const remark= await this.serviceCallsService.getResolutionId(parseInt(id));
    if(remark.length!==0){
      return   remark
    }
    else {
      return [{message:null}]
    }
  }
  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
   handleUpload(@UploadedFile() file:Express.Multer.File) {
    console.log('file',file)
    return  'file upload';
  }
  @Post('/solutions')
  async AddSolutions(@Body() body) {
    console.log(body)
    return  await this.serviceCallsService.createNewSolutions(body)
  }
  @Put('/updatesolutions')
  async UpdateSolutions(@Body() body) {
    console.log(body)
    return  await this.serviceCallsService.updateNewSolutions(body)
  }
  @Post('/expences')
  async AddExpences(@Body()  body:ExpencesDTO) {
    console.log(body)
    return  await this.serviceCallsService.createNewExpences(body)
  }
  @Get('/getExpences/:id')
  async getExpences(@Param('id')id: string) {
    const expences= await this.serviceCallsService.getExpences(parseInt(id));
    if(expences.length!==0){
      return   expences
    }
    else {
      return [{message:null}]
    }
  }
  @Get('/getSolutions')
  async getSolutions() {
    const getAllSolutions = await this.serviceCallsService.getSolutions();
    if(getAllSolutions.length!==0){
      return   getAllSolutions
    }
    else {
      return [{message:null}]
    }
  }
  @Get('/getFiles/:id')
  async getFiles(@Param('id')id: string) {
    const file= await this.serviceCallsService.getFiles(parseInt(id));
    if(file.length!==0){
      return   file
    }
    else {
      return [{message:null}]
    }
  }
  @Get('/getSolutionsId/:id')
  async getSolutionsId(@Param('id')id: string) {
    const solutions= await this.serviceCallsService.getSolutionsId(parseInt(id));
    if(solutions.length!==0){
      return   solutions
    }
    else {
      return [{message:null}]
    }
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/ticketInServiceCall/:id')
  async ticketServiceCall(@Param('id')id: string){
   const serviceCall= await this.serviceCallsService.findTicketById(parseInt(id))
    // console.log(serviceCall)
    if(serviceCall.length!==0){
     return   serviceCall.map(service => this.serviceCallsService.reFormatServiceCall(service))
    }
    else {
      return [{message:null}]
    }
    // return serviceCall
  }
  @Put('/Schedule/:id')
  async scheduleServiceCall(@Param('id') id: string, @Body() body) {
    const service= await this.serviceCallsService.updateNextSchedule(parseInt(id), body);
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
    const customer = await this.serviceCallsService.getCustomerByEquipmentCardName(name);
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
    const customer = await this.serviceCallsService.findByEquipmentCardItem(name);
    if(customer) return customer;
    else return  {error:"NotFound"};
  }
  @Delete('/:id')
  removeService(@Param('id') id: string) {
    return this.serviceCallsService.remove(parseInt(id));
  }
}
