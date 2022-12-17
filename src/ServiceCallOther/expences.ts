import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {ServiceCall} from "../service-calls/service-call.entity"

@Entity()
export  class Expences {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    CreatedDate:Date
    @Column()
    DateExpire:string
    @Column()
    ExpenseType:string
    @Column()
    CreatedBy:string
    @Column()
    Amount:number
    @Column()
    Remark:string
    @ManyToOne(()=> ServiceCall, ServiceCall=>ServiceCall.expences)
    serviceCall:ServiceCall
}
