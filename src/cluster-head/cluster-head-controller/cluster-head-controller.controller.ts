import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClusterHeadServiceService } from '../cluster-head-service/cluster-head-service.service';

@Controller('cluster-head-controller')
export class ClusterHeadControllerController {

    constructor(@Inject('clusterHead_Service') private readonly clusterHeadService:ClusterHeadServiceService) {}

    // get all Cluster Head Person
    @Get('/get')
    async getClusterHeadPerson() {
    return await this.clusterHeadService.findClusterHead();
    }

    // get by id
    @Get('/get/:id')
    async getIdClusterHeadPerson(@Param('id',ParseIntPipe) id:number){
        const clusterHead = await this.clusterHeadService.getclusterHeadPersonById(id);
        if(clusterHead) return clusterHead;
        else throw new NotFoundException();
    }

    // post Cluster Head Person
    @Post('/post')
    async createClusterHead(@Body() body) { 
    
        return  await this.clusterHeadService.createClusterHead(body)
    }


    // delete Cluster Head Person
    @Delete('/delete/:id')
    removeClusterHead(@Param('id') id: string) {
        return this.clusterHeadService.remove(parseInt(id));
    }

}
