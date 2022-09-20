import { IsDate, IsNotEmpty } from "class-validator";
import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, ManyToOne, OneToMany} from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import {ServiceCall} from "./service-call.entity";

@Entity()
export  class ServiceTicketEntity {

    @PrimaryGeneratedColumn()
    TicketId:number;

    @Column()
    TicketType:string;

    @Column()
    Subject:string;

    @Column()
    AssignedTo:string;

    @IsDate()
    PlannedStartDate:Date;

    @ManyToOne(()=>ServiceCall,ServiceCallEntity=>ServiceCallEntity.serviceTicketEntities,{eager:true})
    serviceCall:ServiceCall

     @OneToMany(()=>SparePart,(sparePart)=>sparePart.ServiceTicketEntity)
    sparePart:SparePart[];
}
