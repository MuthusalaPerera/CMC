import {BadRequestException, Injectable, NotFoundException} from "@nestjs/common"
import {InjectRepository} from "@nestjs/typeorm"
import {ServiceCall} from "../service-calls/service-call.entity"
import {Column, JoinColumn, OneToOne, Repository} from "typeorm"
import {CustomerEntity} from "../Customer/customer.entity"
import {ItemEntity} from "../Item/Item.entity"
import {SerilizedUser} from "./dto/serilized.mobile"
import {Exclude, Expose} from "class-transformer"
import {randomBytes, scrypt as _script} from "crypto"
import {promisify} from "util"
import {LoginDto} from "../users/dtos/login.dto"
import Login from "../IntialDB/Login"
import {User} from "../users/user.entity"
//import {LoginDtoMobile} from "./dto/loginDtoMobile"
import {ProblemTypesDropDown} from "../IntialDB/ProblemType"

const scrypt = promisify(_script)
@Injectable()
export class MobileService {

    constructor(
        @InjectRepository(ServiceCall) private readonly serviceRepository: Repository<ServiceCall>,
        @InjectRepository(CustomerEntity) private readonly customerDtoRepository: Repository<CustomerEntity>,
        @InjectRepository(ItemEntity) private readonly itemEntityRepository: Repository<ItemEntity>,
        @InjectRepository(Login) private readonly loginRepository: Repository<Login>,
        @InjectRepository(ProblemTypesDropDown) private readonly problemTypesDropDownRepository: Repository<ProblemTypesDropDown>
    ) {
    }

    getCustomer(Id: number) {
        return this.customerDtoRepository.findOne(Id);
    }

    getAllCustomer() {
        return this.customerDtoRepository.find();
    }

    getAllItems() {
        return this.itemEntityRepository.find();
    }

    getAllService() {
        return this.serviceRepository.find();
    }


    getAllProblem(){
        return this.problemTypesDropDownRepository.find()
    }

    reFormatServiceCall(serviceCall: ServiceCall) {
        const salt = randomBytes(32).toString("hex")
        const refomat = {

            Status: serviceCall.Status,
            typeid: serviceCall.ServiceCallId,
            typeName: serviceCall.ProblemType
        }
        return refomat;
    }

    reFormatItem(itemEntity: ItemEntity) {
        const salt = randomBytes(32).toString("hex")
        const refomat = {

            ItemCode: itemEntity.ItemCode,
            MrfSerialNumber: itemEntity.MrfSerialNumber,
            ItemDescription: itemEntity.ItemGroup,
            ItemGroup: itemEntity.ItemGroup,
            status: ""
        }
        return refomat;
    }
    
    async signin(uname , pass, deviceId) {
        const user = await this.loginRepository.findOne({UserName: uname})
        console.log(user)
        if (!user) {
            throw new NotFoundException("user not found")
        }
        else {
            if(user.Status!==1){
                throw new NotFoundException("status expired")
            }
            else {
                const [salt, storedHash] = user.Password.split(".")
                const hash = (await scrypt(pass, salt, 32)) as Buffer
                if (hash.toString("hex") !== storedHash) {
                    // throw new BadRequestException("Bad password")
                   
                    return null
                } else {
                    return user
                }
            }
        }
    }
    
    reFormatCustomer(customerEntity: CustomerEntity) {
        const salt = randomBytes(32).toString("hex")
        const refomat = {
            CusID: customerEntity.CustomerId,
            CusCode: customerEntity.CustomeName,
            CusName: customerEntity.CustomeName,
            Address: customerEntity.CustomeName,
            status: "1"
        }
        return refomat;
    }
    
    reFormaLogin(login: Login) {
        const refomat = {
            Id: login.Id,
            UserName:login.UserName,
            Password:login.Password,
            Status:login.Status,
            DeviceId:login.DeviceId
        }
        return refomat;
    }
    
    
}
