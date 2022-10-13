import {Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne} from "typeorm"
import { Exclude } from 'class-transformer';
import {SparePart} from "../spare-parts/spare-part.entity"
import userRolls from "../IntialDB/UserRolls"
import UserType from "../IntialDB/UserRolls"
import Login from "../IntialDB/Login"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NIC: string;

  @Column()
  ContactNumber: string;

  @Column()
  Status: string;


  @ManyToOne(()=>UserType,(UserType)=>UserType.user,{eager:true})
  userType: UserType;

  @OneToOne(()=>Login,(Login)=>Login.user)
  login:Login;
}
