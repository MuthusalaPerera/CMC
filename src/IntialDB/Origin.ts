import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class OriginsDropDown {
    @PrimaryGeneratedColumn()
    OriginCode:number;

    @Column()
    OriginName:string

    @Column()
    OriginValue:string

}