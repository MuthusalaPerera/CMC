import {IsNotEmpty, IsString} from 'class-validator';

export class CustomerDto {
    @IsString()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    serviceCalls:[]

}
