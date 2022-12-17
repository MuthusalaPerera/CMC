import {ServiceCall} from "../service-calls/service-call.entity";
import {IsNotEmpty} from "class-validator";
import {Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

export class ExpencesDTO{
    Id: number;
    @IsNotEmpty()
    CreatedDate:Date
    @IsNotEmpty()
    DateExpire:string
    @IsNotEmpty()
    ExpenseType:string
    @IsNotEmpty()
    CreatedBy:string
    @IsNotEmpty()
    Amount:number
    @IsNotEmpty()
    Remark:string
    @IsNotEmpty()
    serviceCall:ServiceCall
}