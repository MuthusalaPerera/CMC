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
