import {IsArray, IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator"
import UserType from "../../IntialDB/UserRolls"
import {User} from "../user.entity"
import {Column, PrimaryGeneratedColumn} from "typeorm"

export class LoginDto {

    @IsNumber()
    Id: number;
    @IsString()
    Description:string;
    @IsNumber()
    Status:number;
    @IsNotEmpty()
    login:{
                UserName:string;
                Password:string;
                Status:number;
                DeviceId:string;
            }
        

  

}
