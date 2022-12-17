import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EngineersDB } from 'src/IntialDB/Engineers';
import { Repository } from 'typeorm';

@Injectable()
export class EngineerServiceService {

    constructor(
        @InjectRepository(EngineersDB) private readonly engineerRepository:Repository<EngineersDB>,
        
    ) {}

    // find method to get all Engineers
    findEngineers() {
        return this.engineerRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.engineerRepository.findOne(id);
    }

    // create Engineers
    async createEngineers(engineerPerson:EngineersDB){

        const engineer = await this.engineerRepository.save({...engineerPerson})
                    
        return engineer
             
    }

    getengineerPersonById(EngineerCode: number) {
        return this.engineerRepository.findOne(EngineerCode);
    }

    //Update Assigned Cluster Head
    async updateAssignedClusterHead(EngineerCode: number, attrs: any) {
        const EngineersDB = await this.engineerRepository.findOne({
            where: {
                EngineerCode: EngineerCode,
            }
        });
        EngineersDB.ClusterHead = attrs.ClusterHead;
        await this.engineerRepository.save(EngineersDB);
        // const user = await this.usersRepository.findOne({
        //     where: {
        //         id: Id,
        //     }
        // })
        // user.ContactNumber = attrs.ContactNumber;
        // user.NIC = attrs.NIC;
        // await this.usersRepository.save(user);
        // const userDetails = await this.getManageUserDetailsById(Id);
        // if (!userDetails) {
        //     return new HttpException("User Details Not found!",HttpStatus.BAD_REQUEST);
        // }
        
            console.log(EngineerCode);
        
    }

    //Remove Engineers
    async remove(EngineerCode: number) {
        const engineer = await this.getengineerPersonById(EngineerCode);
        if (!engineer) {
            throw new Error('Engineer Person not found.');
        }
        return this.engineerRepository.remove(engineer);
    }

}
