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
    DefaultValuePipe, Session
} from "@nestjs/common"
import {MobileService} from "./mobile.service"
import {SerilizedItem, SerilizedService, SerilizedUser} from "./dto/serilized.mobile"
import {classToPlain} from "class-transformer"
import {randomBytes, scrypt as _script} from "crypto"
import {promisify} from "util"
import {LoginDto} from "../users/dtos/login.dto"
import {LoginDtoMobile} from "./dto/loginDtoMobile"

const scrypt = promisify(_script)
@Controller('mobile')
export class MobileController {

    constructor(@Inject('Mobile_Service') private readonly mobileService:MobileService) {}
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('customers/:id')
    async getCustomer(@Param('id',ParseIntPipe) id:number){
        const customer = await this.mobileService.getCustomer(id);
        if(customer){
            // const refomat={
            //     // Token:randomBytes(32).toString("hex"),
            //     // Status:"",
            //     // TokenAccess:"",
            //     // ResponseDescription:"Data Successfull",
            //     // ErrorDescription:"Data Fail",
            //     Data:[
            //        this.mobileService.reFormatCustomer(customer)
            //     ]
            // }
            return  this.mobileService.reFormatCustomer(customer)
        } 
        else throw new NotFoundException();

    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/customers')
    public async getUsers() {
        const user = await this.mobileService.getAllCustomer();
       // const catResponses = user.map(user => classToPlain(new SerilizedUser(user)))
       // const catResponses =  user.map(user => this.mobileService.reFormatCustomer(user))
       // console.log(catResponses)
    //    return catResponses
        const refomat={
            Data:[
                user.map(user => this.mobileService.reFormatCustomer(user))
            ]
        }
        return  user.map(user => this.mobileService.reFormatCustomer(user))
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/itemMaster')
    public async getItems() {
        const items = await this.mobileService.getAllItems();
      //  const catResponses = items.map(item => classToPlain(new SerilizedItem(item)))
     //   const catResponses =  items.map(item => this.mobileService.reFormatItem(item))
     //    const refomat={
     //        Data:[
     //            items.map(item => this.mobileService.reFormatItem(item))
     //        ]
     //    }
        return items.map(item => this.mobileService.reFormatItem(item))
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/service')
    public async getService() {
        const service = await this.mobileService.getAllService();
      //  const catResponses = service.map(service => classToPlain(new SerilizedService(service)))
       // console.log(catResponses)
       //  const refomat={
       //      Data:[
       //          service.map(service => this.mobileService.reFormatServiceCall(service))
       //      ]
       //  }
        return service.map(service => this.mobileService.reFormatServiceCall(service))
    }

    @Get('/signin?')
    async signin(@Query('uname') uname: string,@Query('password') password: string,@Query('deviceId') deviceId: string) {
        const login= await this.mobileService.signin(uname,password,deviceId)
            console.log(uname)
        if(login){
            const refomat={
                Token:randomBytes(32).toString("hex"),
                Status:"",
                TokenAccess:"",
                ResponseDescription:"Data Successfull",
                ErrorDescription:"Data Fail",
                Data:[
                   this.mobileService.reFormaLogin(login)
                ]
            }
            return  refomat
        }
       else throw new NotFoundException();
       return login;
    }

    
}
