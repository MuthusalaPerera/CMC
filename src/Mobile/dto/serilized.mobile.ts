import {Exclude, Expose} from "class-transformer"
import {Column, PrimaryGeneratedColumn} from "typeorm"


export  class SerilizedUser {
    @Expose({ name: "CusID" })
    CustomerId: number;
    @Expose({ name: "Address" })
    CustomerAddressId:string
    @Expose({ name: "ss" })
    CustomeName:string
    @Exclude()
    TelephoneNo:string

    constructor(partial: Partial<SerilizedUser>){
        Object.assign(this,partial)
    };
}



export  class SerilizedItemDropdown {
    @Exclude()
    EquipmetCard_Id:number
    @Exclude()
    EquipmetCard_msnfSN: string;
    @Exclude()
    EquipmetCard_internalSN: string
    @Exclude()
    EquipmetCard_itemCode: string
    @Expose({ name: "label" })
    EquipmetCard_itemName: string
    @Exclude()
    EquipmetCard_customer: string
    @Exclude()
    EquipmetCard_custmrName: string
    @Exclude()
    EquipmetCard_U_Distance: number
    @Exclude()
    EquipmetCard_cntrctEnd: Date
    @Exclude()
    EquipmetCard_contractID: number
    @Exclude()
    EquipmetCard_Status: string
    @Exclude()
    EquipmetCard_Address: string
    @Exclude()
    EquipmetCard_ContactEmployeeCode: number
    @Exclude()
    EquipmetCard_ContactPhone: string

    constructor(partial: Partial<SerilizedUserDropdown>){
        Object.assign(this,partial)
    };
}


export  class SerilizedUserDropdown {
    @Exclude()
    EquipmetCard_Id:number
    @Exclude()
    EquipmetCard_msnfSN: string;
    @Exclude()
    EquipmetCard_internalSN: string
    @Exclude()
    EquipmetCard_itemCode: string
    @Exclude()
    EquipmetCard_itemName: string
    @Exclude()
    EquipmetCard_customer: string
    @Expose({ name: "label" })
    EquipmetCard_custmrName: string
    @Exclude()
    EquipmetCard_U_Distance: number
    @Exclude()
    EquipmetCard_cntrctEnd: Date
    @Exclude()
    EquipmetCard_contractID: number
    @Exclude()
    EquipmetCard_Status: string
    @Exclude()
    EquipmetCard_Address: string
    @Exclude()
    EquipmetCard_ContactEmployeeCode: number
    @Exclude()
    EquipmetCard_ContactPhone: string

    constructor(partial: Partial<SerilizedUserDropdown>){
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


export  class SerilizedProblem {
    @Expose({ name: "typeId" })
    ProblemTypeCode: number;
    @Expose({ name: "typeName" })
    ProblemTypeName: string;
    @Expose({ name: "description" })
    ProblemTypeValue: string;
    @Expose({ name: "status" })
    Status: number;
    
    constructor(partial: Partial<SerilizedProblem>){
        Object.assign(this,partial)
    };
}



