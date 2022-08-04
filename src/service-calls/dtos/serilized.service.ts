import {Exclude} from "class-transformer";

export  class SerializedService {
    ItemCode: number;
    ItemDescription: string;
    Customer: string;
    Status: string;
    CreatedDate: Date;
    @Exclude()
    Priority: string;
    Subject: string;

    constructor(partial: Partial<SerializedService>){
        Object.assign(this,partial)
    };
}
