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
import {CustomerEntity} from "../Customer/customer.entity";
import {ItemEntity} from "../Item/Item.entity";
import {SparePart} from "../spare-parts/spare-part.entity";
import {ServiceTicketEntity} from "./service-ticket.entity";


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
  @Column({nullable:true})
  ActualStartDate:Date
  @Column({nullable:true})
  ActualEndDate:Date
  @ManyToOne(()=>CustomerEntity,customerEntity=>customerEntity.serviceCalls,{eager:true} )
  customerEntity:CustomerEntity
  @OneToMany(()=>ServiceTicketEntity,(ServiceTicket)=>ServiceTicket.serviceCall)
  serviceTicketEntities:ServiceTicketEntity[];
  @ManyToOne(()=>ItemEntity, item=>item.serviceCalls,{eager:true})
  itemEntity:ItemEntity;

}
