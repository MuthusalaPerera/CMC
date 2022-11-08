import { SparePart } from "src/spare-parts/spare-part.entity";
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "../service-calls/service-call.entity";
import {ServiceTicketEntity} from "../service-calls/service-ticket.entity";



@Entity()
export  class AssertsReservation {
    @PrimaryGeneratedColumn()
    ReservationId:number;

    @Column()
    RequestedOn:Date

    @Column()
    ReturnedOn:Date

    @Column()
    ReservationRemarks:string

    @Column()
    Duration:string

    @Column()
    IsReturned:string

    @Column()
    ReturnedInGoodCondition:string
    @Column()
    ReturnedRemarks:string

    @ManyToOne(()=>ServiceTicketEntity,ServiceTicketEntity=>ServiceTicketEntity.assertsReservations,{onDelete:'CASCADE'})
    serviceTicketEntity:ServiceTicketEntity
}
