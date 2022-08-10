import { Body, Controller, Get, Post, Param, Inject, Put, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { CreateinventoryDto } from 'src/inventory/dtos/create-inventory.dto';
import { inventoryDto } from './dtos/inventory';

@Controller('inventory')
export class InventoryController {
  constructor ( @Inject('inventory') private readonly inventoryservice:inventoryservice) {}
    


    @Get()
    async listInventory() {
      return await this.inventoryservice.find();
    }
  
    @Post()
    async createInventory(@Body() body: CreateinventoryDto) {
      return await this.inventoryservice.createInventory(body)
      
    }
    @Put('1/:id')
    update-inventory(@Param('id') id: string, @Body() body: inventoryDto)
      return this.inventoryservice.update(parseInt(id),body);
  }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:id')
   
    @Delete('/:id')
}
  
    
}
