import { Expose } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class inventoryDto {
 @Expose()
 id: number;

  @Expose()
  SPID: string;

  @Expose()
  ItemDescription: string;

  @Expose()
  ItemType: string;

  @Expose()
  Remarks: string;

  @Expose()
  AvailableQuantity:number;

  @Expose()
  Attachment: string;


}