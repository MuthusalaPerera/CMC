import {IsArray, IsEmail, IsNumber, IsString} from "class-validator"
import UserType from "../../IntialDB/UserRolls"
import {User} from "../user.entity"
import {Column, PrimaryGeneratedColumn} from "typeorm"

export class CreateUserDto {

    @IsNumber()
  Id: number;
  @IsArray()
  user: [
    { id: number },
    { NIC: string },
    { ContactNumber: string },
    { Status: string },
    { login:{
        UserName:string;
        Password:string;
        Status:number;
        DeviceId:string;
      }
    }
  
  ];

}
