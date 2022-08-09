import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {CustomerEntity} from "./customer.entity";


@Entity()
export class ServiceCall {
  @PrimaryGeneratedColumn()
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
