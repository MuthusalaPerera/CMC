import {IsNotEmpty, IsNumber} from "class-validator"
import {Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
import {ServiceCall} from "../../service-calls/service-call.entity"
import {ItemEntity} from "../../Item/Item.entity"

@Entity()
export class CustomerItemMap {
    @PrimaryColumn()
    CustomerId: number;
    @PrimaryColumn()
    Id:number;
    @Column()
    CreatedTimeStamp:Date
}
