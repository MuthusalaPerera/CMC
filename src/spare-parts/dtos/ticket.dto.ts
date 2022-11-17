import {IsJSON, IsNotEmpty, IsOptional} from "class-validator";

export  class TicketDto {
    @IsOptional()
    TicketId:number;
    @IsOptional()
    TicketType:string;
    @IsOptional()
    Subject:string;
    @IsOptional()
    AssignedTo:string;
    @IsOptional()
    AssignedBY:string;
    @IsOptional()
    EstimatedDuration:string;
    @IsOptional()
    ContactPerson:string;
    @IsOptional()
    PlannedStartDate:Date;
    @IsOptional()
    PlannedEndDate:Date;
    @IsOptional()
    ActualStartDate:Date;
    @IsOptional()
    ActualEndDate:Date;
    @IsOptional()
    CreatedOn:Date;
}
