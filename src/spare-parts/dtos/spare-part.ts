import { Expose } from 'class-transformer';

export class SparePartDto{
    @Expose()
    id: number;

    @Expose()
    ItemCode: string;

    @Expose()
  ItemDescrption: string;

  @Expose()
  Customer: string;

  @Expose()
  Status: string;

  @Expose()
  CreatedDate: Date; 

  @Expose()
  Priority: string;  

  @Expose()
  Subject: string;

    
}