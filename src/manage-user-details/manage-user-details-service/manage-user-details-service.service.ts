import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Login from 'src/IntialDB/Login';
//import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManageUserDetailsServiceService {

    constructor(
        @InjectRepository(Login) private readonly manageUserDetailsRepository:Repository<Login>,
        
    ) {}

    // find method to get all User Deatils
    findManageUserDetails() {
        return this.manageUserDetailsRepository.find();
    }



}
