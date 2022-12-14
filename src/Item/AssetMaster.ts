import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class AssetMaster {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    ItemCode: string
    @Column()
    ItemName: string
    @Column()
    ItemType:string
    @Column()
    ItemGrpCod:number
    @Column()
    SerialNumber:number

}
