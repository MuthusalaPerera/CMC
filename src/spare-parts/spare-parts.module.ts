import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/service-calls/customer.entity';
import { ItemEntity } from 'src/service-calls/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { SparePart } from './spare-part.entity';
import { SparePartsController } from './spare-parts.controller';
import { SparePartsService } from './spare-parts.service';

@Module({
  imports: [TypeOrmModule.forFeature([SparePart,CustomerEntity,ItemEntity,ServiceTicketEntity])],
  controllers: [SparePartsController],
  providers: [{
    provide:'SpareParts_Service',
    useClass: SparePartsService
  }],
})
export class SparePartsModule {}
