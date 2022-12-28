import { SparePart } from 'src/spare-parts/spare-part.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  ItemCode: string;

  @Column()
  ItemName: string;

  @Column()
  ItemType: string;

  @Column()
  Onhand:number;

  @Column()
  qty: number;

  // Id: string;
  // ItemCode: string;
  // ItemName: string;
  // ItemType: string;
  // Onhand: number;
  // SalUnitMsr: string;
  // qty: number;

  @ManyToOne(()=>SparePart,SparePart=>SparePart.inventory)
  spareparts:SparePart

}