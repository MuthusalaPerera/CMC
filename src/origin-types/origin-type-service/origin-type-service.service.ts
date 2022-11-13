import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginsDropDown } from 'src/IntialDB/Origin';
import { Repository } from 'typeorm';

@Injectable()
export class OriginTypeServiceService {

    constructor(
        @InjectRepository(OriginsDropDown) private readonly originTypeRepository:Repository<OriginsDropDown>,
        
    ) {}

    // find method to get all origin types
    findOriginType() {
        return this.originTypeRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.originTypeRepository.findOne(id);
    }

    // create Origin Type
    async createOriginType(originTypes:OriginsDropDown){

        const originType = await this.originTypeRepository.save({...originTypes})
                    
        return originType
             
    }

    //Update Origin Type
    async updateOriginType(id: number, attrs: Partial<OriginsDropDown>) {
        
        const originType = await this.getOriginTypeById(id);
        if (!originType) {
            return new HttpException("Origin Type Not found!",HttpStatus.BAD_REQUEST);
        }
        else {
            
           return await this.originTypeRepository.update(id, {
               OriginName: attrs.OriginName,
               OriginValue: attrs.OriginValue
           })
       }
    }

    getOriginTypeById(OriginCode: number) {
        return this.originTypeRepository.findOne(OriginCode);
    }

    //Remove Origin type
    async remove(OriginCode: number) {
        const originType = await this.getOriginTypeById(OriginCode);
        if (!originType) {
            throw new Error('Origin Type not found.');
        }
        return this.originTypeRepository.remove(originType);
    }

}
