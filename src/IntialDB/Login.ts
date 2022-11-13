import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import {User} from "../users/user.entity"

@Entity()
export default  class Login {
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    UserName:string;
    @Column()
    Password:string;
    @Column()
    Status:number;
    @Column()
    Count:number;
    @Column()
    DeviceId:string;
    @OneToOne(()=>User,(User)=>User.login,{eager:true})
    @JoinColumn()
    user:User;
}
