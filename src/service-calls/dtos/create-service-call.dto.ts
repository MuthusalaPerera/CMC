import {IsNotEmpty, IsString} from 'class-validator';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export class CreateServiceCallDto {
  @IsString()
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

}
