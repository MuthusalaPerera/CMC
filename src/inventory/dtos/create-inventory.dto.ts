import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SparePart } from 'src/spare-parts/spare-part.entity';

export class CreateinventoryDto {
  @IsString()
  SPID: string;

  @IsString()
  ItemDescription: string;

  @IsString()
  ItemType: string;

  @IsString()
  Remarks: string;

  @IsNotEmpty()
  AvailableQuantity:number;

  @IsNotEmpty()
  RequestQuantity: number;

  @IsNotEmpty()
  spareparts:SparePart;

}