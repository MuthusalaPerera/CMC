import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EngineerServiceService } from '../engineer-service/engineer-service.service';

@Controller('engineer-controller')
export class EngineerControllerController {

    constructor(@Inject('engineer_Service') private readonly engineerService:EngineerServiceService) {}

    // get all Engineers
    @Get('/get')
    async getEngineerPerson() {
    return await this.engineerService.findEngineers();
    }

    // get by id
    @Get('/get/:id')
    async getIdEngineerPerson(@Param('id',ParseIntPipe) id:number){
        const engineer = await this.engineerService.getengineerPersonById(id);
        if(engineer) return engineer;
        else throw new NotFoundException();
    }

    // post Engineers
    @Post('/post')
    async createEngineers(@Body() body) { 
    
        return  await this.engineerService.createEngineers(body)
    }


    // delete Engineers
    @Delete('/delete/:id')
    removeEngineers(@Param('id') id: string) {
        return this.engineerService.remove(parseInt(id));
    }

}
