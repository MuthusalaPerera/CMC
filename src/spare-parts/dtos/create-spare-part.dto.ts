import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateSparePartDto {
  @IsNumber()
  TicketId: number;
  @IsArray()
  sparePart: [
    { SPReqId: number },
    { Remark: string },
    { Secretary: string },
    { ItemDescription: string },
   ]

}

