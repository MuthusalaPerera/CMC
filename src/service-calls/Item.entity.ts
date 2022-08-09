import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "./service-call.entity";


@Entity()
export  class ItemEntity {
    @PrimaryGeneratedColumn()
    ItemCode:number;

    @Column()
    name:string

    @OneToOne(()=>ServiceCall,(serviceCall)=>serviceCall.itemEntity)
    serviceCalls:ServiceCall;

}