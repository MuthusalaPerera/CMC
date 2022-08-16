import { IsDate, IsNotEmpty } from "class-validator";
import { SparePart } from "src/spare-parts/spare-part.entity";
import { Column, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export  class ServiceTicketEntity {
    
    @PrimaryGeneratedColumn()
    TicketId:number;

    @Column()
    TicketType:string;

    @Column()
    Subject:string;

    @Column()
    AssignedTo:string;

    @IsDate()
    PlannedStartDate:Date;
  spareParts: any;

  @OneToMany(()=>SparePart,(sparePart)=>sparePart.ServiceTicketEntity)
  sparePart:SparePart[];
}