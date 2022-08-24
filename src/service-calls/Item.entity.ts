import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "./service-call.entity";


@Entity()
export  class ItemEntity {
    @PrimaryGeneratedColumn()
    ItemCode:number;

    @Column()
    MrfSerialNumber:string

    @Column()
    SerialNumber:string

    @Column()
    ItemDescription:string

    @Column()
    ItemGroup:string

    @OneToOne(()=>ServiceCall,(serviceCall)=>serviceCall.itemEntity)
    serviceCalls:ServiceCall;
    @OneToOne(()=>SparePart,(sparePart)=>sparePart.itemEntity)
  spareParts: SparePart;

}