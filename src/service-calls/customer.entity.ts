import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "./service-call.entity";



@Entity()
export  class CustomerEntity {
    @PrimaryGeneratedColumn()
    CustomerId:number;

    @Column()
    CustomeName:string

    @Column()
    ContactPerson:string

    @Column()
    TelephoneNo:string

    @Column()
    CustomerAddressId:string

    @OneToMany(()=>ServiceCall,(serviceCall)=>serviceCall.customerEntity)
    serviceCalls:ServiceCall[];
  spareParts:SparePart[];

}