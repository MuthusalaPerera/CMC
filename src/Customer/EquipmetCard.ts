import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class EquipmetCard {
    @PrimaryGeneratedColumn()
    Id:number
    @Column({length:50})
    msnfSN: string;
    @Column({length:50})
    internalSN: string
    @Column({length:50})
    itemCode: string
    @Column({length:100})
    itemName: string
    @Column({length:15})
    customer: string
    @Column({length:100})
    custmrName: string
    @Column()
    Distance: number
    @Column()
    cntrctEnd: Date
    @Column()
    contractID: number
    @Column()
    Name: number
}
