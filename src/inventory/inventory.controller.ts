import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateinventoryDto } from 'src/inventory/dtos/create-inventory.dto';

@Controller('inventory')
export class InventoryController {

    @Get()
    listInventory() {}
  
    @Post()
    createInventory(@Body() body: CreateinventoryDto) {
      console.log(body);
    }
  
    @Get('/: id')
    getSparePart(@Param('id') id: string) {
      console.log(id);
    }
    
}
