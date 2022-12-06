import {IsNotEmpty, IsString} from "class-validator";

export class Remark {
    @IsNotEmpty()
    ServiceCallId: number;
    @IsNotEmpty()
    Remark:string;
}