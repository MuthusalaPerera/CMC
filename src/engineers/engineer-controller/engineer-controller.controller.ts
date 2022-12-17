import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

    // update 
    @Put('/update/:id')
    updateManageUserDetails(@Param('id') Id: string, @Body() body) {
        return this.engineerService.updateAssignedClusterHead(parseInt(Id), body);
    }

    // delete Engineers
    @Delete('/delete/:id')
    removeEngineers(@Param('id') id: string) {
        return this.engineerService.remove(parseInt(id));
    }

}
