import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class SalesAssistantDB {
    @PrimaryGeneratedColumn()
    SalesAssistantCode:number;

    @Column()
    SalesAssistantName:string

    @Column()
    SalesAssistantStatus:string

}