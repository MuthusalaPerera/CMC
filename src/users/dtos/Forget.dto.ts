import {IsArray, IsEmail, IsNumber, IsString} from "class-validator"
import UserType from "../../IntialDB/UserRolls"
import {User} from "../user.entity"
import {Column, PrimaryGeneratedColumn} from "typeorm"

export class ForgetDto {

    @IsNumber()
    id: number;
    @IsEmail()
    email:string;
    @IsNumber()
    otp:number;
}
