import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { ItemEntity } from 'src/Item/Item.entity';
import { ServiceTicketEntity } from 'src/service-calls/service-ticket.entity';
import { SparePart } from './spare-part.entity';
import { SparePartsController } from './spare-parts.controller';
import { SparePartsService } from './spare-parts.service';
import {ServiceCall} from "../service-calls/service-call.entity";
import { ItemMasterEntity } from 'src/Item/ItemMaster';

@Module({
  imports: [TypeOrmModule.forFeature([SparePart,ServiceCall,CustomerEntity,ItemEntity,ServiceTicketEntity,ItemMasterEntity])],
  controllers: [SparePartsController],
  providers: [{
    provide:'SpareParts_Service',
    useClass: SparePartsService
  }],
})
export class SparePartsModule {}
