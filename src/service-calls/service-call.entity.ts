import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {IsNotEmpty, IsString} from "class-validator";
import {CustomerEntity} from "./customer.entity";


@Entity()
export class ServiceCall {
  @PrimaryColumn()
  ItemCode: string;
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

}
