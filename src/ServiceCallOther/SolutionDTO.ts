import {IsDate, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator"
import {Column} from "typeorm"

export class SolutionDTO {
    Id: number;
    @IsString()
    Solution:string
    @IsNotEmpty()
    CreatedOn:Date
    @IsString()
    Owner:string
    @IsString()
    Status:string
    @IsString()
    HandledBy:string
}
