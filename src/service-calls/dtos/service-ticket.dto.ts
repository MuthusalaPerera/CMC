import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, DeepPartial} from "typeorm";

export class ServiceTicketDto{
    @IsNumber()
    ServiceCallId: number;
    @IsArray()
    serviceTicket: [
        { TicketId: number },
        { TicketType: string },
        { Subject: string },
        { AssignedTo: string },
        { PlannedStartDate: Date },
        { EstimatedDuration: string },
        { ContactPerson: string },
        { PlannedStartDate: Date } ,
        {PlannedEndDate: Date },
        { ActualStartDate: Date },
        { ActualEndDate: Date },
        { CreatedOn: Date },
        {Status:string},

    ];


}
