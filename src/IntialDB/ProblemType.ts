import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class ProblemTypesDropDown {
    @PrimaryGeneratedColumn()
    ProblemTypeCode:number;

    @Column()
    ProblemTypeName:string

    @Column()
    ProblemTypeValue:string
    @Column()
    Status:number
}
