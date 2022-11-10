import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProblemTypesDropDown } from 'src/IntialDB/ProblemType';
import { Repository } from 'typeorm';

@Injectable()
export class ProblemTypeServiceService {

    constructor(
        @InjectRepository(ProblemTypesDropDown) private readonly problemTypeRepository:Repository<ProblemTypesDropDown>,
        
    ) {}

    // find method to get all Problem types
    findProblemType() {
        return this.problemTypeRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.problemTypeRepository.findOne(id);
    }

    // create Problem type
    async createProblemType(problemTypes:ProblemTypesDropDown){

        const problemType = await this.problemTypeRepository.save({...problemTypes})
                    
        return problemType
             
    }

    //Update Problem type
    async updateProblemType(id: number, attrs: Partial<ProblemTypesDropDown>) {
        
        const problemType = await this.getProblemTypeById(id);
        if (!problemType) {
            return new HttpException("Problem Type Not found!",HttpStatus.BAD_REQUEST);
        }
        else {
            
           return await this.problemTypeRepository.update(id, {
               ProblemTypeName: attrs.ProblemTypeName,
               ProblemTypeValue: attrs.ProblemTypeValue
           })
       }
    }

    getProblemTypeById(ProblemTypeCode: number) {
        return this.problemTypeRepository.findOne(ProblemTypeCode);
    }

    //Remove Problem type
    async remove(ProblemTypeCode: number) {
        const problemType = await this.getProblemTypeById(ProblemTypeCode);
        if (!problemType) {
            throw new Error('Problem Type not found.');
        }
        return this.problemTypeRepository.remove(problemType);
    }

}
