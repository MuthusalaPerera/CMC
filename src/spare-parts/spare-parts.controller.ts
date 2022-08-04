import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSparePartDto } from 'src/spare-parts/dtos/create-spare-part.dto';

@Controller('spare-parts')
export class SparePartsController {

    @Get()
    listSpareParts() {}
  
    @Post()
    createSparePart(@Body() body: CreateSparePartDto) {
      console.log(body);
    }
  
    @Get('/:id')
    getSparePart(@Param('id') id: string) {
      console.log(id);
    }
}
