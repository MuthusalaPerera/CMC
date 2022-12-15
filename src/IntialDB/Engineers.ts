import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class EngineersDB {
    @PrimaryGeneratedColumn()
    EngineerCode:number;

    @Column()
    EngineerName:string

    @Column()
    ClusterHead:string

    @Column()
    EngineerStatus:string

}