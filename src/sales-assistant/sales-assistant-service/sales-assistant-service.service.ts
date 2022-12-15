import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesAssistantDB } from 'src/IntialDB/SalesAssistant';
import { Repository } from 'typeorm';

@Injectable()
export class SalesAssistantServiceService {

    constructor(
        @InjectRepository(SalesAssistantDB) private readonly salesAssistantRepository:Repository<SalesAssistantDB>,
        
    ) {}

    // find method to get all Sales Assistants
    findSalesAssistant() {
        return this.salesAssistantRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.salesAssistantRepository.findOne(id);
    }

    // create Sales Assistant
    async createSalesAssistant(SalesAssistantPerson:SalesAssistantDB){

        const salesAssistant = await this.salesAssistantRepository.save({...SalesAssistantPerson})
                    
        return salesAssistant
             
    }

    getSalesAssistantPersonById(SalesAssistantCode: number) {
        return this.salesAssistantRepository.findOne(SalesAssistantCode);
    }

    //Remove Sales Assistant 
    async remove(SalesAssistantCode: number) {
        const salesAssistant = await this.getSalesAssistantPersonById(SalesAssistantCode);
        if (!salesAssistant) {
            throw new Error('Sales Assistant not found.');
        }
        return this.salesAssistantRepository.remove(salesAssistant);
    }

}
