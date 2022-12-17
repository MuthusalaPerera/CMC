import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SPID: string;

  @Column()
  ItemDescription: string;

  @Column()
  Remarks: string;

  @Column()
  AvailableQuantity:number;

  @Column()
  RequestQuantity: number;


}