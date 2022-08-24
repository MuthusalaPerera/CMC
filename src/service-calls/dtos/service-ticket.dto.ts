import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { SparePart } from "src/spare-parts/spare-part.entity";
import { DeepPartial } from "typeorm";

export class ServiceTicketDto{
    
    TicketId: number;

    @IsNotEmpty()
    TicketType: string;

    @IsNotEmpty()
    Subject: string;

    @IsNotEmpty()
    AssignedTo: string;

    @IsNotEmpty()
    PlannedStartDate: Date;
  // static sparePart: DeepPartial<SparePart>[];
    @IsArray()
    sparePart:[
  { SPReqId: string},
  {TicketId:string},
  {ServiceCallId:string},
  {ServiceEngineer:string},
  {Secretary:Date},
  {ItemDescription:string},

  {
    itemEntity:{
      name: string;
      MrfSerialNumber:string
      SerialNumber:string
      ItemDescription:string
      ItemGroup:string
    }
  }

];
  
}