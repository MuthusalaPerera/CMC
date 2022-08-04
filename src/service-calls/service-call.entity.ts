import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {IsNotEmpty, IsString} from "class-validator";

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
}
