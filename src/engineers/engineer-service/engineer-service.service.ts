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

    //Remove Engineers
    async remove(EngineerCode: number) {
        const engineer = await this.getengineerPersonById(EngineerCode);
        if (!engineer) {
            throw new Error('Engineer Person not found.');
        }
        return this.engineerRepository.remove(engineer);
    }

}
