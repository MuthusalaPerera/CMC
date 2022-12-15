import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class HandledBy {
    @PrimaryGeneratedColumn()
    HandledByCode:number;

    @Column()
    HandledByName:string

    @Column()
    HandledByStatus:string

}