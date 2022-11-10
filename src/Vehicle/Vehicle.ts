import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {VehicleReservation} from "./VehicleReservation";

@Entity()
export  class Vehicle {
    @PrimaryGeneratedColumn()
    VehicleRegistrationNo:number;
    @Column()
    IsAvailable:string
    @Column()
    VehicleDescription:string
    @Column()
    IsRecordActive:string
    @Column()
    CreatedOn:Date
    @Column()
    CreatedBy:string
    @Column()
    EditedOn:Date
    @Column()
    EditedBy:string
    @OneToOne(() => VehicleReservation, (vehicleReservation) => vehicleReservation.vehicle) // specify inverse side as a second parameter
    @JoinColumn()
    vehicleReservation: VehicleReservation
}
