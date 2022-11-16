import { IsDate, IsOptional, IsString} from 'class-validator';

export class UpdateSparePartDto {
 
  @IsOptional()
  SPReqId: number;


  @IsOptional()
  Remark:string;

  @IsOptional()
  Content:string


  @IsOptional()
  Secretary:string;
  
   @IsOptional()
   ItemDescription:string;

}


