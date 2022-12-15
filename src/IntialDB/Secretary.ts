import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class SecretaryDB {
    @PrimaryGeneratedColumn()
    SecretaryCode:number;

    @Column()
    SecretaryName:string

    @Column()
    SecretaryStatus:string

}