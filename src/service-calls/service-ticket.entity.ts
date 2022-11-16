import { IsDate, IsNotEmpty } from "class-validator";
import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, ManyToOne, OneToMany} from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import {ServiceCall} from "./service-call.entity";
import {VehicleReservation} from "../Vehicle/VehicleReservation";
import {AssertsReservation} from "../AssertsReservation/AssertsReservation";
import { ResourceAllocationEntity } from "src/ResourceAllocation/resourceAllocation.entity";

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

    @Column()
    AssignedBY:string;

    @Column()
    EstimatedDuration:string;

    @Column()
    ContactPerson:string;

    @Column()
    PlannedStartDate:Date;
    @Column()
    PlannedEndDate:Date;
    @Column({nullable:true})
    ActualStartDate:Date;
    @Column({nullable:true})
    ActualEndDate:Date;
    @Column()
    CreatedOn:Date;


    @ManyToOne(()=>ServiceCall,ServiceCallEntity=>ServiceCallEntity.serviceTicketEntities,{eager:true})
    serviceCall:ServiceCall

     @OneToMany(()=>SparePart,(sparePart)=>sparePart.ServiceTicketEntity)
    sparePart:SparePart[];

    @OneToMany(()=>VehicleReservation,(vehicleReservation)=>vehicleReservation.serviceTicketEntity)
    vehicleReservations:VehicleReservation[]

    @OneToMany(()=>AssertsReservation,(assertsReservations)=>assertsReservations.serviceTicketEntity)
    assertsReservations:AssertsReservation[]
    @OneToMany(()=>ResourceAllocationEntity,(resourceAllocation)=>resourceAllocation.serviceTicketEntity)
    resourceAllocationEntity:ResourceAllocationEntity[]
}
