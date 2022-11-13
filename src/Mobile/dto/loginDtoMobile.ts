import {IsNotEmpty, IsNumber, IsString} from "class-validator"

export class LoginDtoMobile {
    @IsString()
    UserName:string;
    @IsString()
    Password:string;
    @IsString()
    DeviceId:string;
}
