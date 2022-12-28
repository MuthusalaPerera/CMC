import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import {ServiceCall} from "../service-calls/service-call.entity";
import { Inventory } from 'src/inventory/inventory.entity';

@Entity()
export class SparePart {
 // [x: string]: string | number | Date | string[] | ObjectID | number[] | Date[] | ObjectID[] | FindConditions<SparePart>;
  @PrimaryGeneratedColumn()
  SPReqId: number;
  
  @Column()
  Remark:string;
  
  @Column()
  Content:string

  @Column()
  Secretary:string;

  @Column()
  ItemDescription:string;

  @ManyToOne(()=>ServiceTicketEntity,ServiceTicketEntity=>ServiceTicketEntity.sparePart,{onDelete:'CASCADE'})
  ServiceTicketEntity:ServiceTicketEntity
  @OneToMany(()=>Inventory,(inventory)=>inventory.spareparts)
  inventory:Inventory[];
  
}
