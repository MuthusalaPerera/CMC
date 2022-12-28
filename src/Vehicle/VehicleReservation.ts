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
    VehicleType:string
    @Column()
    VehicleDescription:string
    @Column()
    VehicleCapacity:string
    @Column()
    Status:string
    @Column()
    PlateNo:string
    @Column()
    CreatedOn:Date
    @Column()
    Remark:string
    @Column()
    RequestedOn:Date
    @Column()
    Duration:string
    @Column()
    ReturnedOn:Date
    
    // @OneToOne(() => Vehicle, (vehicle) => vehicle.vehicleReservation) // specify inverse side as a second parameter
    // vehicle: Vehicle

    @ManyToOne(()=>ServiceTicketEntity,ServiceTicketEntity=>ServiceTicketEntity.vehicleReservations,{onDelete:'CASCADE'})
    serviceTicketEntity:ServiceTicketEntity
}
