import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceCall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: string;

  @Column()
  itemCode: string;
}
