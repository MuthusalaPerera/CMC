import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export  class UsersDropDown {
    @PrimaryGeneratedColumn()
    UserCode: number;

    @Column()
    UserName: string

    @Column()
    Value: string

    
}
