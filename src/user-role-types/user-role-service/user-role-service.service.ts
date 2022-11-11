import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserType from 'src/IntialDB/UserRolls';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleServiceService {

    constructor(
        @InjectRepository(UserType) private readonly userTypeRepository:Repository<UserType>,
        
    ) {}
    
    // find method to get all user roles
    findUserType() {
        return this.userTypeRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.userTypeRepository.findOne(id);
    }

    // create userRole Type
    async createUserRoleType(userType:UserType){

     const userRoleType = await this.userTypeRepository.save({...userType})
                 
     return userRoleType
          
    }

    //Update User Role type
    async updateUserRoleType(id: number, attrs: Partial<UserType>) {
        
             const userRoleType = await this.getUserRoleTypeById(id);
             if (!userRoleType) {
                 return new HttpException("User Role Type Not found!",HttpStatus.BAD_REQUEST);
             }
             else {
                 
                return await this.userTypeRepository.update(id, {
                    Description: attrs.Description,
                    RoleDescription: attrs.RoleDescription,
                    Status:attrs.Status,
                })
            }
    }

    getUserRoleTypeById(Id: number) {
        return this.userTypeRepository.findOne(Id);
    }

    //Remove User Role Type
    async remove(Id: number) {
        const userRoleType = await this.getUserRoleTypeById(Id);
        if (!userRoleType) {
            throw new Error('User Role Type not found.');
        }
        return this.userTypeRepository.remove(userRoleType);
    }

    async getUserRoleByDesc(desc:string){
        return await this.userTypeRepository.find({
            
            where: {
                Description: desc
            }
        })
    }

    //Update User Role Status
    async updateUserRoleTypeStatus(Id: number, status: number) {

        var val;
        if(status == 1){

            val = 0;
        }else{
            val = 1;
        }
        // const allData  = await this.getUserRoleByDesc(desc)
        
        
        //console.log(desc, status);
        
        
           return await this.userTypeRepository.update(Id, {
            Status: val
           })
       
}


}
