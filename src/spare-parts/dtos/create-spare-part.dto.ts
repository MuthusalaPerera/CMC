import { IsDate, IsInt, IsOptional, IsString} from 'class-validator';

export class CreateSparePartDto {
  @IsString()
  ItemCode: string;

  @IsString()
  ItemDescrption: string;

  @IsString()
  Customer: string;

  @IsString()
  Status: string;

  @IsDate()
  CreatedDate: Date; 

  @IsString()
  Priority: string;  

  @IsString()
  Subject: string;

}

