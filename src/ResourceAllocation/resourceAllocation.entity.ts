import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
//import { resourceAllocation } from 'src/resourceAllocation/';
import {ServiceCall} from "../service-calls/service-call.entity";
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';

@Entity()
export class resourceAllocationEntity {
 // [x: string]: string | number | Date | string[] | ObjectID | number[] | Date[] | ObjectID[] | FindConditions<SparePart>;
  @PrimaryGeneratedColumn()
  ToolId: string;
  
  @Column()
  ToolGroup:string;
  
  @Column()
  ToolReqID:string

  @Column()
  ToolDescription:string;

  @Column()
  SerialNo:string;

  @Column()
  ToolRequestStatus:string;

  @Column()
  ToolType:string;

  @Column()
  CreatedDateAndTime:string;

  @Column()
  RequestDateAndTime:string;

  @Column()
  NoOfDays:string;

  
  @Column()
  HandOverDateAndTime:string;

//   @Column()
//   ItemDescription:string;

  @ManyToOne(()=> resourceAllocationEntity,ServiceTicketEntity=>ServiceTicketEntity. resourceAllocation,{onDelete:'CASCADE'})
  ServiceTicketEntity:ServiceTicketEntity
  resourceAllocation: any;
  
}
