import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
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
    @OneToMany(()=>User,(User)=>User.userType)
    user:User[];
}
