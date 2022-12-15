import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandledBy } from 'src/IntialDB/handledBy';
import { Repository } from 'typeorm';

@Injectable()
export class HandledByServiceService {

    constructor(
        @InjectRepository(HandledBy) private readonly handledByRepository:Repository<HandledBy>,
        
    ) {}

    // find method to get all handledBy
    findHandledBy() {
        return this.handledByRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.handledByRepository.findOne(id);
    }

    // create handledBy
    async createHandledBy(handledByPerson:HandledBy){

        const handledBy = await this.handledByRepository.save({...handledByPerson})
                    
        return handledBy
             
    }

    gethandledByPersonById(HandledByCode: number) {
        return this.handledByRepository.findOne(HandledByCode);
    }

    //Remove Handled-By Person
    async remove(HandledByCode: number) {
        const handledBy = await this.gethandledByPersonById(HandledByCode);
        if (!handledBy) {
            throw new Error('Handled-By Person not found.');
        }
        return this.handledByRepository.remove(handledBy);
    }

}
