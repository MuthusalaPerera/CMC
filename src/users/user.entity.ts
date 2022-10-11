import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from "typeorm"
import { Exclude } from 'class-transformer';
import {SparePart} from "../spare-parts/spare-part.entity"
import userRolls from "../IntialDB/UserRolls"
import UserType from "../IntialDB/UserRolls"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
  @OneToOne(()=>UserType,(UserType)=>UserType.user)
  userRolls: UserType;
}
