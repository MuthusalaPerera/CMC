import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretaryDB } from 'src/IntialDB/Secretary';
import { SecretaryControllerController } from './secretary-controller/secretary-controller.controller';
import { SecretaryServiceService } from './secretary-service/secretary-service.service';

@Module({
  controllers: [SecretaryControllerController],
  imports: [TypeOrmModule.forFeature([SecretaryDB])],
  providers: [{
    provide: 'secretary_Service',
    useClass: SecretaryServiceService
  }],
})
export class SecretaryModule {}

