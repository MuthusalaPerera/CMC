import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';
import { Inventory } from 'src/inventory/inventory.entity';
import { SparePart } from '../spare-part.entity';

export class CreateSparePartDto {
  @IsNumber()
  TicketId: number;
  @IsNotEmpty()
  sparePart: SparePart

}   

