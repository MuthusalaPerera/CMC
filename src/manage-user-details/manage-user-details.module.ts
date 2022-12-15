import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Login from 'src/IntialDB/Login';
import { User } from 'src/users/user.entity';
//import { User } from 'src/users/user.entity';
import { ManageUserDetailsControllerController } from './manage-user-details-controller/manage-user-details-controller.controller';
import { ManageUserDetailsServiceService } from './manage-user-details-service/manage-user-details-service.service';

@Module({
  controllers: [ManageUserDetailsControllerController],
  imports: [TypeOrmModule.forFeature([Login, User])],
  providers:[{
    provide: 'manageUserDetails_Service',
    useClass: ManageUserDetailsServiceService
  }],
})

export class ManageUserDetailsModule {}

