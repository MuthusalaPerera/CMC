import { Expose } from 'class-transformer';

export class CreateVehicleAllocationDto{
    @Expose()
    id: number;

    @Expose()
    VehicleID: string;
    
    @Expose()
    VehicleType:string;
    
    @Expose()
    VehicleReqId:string
    
    @Expose()
    VehicleDescription:string;
    
    @Expose()
    VehicleCapacity:string;
    
    @Expose()
    VehicleReqStatus:string;
    
    @Expose()
    CreatedDateAndTime:Date;
    
    @Expose()
    RequestDateAndTime:Date;
     
    @Expose()
    NoOfDays:string;
        
    @Expose()
    HandOverDateAndTime:Date;
    
    
}

// }