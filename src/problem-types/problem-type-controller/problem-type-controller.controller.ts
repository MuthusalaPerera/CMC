import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProblemTypeServiceService } from '../problem-type-service/problem-type-service.service';

@Controller('problem-type-controller')
export class ProblemTypeControllerController {

    constructor(@Inject('problemTypes_Service') private readonly problemTypeService:ProblemTypeServiceService) {}

    // get all problem types
    @Get('/get')
    async getProblemType() {
    return await this.problemTypeService.findProblemType();
    }

    // get by id
    @Get('/get/:id')
    async getIdProblemType(@Param('id',ParseIntPipe) id:number){
        const problemType = await this.problemTypeService.getProblemTypeById(id);
        if(problemType) return problemType;
        else throw new NotFoundException();
    }

    // post problem types
    @Post('/post')
    async createRoleType(@Body() body) { 
    
        return  await this.problemTypeService.createProblemType(body)
    }

    // update problem types
    @Put('/update/:id')
    updateProblemType(@Param('id') id: string, @Body() body) {
        return this.problemTypeService.updateProblemType(parseInt(id), body);
    }

    // delete problem types
    @Delete('/delete/:id')
    removeProbelmType(@Param('id') id: string) {
        return this.problemTypeService.remove(parseInt(id));
    }


}
