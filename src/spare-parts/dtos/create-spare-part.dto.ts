import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateSparePartDto {
  @IsNumber()
  TicketId: number;
  @IsArray()
  sparePart: [
    { SPReqId: string },
    { Remark: string },
    { Secretary: Date },
    { ItemDescription: string },
    {
      itemEntity: {
        name: string;
        MrfSerialNumber: string
        SerialNumber: string
        ItemDescription: string
        ItemGroup: string
      }
    }]

}

