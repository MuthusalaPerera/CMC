import {IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateVehicleAllocationDto {
  // @IsNumber()
  // TicketId: number;
  // @IsArray()
  // vehicle: [
  //   {  VehicleID: string },
  //   { VehicleType: string },
  //   { VehicleReqId: string },
  //   {  VehicleDescription: string },
  //   { VehicleCapacity: string },
  //   { VehicleReqStatus: string },
  //   { CreatedDateAndTime: Date },
  //   { RequestDateAndTime: Date },
  //   { NoOfDays: string },
  //   { HandOverDateAndTime: Date }
  //  ]
  

  @IsOptional()
  VehicleID: string;

  @IsOptional()
  VehicleType: string ;

  @IsOptional()
  VehicleReqId: string;

  @IsOptional()
  VehicleDescription: string;

  @IsOptional()
  VehicleCapacity: string;

  @IsOptional()
  VehicleReqStatus: string;

  @IsOptional()
  CreatedDateAndTime: Date;

  @IsOptional()
  RequestDateAndTime: Date;

  @IsOptional()
  NoOfDays: string;

  @IsOptional()
  HandOverDateAndTime: Date;
}


