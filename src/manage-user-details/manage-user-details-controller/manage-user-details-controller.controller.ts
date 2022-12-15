import { Body, Controller, Get, Inject, NotFoundException, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ManageUserDetailsServiceService } from '../manage-user-details-service/manage-user-details-service.service';

@Controller('manage-user-details-controller')
export class ManageUserDetailsControllerController {

    constructor(@Inject('manageUserDetails_Service') private readonly manageUserDetailsService:ManageUserDetailsServiceService) {}
    
    // get all User Deatils
    @Get('/get')
    async getUserDetails() {
    return await this.manageUserDetailsService.findManageUserDetails();
    }

    // get by id
    @Get('/get/:id')
    async getIdManageUserDetails(@Param('Id',ParseIntPipe) Id:number){
        const userDetails = await this.manageUserDetailsService.getManageUserDetailsById(Id);
        if(userDetails) return userDetails;
        else throw new NotFoundException();
    }

    // update 
    @Put('/update/:id')
    updateManageUserDetails(@Param('id') Id: string, @Body() body) {
        return this.manageUserDetailsService.updateManageUserDetails(parseInt(Id), body);
    }

}
