import { Expose } from 'class-transformer';

export class resourceAllocationDto{
    @Expose()
    id: number;

    @Expose()
    ToolId: string;
    
    @Expose()
    ToolGroup:string;
    
    @Expose()
    ToolReqID:string
    
    @Expose()
    ToolDescription:string;
    
    @Expose()
    SerialNo:string;
    
    @Expose()
    ToolRequestStatus:string;
    
    @Expose()
    ToolType:string;
    
    @Expose()
    CreatedDateAndTime:string;
    
    @Expose()
    RequestDateAndTime:string;
    
    @Expose()
    NoOfDays:string;
        
    @Expose()
    HandOverDateAndTime:string;
    
    
}

// }