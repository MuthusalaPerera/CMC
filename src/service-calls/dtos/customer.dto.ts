import {IsArray, IsNotEmpty, IsString} from 'class-validator';
import {PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

export class CustomerDto {
    id: number;
    @IsNotEmpty()
    name: string;
    @IsArray()
    serviceCalls:[
        {ItemCode:string},
        {ItemDescription:string},
        { Customer:string },
        { Status: string },
        { CreatedDate:string},
        {Priority:string },
        {Subject: string},
        {
            itemEntity: {
                id: string;
                name: string;
            }
        }
    ];

}
