import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClusterHead } from 'src/IntialDB/ClusterHead';
import { HandledBy } from 'src/IntialDB/handledBy';
import { Repository } from 'typeorm';

@Injectable()
export class ClusterHeadServiceService {

    constructor(
        @InjectRepository(ClusterHead) private readonly clusterHeadRepository:Repository<ClusterHead>,
        
    ) {}

    // find method to get all Cluster Heads
    findClusterHead() {
        return this.clusterHeadRepository.find();
    }

    // find By Id
    findById(id:number) {
        return this.clusterHeadRepository.findOne(id);
    }

    // create Cluster Head
    async createClusterHead(clusterHeadPerson:ClusterHead){

        const clusterHead = await this.clusterHeadRepository.save({...clusterHeadPerson})
                    
        return clusterHead
             
    }

    getclusterHeadPersonById(ClusterHeadCode: number) {
        return this.clusterHeadRepository.findOne(ClusterHeadCode);
    }

    //Remove Cluster Head Person
    async remove(ClusterHeadCode: number) {
        const clusterHead = await this.getclusterHeadPersonById(ClusterHeadCode);
        if (!clusterHead) {
            throw new Error('Cluster Head Person not found.');
        }
        return this.clusterHeadRepository.remove(clusterHead);
    }

}
