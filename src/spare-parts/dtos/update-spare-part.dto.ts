import { IsDate, IsOptional, IsString} from 'class-validator';

export class UpdateSparePartDto {
  @IsString()
  @IsOptional()
  ItemCode: string;

  @IsString()
  @IsOptional()
  ItemDescrption: string;

  @IsString()
  @IsOptional()
  Customer: string;

  @IsString()
  @IsOptional()
  Status: string;

  @IsDate()
  @IsOptional()
  CreatedDate: Date; 

  @IsString()
  @IsOptional()
  Priority: string;

   @IsString()
   @IsOptional()
  Subject: string;

}

