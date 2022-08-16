import {User} from "../users/user.entity";
import {ServiceCall} from "../service-calls/service-call.entity";
import {SparePart} from "../spare-parts/spare-part.entity";
import {CustomerEntity} from "../service-calls/customer.entity";
import {ItemEntity} from "../service-calls/Item.entity";
import { ServiceTicketEntity } from "src/service-calls/service-ticket.entity";


const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ];

export default entities