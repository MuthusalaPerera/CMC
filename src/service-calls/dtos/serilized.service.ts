import {Exclude} from "class-transformer";

export  class SerializedCustomer {
    ItemCode: number;
    ItemDescription: string;
    Customer: string;
    Status: string;
    CreatedDate: Date;
    Priority: string;
    Subject: string;

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
