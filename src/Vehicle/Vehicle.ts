import { ServiceTicketEntity } from "src/service-calls/service-ticket.entity";
import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {VehicleReservation} from "./VehicleReservation";

@Entity()
export  class Vehicle {

    @PrimaryGeneratedColumn()
    VehicleID:string
    @Column()
    VehicleType:string

    @Column()
    VehicleReqId:string

    @Column()
    VehicleDescription:string

    @Column()
    VehicleCapacity:string

    @Column()
    VehicleReqStatus:string

     @Column()
    CreatedDateAndTime:Date

    @Column()
    RequestDateAndTime:Date
    @Column()
    HandOverDateAndTime:Date

    @Column()
    NoOfDays:string;

    

    // @OneToOne(() => VehicleReservation, (vehicleReservation) => vehicleReservation.vehicle) // specify inverse side as a second parameter
    // @JoinColumn()
    // vehicleReservation: VehicleReservation

    // @ManyToOne(()=> ServiceTicketEntity, ServiceTicketEntity=>ServiceTicketEntity.resourceAllocationEntity,{onDelete:'CASCADE'})
    // serviceTicketEntity:ServiceTicketEntity
  


}
