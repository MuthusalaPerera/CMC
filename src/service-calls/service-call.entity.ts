import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import {CustomerEntity} from "./customer.entity";
import {ItemEntity} from "./Item.entity";


@Entity()
export class ServiceCall {
  @PrimaryGeneratedColumn()
  ItemCode: number;
  @Column()
  ItemDescription: string;
  @Column()
  Customer: string;
  @Column()
  Status: string;
  @Column()
  CreatedDate: Date;
  @Column()
  Priority: string;
  @Column()
  Subject: string;
  @ManyToOne(()=>CustomerEntity,customerEntity=>customerEntity.serviceCalls,{onDelete:'CASCADE'})
  customerEntity:CustomerEntity
  @OneToOne(()=>ItemEntity, item=>item.serviceCalls,{onDelete:"CASCADE"})
  @JoinColumn()
  itemEntity:ItemEntity;

}
