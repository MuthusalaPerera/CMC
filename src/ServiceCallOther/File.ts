import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export  class File {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Path:string
    @Column()
    Name:string
}
