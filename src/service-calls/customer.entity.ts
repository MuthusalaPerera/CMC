import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "./service-call.entity";



@Entity()
export  class CustomerEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @OneToMany(()=>ServiceCall,(serviceCall)=>serviceCall.customerEntity)
    serviceCalls:ServiceCall[];

}