import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
//import { resourceAllocation } from 'src/resourceAllocation/';
import {ServiceCall} from "../service-calls/service-call.entity";
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';

@Entity()
export class ResourceAllocationEntity {
 // [x: string]: string | number | Date | string[] | ObjectID | number[] | Date[] | ObjectID[] | FindConditions<SparePart>;
  @PrimaryGeneratedColumn()
  ToolId: string;
  
  @Column()
  ToolGroup:string;
  
  @Column()
  ToolReqID:string;

  @Column()
  ToolDescription:string;

  @Column()
  SerialNo:string;

  @Column()
  ToolRequestStatus:string;

  @Column()
  ToolType:string;

  @Column()
  CreatedDateAndTime:Date;

  @Column()
  RequestDateAndTime:Date;

  @Column()
  NoOfDays:string;

  @Column()
  HandOverDateAndTime:Date;
  @Column({nullable:true})
  Status:String;

//   @Column()
//   ItemDescription:string;

  @ManyToOne(()=> ServiceTicketEntity, ServiceTicketEntity=>ServiceTicketEntity.resourceAllocationEntity,{onDelete:'CASCADE'})
  serviceTicketEntity:ServiceTicketEntity

  
}
