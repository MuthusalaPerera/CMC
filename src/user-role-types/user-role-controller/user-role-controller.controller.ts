import { Body, Controller, Delete, Get, Inject, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import UserType from 'src/IntialDB/UserRolls';
import { UserRoleServiceService } from '../user-role-service/user-role-service.service';

@Controller('user-role-controller')
export class UserRoleControllerController {

    constructor(@Inject('userRoleTypes_Service') private readonly userRoleService:UserRoleServiceService) {}

    
  // get all userRole types
  @Get('/get')
   async getUserType() {
    return await this.userRoleService.findUserType();
  }

  // get by id
  @Get('/get/:id')
  async getUserRoleType(@Param('id',ParseIntPipe) id:number){
     const userRoleType = await this.userRoleService.getUserRoleTypeById(id);
    if(userRoleType) return userRoleType;
    else throw new NotFoundException();
  }

  // get by id
  @Get('/get/role/:desc')
  async getByUserRole(@Param('desc') desc:string){
     const userRoleDesc = await this.userRoleService.getUserRoleByDesc(desc);
    if(userRoleDesc) return userRoleDesc;
    else throw new NotFoundException();
  }

  // post user role types
  @Post('/post')
  async createRoleType(@Body() body) { 
   
    return  await this.userRoleService.createUserRoleType(body)
  }

  // update user role types
  @Put('/update/:id')
  updateUserRoleType(@Param('id') id: string, @Body() body) {
    return this.userRoleService.updateUserRoleType(parseInt(id), body);
  }

  // delete user role types
  @Delete('/delete/:id')
  removeUserRole(@Param('id') id: string) {
    return this.userRoleService.remove(parseInt(id));
  }

  // update user role type Status
  @Put('/update/status/:Id/:status')
  updateUserRoleTypeStatus(@Param('Id',ParseIntPipe) Id: number, @Param('status',ParseIntPipe) status: number) {
    //console.log(desc, status);
    
    return this.userRoleService.updateUserRoleTypeStatus(Id, status);
  }

}
