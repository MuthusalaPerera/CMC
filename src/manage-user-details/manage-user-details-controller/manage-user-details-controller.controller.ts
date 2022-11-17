import { Controller, Get, Inject } from '@nestjs/common';
import { ManageUserDetailsServiceService } from '../manage-user-details-service/manage-user-details-service.service';

@Controller('manage-user-details-controller')
export class ManageUserDetailsControllerController {

    constructor(@Inject('manageUserDetails_Service') private readonly manageUserDetailsService:ManageUserDetailsServiceService) {}
    
    // get all User Deatils
    @Get('/get')
    async getUserDetails() {
    return await this.manageUserDetailsService.findManageUserDetails();
    }

}
