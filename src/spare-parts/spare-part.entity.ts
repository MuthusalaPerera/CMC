import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SparePart {
  @PrimaryGeneratedColumn()
  id: number
  ItemCode: string;

  @Column()
  ItemDescrption: string;

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
