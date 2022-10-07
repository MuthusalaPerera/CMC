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
} from "@nestjs/common"
import {MobileService} from "./mobile.service"
import {SerilizedItem, SerilizedService, SerilizedUser} from "./dto/serilized.mobile"
import {classToPlain} from "class-transformer"


@Controller('mobile')
export class MobileController {

    constructor(@Inject('Mobile_Service') private readonly mobileService:MobileService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('users/:id')
    async getCustomer(@Param('id',ParseIntPipe) id:number){
        const customer = await this.mobileService.getCustomer(id);
        if(customer) return new SerilizedUser(customer);
        else throw new NotFoundException();

    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/customers')
    public async getUsers() {
        const user = await this.mobileService.getAllCustomer();
        const catResponses = user.map(user => classToPlain(new SerilizedUser(user)))
        console.log(catResponses)
        return catResponses
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/itemMaster')
    public async getItems() {
        const items = await this.mobileService.getAllItems();
        const catResponses = items.map(item => classToPlain(new SerilizedItem(item)))
        console.log(catResponses)
        return catResponses
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/service')
    public async getService() {
        const service = await this.mobileService.getAllService();
        const catResponses = service.map(service => classToPlain(new SerilizedService(service)))
        console.log(catResponses)
        return catResponses
    }

    
}
