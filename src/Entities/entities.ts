import {User} from "../users/user.entity";
import {ServiceCall} from "../service-calls/service-call.entity";
import {SparePart} from "../spare-parts/spare-part.entity";
import {CustomerEntity} from "../Customer/customer.entity";
import {ItemEntity} from "../Item/Item.entity";
import { ServiceTicketEntity } from "src/service-calls/service-ticket.entity";
import {UsersDropDown} from "../IntialDB/Users"
import userRolls from "../IntialDB/UserRolls"
import Login from "../IntialDB/Login"
import { OriginsDropDown } from "../IntialDB/Origin";
import { ProblemTypesDropDown } from "src/IntialDB/ProblemType";


const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,OriginsDropDown,ProblemTypesDropDown,Login];



export default entities
