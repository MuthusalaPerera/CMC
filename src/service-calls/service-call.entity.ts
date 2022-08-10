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
  ServiceCallId: number;
  @Column()
  Status: string;
  @Column()
  Priority: string;
  @Column()
  Subject: string;
  @Column()
  Origin: string;
  @Column()
  ProblemType: string;
  @Column()
  InquiryType: string;
  @Column()
  CreatedBy: string;
  @Column()
  HandledBy: string;
  @Column()
  Queue: string;
  @Column()
  Secretary: string;
  @Column()
  SalesAssistant: string;
  @Column()
  CreatedOn:Date;
  @Column()
  PlanedStartDateTime:Date
  @Column()
  EstimatedDutation:string
  @Column()
  PlanedEndDateTime:Date
  @Column()
  ActualStartDate:Date
  @Column()
  ActualEndDate:Date
  @ManyToOne(()=>CustomerEntity,customerEntity=>customerEntity.serviceCalls,{onDelete:'CASCADE'})
  customerEntity:CustomerEntity
  @OneToOne(()=>ItemEntity, item=>item.serviceCalls,{onDelete:"CASCADE"})
  @JoinColumn()
  itemEntity:ItemEntity;

}
