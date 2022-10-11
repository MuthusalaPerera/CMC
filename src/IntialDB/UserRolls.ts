import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import {User} from "../users/user.entity"
import {ServiceCall} from "../service-calls/service-call.entity"


@Entity()
export default  class UserType {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    Description:string;
    @Column()
    Status:number;
    @OneToOne(()=>User,(User)=>User.userRolls)
    user:User;
}
