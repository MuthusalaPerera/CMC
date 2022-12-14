import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ServiceCall} from "../service-calls/service-call.entity";

@Entity()
export  class File {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Path:string
    @Column()
    Name:string
    @ManyToOne(()=> ServiceCall, ServiceCall=>ServiceCall.files)
    serviceCall:ServiceCall
}
