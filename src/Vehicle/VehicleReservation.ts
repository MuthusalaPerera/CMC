import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Vehicle} from "./Vehicle";
import {ServiceTicketEntity} from "../service-calls/service-ticket.entity";

@Entity()
export  class VehicleReservation {
    @PrimaryGeneratedColumn()
    ReservationId:number;
    @Column()
    VehicleRegistrationNo:string
    @Column()
    RequestedOn:Date
    @Column()
    ReservationRemark:string
    @Column()
    Duration:string
    @Column()
    IsReturned:string
    @Column()
    ReturnedOn:Date
    @Column()
    ReturnedRemark:string
    // @OneToOne(() => Vehicle, (vehicle) => vehicle.vehicleReservation) // specify inverse side as a second parameter
    // vehicle: Vehicle

    @ManyToOne(()=>ServiceTicketEntity,ServiceTicketEntity=>ServiceTicketEntity.vehicleReservations,{onDelete:'CASCADE'})
    serviceTicketEntity:ServiceTicketEntity
}
