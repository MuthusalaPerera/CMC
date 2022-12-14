import {IsArray, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {Column, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

export class CustomerDto {
    @IsNumber()
    CustomerId: number;
    @IsNotEmpty()
    CustomeName: string;
    @IsNotEmpty()
    ContactPerson:string;
    @IsNotEmpty()
    TelephoneNo:string;
    @IsNotEmpty()
    CustomerAddressId:string;
    @IsNotEmpty()
    serviceCalls:[
        { ServiceCallId: number },
        { Priority: string },
        { Subject: string },
        { Origin: string },
        { ProblemType: string },
        { InquiryType: string },
        { CreatedBy: string },
        { HandledBy: string },
        { Queue: string },
        { Secretary: string },
        { SalesAssistant: string },
        { CreatedOn: Date },
        { PlanedStartDateTime: Date },
        { EstimatedDutation: string },
        { PlanedEndDateTime: Date },
        { ActualStartDate: Date },
        { ActualEndDate: Date },
        {
            itemEntity: {
                ItemCode:string,
                name: string,
                MrfSerialNumber:string,
                SerialNumber:string,
                ItemDescription:string,
                ItemGroup:string
            },

        }
    ];

}
