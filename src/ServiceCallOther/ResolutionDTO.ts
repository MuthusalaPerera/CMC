import {ServiceCall} from "../service-calls/service-call.entity";
import {IsNotEmpty} from "class-validator";

export class ResolutionDTO {
    ResolutionId: number;
    @IsNotEmpty()
    Resolution:string;
    @IsNotEmpty()
    Date:Date;
    @IsNotEmpty()
    serviceCall:ServiceCall
}