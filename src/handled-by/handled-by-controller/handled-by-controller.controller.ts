import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { HandledByServiceService } from '../handled-by-service/handled-by-service.service';

@Controller('handled-by-controller')
export class HandledByControllerController {

    constructor(@Inject('handledBy_Service') private readonly handledByService:HandledByServiceService) {}

    // get all Handled By Person
    @Get('/get')
    async getHandledByPerson() {
    return await this.handledByService.findHandledBy();
    }

    // get by id
    @Get('/get/:id')
    async getIdHandledByPerson(@Param('id',ParseIntPipe) id:number){
        const handledBy = await this.handledByService.gethandledByPersonById(id);
        if(handledBy) return handledBy;
        else throw new NotFoundException();
    }

    // post Handled By Person
    @Post('/post')
    async createHandledBy(@Body() body) { 
    
        return  await this.handledByService.createHandledBy(body)
    }


    // delete Handled By Person
    @Delete('/delete/:id')
    removeHandledBy(@Param('id') id: string) {
        return this.handledByService.remove(parseInt(id));
    }

}
