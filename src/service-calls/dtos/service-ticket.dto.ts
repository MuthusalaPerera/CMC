import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { SparePart } from "src/spare-parts/spare-part.entity";
import { DeepPartial } from "typeorm";

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
        {
            sparePart: [
                { SPReqId: string },
                { TicketId: string },
                { ServiceCallId: string },
                { ServiceEngineer: string },
                { Secretary: Date },
                { ItemDescription: string },
                {
                    itemEntity: {
                        name: string;
                        MrfSerialNumber: string
                        SerialNumber: string
                        ItemDescription: string
                        ItemGroup: string
                    }
                }]
        }
    ];


}
