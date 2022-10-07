import {Exclude, Expose} from "class-transformer"
import {Column} from "typeorm"


export  class SerilizedUser {
    @Expose({ name: "CusID" })
    CustomerId: number;
    @Expose({ name: "Address" })
    CustomerAddressId:string
    @Expose({ name: "CusName" })
    CustomeName:string
    @Exclude()
    TelephoneNo:string

    constructor(partial: Partial<SerilizedUser>){
        Object.assign(this,partial)
    };
}


export  class SerilizedItem {
    @Expose({ name: "itemID" })
    ItemCode: number;

    @Expose({ name: "itemCode" })
    MrfSerialNumber:string


    @Expose({ name: "description" })
    ItemDescription:string

    @Exclude()
    ItemGroup:string

    @Expose({ name: "status" })
    status:string

    constructor(partial: Partial<SerilizedItem>){
        Object.assign(this,partial)
    };
}



export  class SerilizedService {
    @Expose({ name: "typeId" })
    ServiceCallId: number;
    @Expose({ name: "status" })
    Status: string;
    @Exclude()
    Priority: string;
    @Expose({ name: "typeName" })
    Subject: string;
    @Exclude()
    Origin: string;
    @Exclude()
    ProblemType: string;
    @Exclude()
    InquiryType: string;
    @Exclude()
    CreatedBy: string;
    @Exclude()
    HandledBy: string;
    @Exclude()
    Queue: string;
    @Exclude()
    Secretary: string;
    @Exclude()
    SalesAssistant: string;
    @Exclude()
    CreatedOn:Date;
    @Exclude()
    PlanedStartDateTime:Date
    @Exclude()
    EstimatedDutation:string
    @Exclude()
    PlanedEndDateTime:Date
    @Exclude()
    ActualStartDate:Date
    @Exclude()
    ActualEndDate:Date
    @Exclude()
    customerEntity
    @Exclude()
    itemEntity
  

    constructor(partial: Partial<SerilizedService>){
        Object.assign(this,partial)
    };
}




