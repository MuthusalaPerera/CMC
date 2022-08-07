import {IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateServiceCallDto {
  @IsNumber()
  ItemCode: number;
  @IsNotEmpty()
  ItemDescription: string;
  @IsNotEmpty()
  Customer: string;
  @IsNotEmpty()
  Status: string;
  @IsNotEmpty()
  CreatedDate: Date;
  @IsNotEmpty()
  Priority: string;
  @IsNotEmpty()
  Subject: string;
  @IsNotEmpty()
  customerDtos:[]

}
