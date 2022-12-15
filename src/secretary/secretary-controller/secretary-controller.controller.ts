import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SecretaryServiceService } from '../secretary-service/secretary-service.service';

@Controller('secretary-controller')
export class SecretaryControllerController {

    constructor(@Inject('secretary_Service') private readonly secretaryService:SecretaryServiceService) {}

    // get all Secretaries
    @Get('/get')
    async getSecretaryPerson() {
    return await this.secretaryService.findSecretary();
    }

    // get by id
    @Get('/get/:id')
    async getIdSecretaryPerson(@Param('id',ParseIntPipe) id:number){
        const secretary = await this.secretaryService.getsecretaryPersonById(id);
        if(secretary) return secretary;
        else throw new NotFoundException();
    }

    // post Secretary
    @Post('/post')
    async createSecretary(@Body() body) { 
    
        return  await this.secretaryService.createSecretary(body)
    }


    // delete Secretary
    @Delete('/delete/:id')
    removeSecretary(@Param('id') id: string) {
        return this.secretaryService.remove(parseInt(id));
    }

}
