import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceTicketEntity} from "../service-calls/service-ticket.entity";
import {ServiceCall} from "../service-calls/service-call.entity";
import {ResolutionDTO} from "./ResolutionDTO";

@Entity()
export class Resolution {
    @PrimaryGeneratedColumn()
    ResolutionId: number;
    @Column()
    Resolution:string;
    @Column()
    Date:Date;
    @ManyToOne(()=> ServiceCall, ServiceCall=>ServiceCall.resolutions,{onDelete:'CASCADE'})
    serviceCall:ServiceCall
}