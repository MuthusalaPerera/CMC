import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SecretaryDB } from 'src/IntialDB/Secretary';
import { Repository } from 'typeorm';

@Injectable()
export class SecretaryServiceService {

    constructor(
        @InjectRepository(SecretaryDB) private readonly secretaryRepository:Repository<SecretaryDB>,
        
    ) {}

    // find method to get all Secretaries
    findSecretary() {
        return this.secretaryRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.secretaryRepository.findOne(id);
    }

    // create Secretary
    async createSecretary(secretaryPerson:SecretaryDB){

        const secretary = await this.secretaryRepository.save({...secretaryPerson})
                    
        return secretary
             
    }

    getsecretaryPersonById(SecretaryCode: number) {
        return this.secretaryRepository.findOne(SecretaryCode);
    }

    //Remove Secretary 
    async remove(SecretaryCode: number) {
        const secretary = await this.getsecretaryPersonById(SecretaryCode);
        if (!secretary) {
            throw new Error('Secretary not found.');
        }
        return this.secretaryRepository.remove(secretary);
    }

}
