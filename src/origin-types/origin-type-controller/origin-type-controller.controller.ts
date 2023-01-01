import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { OriginTypeServiceService } from '../origin-type-service/origin-type-service.service';

@Controller('origin-type-controller')
export class OriginTypeControllerController {

    constructor(@Inject('originTypes_Service') private readonly originTypeService:OriginTypeServiceService) {}


    // get all origin types
    @Get('/get')
    async getUserType() {
    //return await this.originTypeService.findOriginType();
    const originType = await this.originTypeService.findOriginType();
    if(originType.length!==0){
        return   originType
      }
      else {
        return [{message:null}]
      }
    }

    // get by id
    @Get('/get/:id')
    async getIdOriginType(@Param('id',ParseIntPipe) id:number){
        const originType = await this.originTypeService.getOriginTypeById(id);
        if(originType) return originType;
        else throw new NotFoundException();
    }

    // post origin types
    @Post('/post')
    async createOriginType(@Body() body) { 
    
        return  await this.originTypeService.createOriginType(body)
    }

    // update origin types
    @Put('/update/:id')
    updateOriginType(@Param('id') id: string, @Body() body) {
        return this.originTypeService.updateOriginType(parseInt(id), body);
    }

    // delete origin types
    @Delete('/delete/:id')
    removeOriginType(@Param('id') id: string) {
        return this.originTypeService.remove(parseInt(id));
    }

}
