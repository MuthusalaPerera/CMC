import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Login from 'src/IntialDB/Login';
import { User } from 'src/users/user.entity';
//import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManageUserDetailsServiceService {

    constructor(
        @InjectRepository(Login) private readonly manageUserDetailsRepository:Repository<Login>,
        @InjectRepository(User) private readonly usersRepository:Repository<User>,

        
    ) {}

    // find method to get all User Deatils
    findManageUserDetails() {
        return this.manageUserDetailsRepository.find();
    }

    // find User Details By Id
    findById(id:number) {
        return this.manageUserDetailsRepository.findOne(id);
    }

    //Update Origin Type
    async updateManageUserDetails(Id: number, attrs: any) {
        const login = await this.manageUserDetailsRepository.findOne({
            where: {
                Id: attrs.loginId,
            }
        });
        login.Email = attrs.Email;
        await this.manageUserDetailsRepository.save(login);
        const user = await this.usersRepository.findOne({
            where: {
                id: Id,
            }
        })
        user.ContactNumber = attrs.ContactNumber;
        user.NIC = attrs.NIC;
        await this.usersRepository.save(user);
        // const userDetails = await this.getManageUserDetailsById(Id);
        // if (!userDetails) {
        //     return new HttpException("User Details Not found!",HttpStatus.BAD_REQUEST);
        // }
        
            console.log(Id);
        //    return await this.manageUserDetailsRepository.update(Id, {
        //     Email: attrs.Email
        //     //    NIC: attrs.user.NIC,
        //     //    ContactNumber: attrs.user.ContactNumber
        //    })
       
    }

    getManageUserDetailsById(Id: number) {
        return this.manageUserDetailsRepository.findOne(Id);
    }



}
