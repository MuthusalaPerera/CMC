import {IsNotEmpty, IsString} from 'class-validator';
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export class CreateServiceCallDto {
  @IsString()
  id: number;

  @IsNotEmpty()
  serialNumber: string;

  @IsNotEmpty()
  itemCode: string;

}
