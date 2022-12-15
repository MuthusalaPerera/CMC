import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class ClusterHead {
    @PrimaryGeneratedColumn()
    ClusterHeadCode:number;

    @Column()
    ClusterHeadName:string

    @Column()
    ClusterHeadStatus:string

}