import {IsArray, IsNotEmpty, IsString} from 'class-validator';
import {PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

export class CustomerDto {
    CustomerId: number;
    @IsNotEmpty()
    CustomeName: string;
    @IsNotEmpty()
    ContactPerson:string;
    @IsNotEmpty()
    TelephoneNo:number;
    @IsNotEmpty()
    CustomerAddressId:string;
    @IsArray()
    serviceCalls:[
        {ItemCode:number},
        {ItemDescription:string},
        { Customer:string },
        { Status: string },
        { CreatedDate:string},
        {Priority:string },
        {Subject: string},
        {
            itemEntity: {
                name: string;
                MrfSerialNumber:string
                SerialNumber:string
                ItemDescription:string
                ItemGroup:string
            }
        }
    ];

}
