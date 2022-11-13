import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "../service-calls/service-call.entity";
import {CustomerItemMap} from "../Customer/dtos/CustomerItemMap"


@Entity()
export  class ItemEntity {
    @PrimaryGeneratedColumn()
    Id:number;
    @Column()
    ItemCode:string
    @Column()
    MrfSerialNumber:string

    @Column()
    SerialNumber:string

    @Column()
    ItemDescription:string

    @Column()
    ItemGroup:string
    
    @OneToMany(()=>ServiceCall,(serviceCall)=>serviceCall.itemEntity)
    serviceCalls:ServiceCall[];


    // @OneToMany(()=>ItemEntity,(item)=>item.customerItemMap)
    // itemEntities:ItemEntity[];
     // @ManyToOne(()=>CustomerItemMap, (cutomerItem)=>cutomerItem.itemEntities)
     // customerItemMap:CustomerItemMap;
}
