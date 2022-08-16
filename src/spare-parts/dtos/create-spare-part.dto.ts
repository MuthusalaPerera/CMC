import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateSparePartDto {
  @IsString()
  SPReqId: string;

  @IsNotEmpty()
  TicketId: string;

  @IsNotEmpty()
  ServiceCallId: string;

  @IsNotEmpty()
  ServiceEngineer: string;

  @IsNotEmpty()
  Secretary: Date; 

  @IsNotEmpty()
  ItemDescription: string;  

  @IsNotEmpty()
  ServiceTicketDtos:[]

}

