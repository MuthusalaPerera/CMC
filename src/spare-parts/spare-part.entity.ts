import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from 'src/service-calls/customer.entity';
import { ItemEntity } from 'src/service-calls/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';

@Entity()
export class SparePart {
 // [x: string]: string | number | Date | string[] | ObjectID | number[] | Date[] | ObjectID[] | FindConditions<SparePart>;
  @PrimaryGeneratedColumn()
  SPReqId: string;

  @Column()
  TicketId:string;

  @Column()
  ServiceCallId:string;

  @Column()
  ServiceEngineer:string;

  @Column()
  Secretary:Date;

  @Column()
  ItemDescription:string;

  @ManyToOne(()=>ServiceTicketEntity,ServiceTicketEntity=>ServiceTicketEntity.spareParts,{onDelete:'CASCADE'})
  ServiceTicketEntity:ServiceTicketEntity

  @OneToOne(()=>ItemEntity, item=>item.spareParts,{onDelete:"CASCADE"})
  @JoinColumn()
  itemEntity:ItemEntity;

}
