import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserType from 'src/IntialDB/UserRolls';
import { UserRoleControllerController } from './user-role-controller/user-role-controller.controller';
import { UserRoleServiceService } from './user-role-service/user-role-service.service';


@Module({
  controllers: [UserRoleControllerController],
  imports: [TypeOrmModule.forFeature([UserType])],
  providers: [{
    provide: 'userRoleTypes_Service',
    useClass: UserRoleServiceService
  }],
})
export class UserRoleTypesModule {}
