import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "./service-call.entity";


@Entity()
export  class CustomerEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @OneToMany(()=>ServiceCall,(serviceCall)=>serviceCall.customerEntity,)
    serviceCalls:ServiceCall[];

}