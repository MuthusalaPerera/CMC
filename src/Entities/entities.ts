import {User} from "../users/user.entity";
import {ServiceCall} from "../service-calls/service-call.entity";
import {SparePart} from "../spare-parts/spare-part.entity";
import {CustomerEntity} from "../Customer/customer.entity";
import {ItemEntity} from "../Item/Item.entity";
import { ServiceTicketEntity } from "src/service-calls/service-ticket.entity";
import {UsersDropDown} from "../IntialDB/Users"
import userRolls from "../IntialDB/UserRolls"
import Login from "../IntialDB/Login"
import {CustomerItemMap} from "../Customer/dtos/CustomerItemMap"
import {ItemMasterEntity} from "../Item/ItemMaster"
import {AssetMaster} from "../Item/AssetMaster"
import {EquipmetCard} from "../Customer/EquipmetCard"
import { OriginsDropDown } from "../IntialDB/Origin";
import { ProblemTypesDropDown } from "src/IntialDB/ProblemType";
import UserType from "../IntialDB/UserRolls";

import { Solutions } from "src/ServiceCallOther/Solutions";
import { HandledBy } from "src/IntialDB/handledBy";
import { ClusterHead } from "src/IntialDB/ClusterHead";
import { SecretaryDB } from "src/IntialDB/Secretary";
import { SalesAssistantDB } from "src/IntialDB/SalesAssistant";
import { EngineersDB } from "src/IntialDB/Engineers";


//const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,ItemMasterEntity,AssetMaster,EquipmetCard,OriginsDropDown,ProblemTypesDropDown,UserType,Solutions];


import {Expences} from "../ServiceCallOther/expences"
import {AssertsReservation} from "../AssertsReservation/AssertsReservation";
import {VehicleReservation} from "../Vehicle/VehicleReservation";
import {Vehicle} from "../Vehicle/Vehicle";
import {File} from "../ServiceCallOther/File";

// const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,ItemMasterEntity,AssetMaster,EquipmetCard,OriginsDropDown,ProblemTypesDropDown,UserType,Solutions];

import { ResourceAllocationEntity } from "src/ResourceAllocation/resourceAllocation.entity";

import {Resolution} from "../ServiceCallOther/Resolution";
import { Inventory } from "src/inventory/inventory.entity";




//const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,OriginsDropDown,ProblemTypesDropDown,UserType];

//ItemMasterEntity,AssetMaster,EquipmetCard,Solutions,Expences,AssertsReservation,VehicleReservation,Vehicle





const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,ItemMasterEntity,AssetMaster,EquipmetCard,OriginsDropDown,ProblemTypesDropDown,UserType,Solutions,Expences,AssertsReservation,VehicleReservation,Vehicle,ResourceAllocationEntity,Resolution,File,HandledBy, ClusterHead, SecretaryDB, SalesAssistantDB, EngineersDB,Inventory];




// import {Expences} from "../ServiceCallOther/expences"
// import {AssertsReservation} from "../AssertsReservation/AssertsReservation";
// import {VehicleReservation} from "../Vehicle/VehicleReservation";
// import {Vehicle} from "../Vehicle/Vehicle";






//const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,ItemMasterEntity,AssetMaster,EquipmetCard,OriginsDropDown,ProblemTypesDropDown,UserType,Solutions,Expences,AssertsReservation,VehicleReservation,Vehicle];




//
// const entities =[User,ServiceCall,SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity ,UsersDropDown,userRolls,Login,ItemMasterEntity,AssetMaster,EquipmetCard,OriginsDropDown,ProblemTypesDropDown,AssertsReservation];
// >>>>>>> Stashed changes



// const entities =[User,
//                 ServiceCall,
//                 SparePart,
//                 CustomerEntity,
//                 ItemEntity,
//                 ServiceTicketEntity ,
//                 UsersDropDown,
//                 userRolls,
//                 Login,
//                 ItemMasterEntity,
//                 AssetMaster,
//                 EquipmetCard,
//                 OriginsDropDown,
//                 ProblemTypesDropDown,
//                 UserType,
//                 Solutions,
//                 Expences,
//                 AssertsReservation,
//                 VehicleReservation,
//                 Vehicle,
//                 ResourceAllocationEntity,
//                 HandledBy,
//                 ClusterHead,
//                 SecretaryDB,
//                 SalesAssistantDB,
//                 EngineersDB];




export default entities
