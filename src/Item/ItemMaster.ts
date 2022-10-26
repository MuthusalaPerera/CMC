import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class ItemMasterEntity {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    ItemCode: string
    @Column()
    ItemName: string
    @Column()
    ItemType: string
    @Column()
    Onhand: number
    @Column()
    SalUnitMsr: string
}
