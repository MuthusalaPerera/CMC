import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { inventory } from './inventory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([inventory])],
  controllers: [InventoryController],
  providers: [InventoryService]
})
export class InventoryModule {}
