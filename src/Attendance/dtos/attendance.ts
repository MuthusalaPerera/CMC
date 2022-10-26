import { Expose } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class attendanceDto {
 @Expose()
 id: number;

  @Expose()
  EmpId: string;

  @Expose()
  EmpName: string;

  @Expose()
  Date: Date;

  @Expose()
  Remarks: string;

  @Expose()
  AvailableQuantity:number;

  @Expose()
  Attachment: string;


}