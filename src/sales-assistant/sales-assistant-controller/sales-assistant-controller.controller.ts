import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SalesAssistantServiceService } from '../sales-assistant-service/sales-assistant-service.service';

@Controller('sales-assistant-controller')
export class SalesAssistantControllerController {

    constructor(@Inject('salesAssistant_Service') private readonly salesAssistantService:SalesAssistantServiceService) {}

    // get all Sales Assistants
    @Get('/get')
    async getSalesAssistantPerson() {
    //return await this.salesAssistantService.findSalesAssistant();
    const salesAssistant = await this.salesAssistantService.findSalesAssistant();
    if(salesAssistant.length!==0){
        return   salesAssistant
      }
      else {
        return [{message:null}]
      }
    }

    // get by id
    @Get('/get/:id')
    async getIdSalesAssistantPerson(@Param('id',ParseIntPipe) id:number){
        const salesAssistant = await this.salesAssistantService.getSalesAssistantPersonById(id);
        if(salesAssistant) return salesAssistant;
        else throw new NotFoundException();
    }

    // post Sales Assistant
    @Post('/post')
    async createSalesAssistant(@Body() body) { 
    
        return  await this.salesAssistantService.createSalesAssistant(body)
    }


    // delete Sales Assistant
    @Delete('/delete/:id')
    removeSalesAssistant(@Param('id') id: string) {
        return this.salesAssistantService.remove(parseInt(id));
    }

}
