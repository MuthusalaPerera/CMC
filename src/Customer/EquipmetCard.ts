import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class EquipmetCard {
    @PrimaryGeneratedColumn()
    Id:number
    @Column()
    msnfSN: string;
    @Column()
    internalSN: string
    @Column()
    itemCode: string
    @Column()
    itemName: string
    @Column()
    customer: string
    @Column()
    custmrName: string
    @Column()
    Distance: string
    @Column()
    cntrctEnd: Date
    @Column()
    contractID: number
    @Column()
    Name: number
}
