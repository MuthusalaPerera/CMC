import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateresourceAllocationtDto {
  @IsNumber()
  @IsOptional()
  TicketId: number;
  @IsArray()
  @IsOptional()
  resourceAllocation: [
    { ToolGroup: string },
    { ToolReqID: string },
    { ToolDescription: string },
    { SerialNo: string },
    { ToolRequestStatus: string },
    { ToolType: string },
    { CreatedDateAndTime: string },
    { RequestDateAndTime: string },
    { NoOfDays: string },
    { HandOverDateAndTime: string },
   ]

}

// @Column()
//   ToolGroup:string;
  
//   @Column()
//   ToolReqID:string

//   @Column()
//   ToolDescription:string;

//   @Column()
//   SerialNo:string;

//   @Column()
//   ToolRequestStatus:string;

//   @Column()
//   ToolType:string;

//   @Column()
//   CreatedDateAndTime:string;

//   @Column()
//   RequestDateAndTime:string;

//   @Column()
//   NoOfDays:string;

  
//   @Column()
//   HandOverDateAndTimw:string;


// }