import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SparePart } from './spare-part.entity';
import { SparePartsController } from './spare-parts.controller';
import { SparePartsService } from './spare-parts.service';

@Module({
  imports: [TypeOrmModule.forFeature([SparePart])],
  controllers: [SparePartsController],
  providers: [SparePartsService]
})
export class SparePartsModule {}
