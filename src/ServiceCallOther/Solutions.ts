import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {ServiceCall} from "../service-calls/service-call.entity"

@Entity()
export  class Solutions {
    @PrimaryGeneratedColumn()
    Id:number;
    @Column()
    Solution:string
    @Column()
    CreatedOn:Date
    @Column()
    Owner:string
    @Column()
    Status:string
    @Column()
    HandledBy:string
    @ManyToOne(()=>ServiceCall,ServiceCallEntity=>ServiceCallEntity.solutions,{eager:true})
    serviceCall:ServiceCall
}
