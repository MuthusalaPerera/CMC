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
    { CreatedDateAndTime: Date },
    { RequestDateAndTime: Date },
    { NoOfDays: string },
    { HandOverDateAndTime: Date },
   ]

}
