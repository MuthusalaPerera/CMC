import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateresourceAllocationDto {
  @IsNumber()
  TicketId: number;
  @IsArray()
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
