import {Exclude, Expose} from "class-transformer"

export  class SerializedCustomer {
    @Expose({ name: "CusID" })
    CustomerId: number;
    @Expose({ name: "Address" })
    CustomerAddressId:string
    @Expose({ name: "CusName" })
    CustomeName:string
    @Exclude()
    TelephoneNo:string
    
    constructor(partial: Partial<SerializedCustomer>){
        Object.assign(this,partial)
    };
}

export class SerializedServiceTicket{
    SPReqId: string;
    TicketId: string;
    ServiceCallId: string;
    ServiceEngineer: string;
    Secretary:string;
    ItemDescription: string;
    
    constructor(partial: Partial<SerializedServiceTicket>){
        Object.assign(this,partial)
    }
}
