import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import UserType from "./IntialDB/UserRolls"
import {Column, OneToMany, Repository} from "typeorm"
import {User} from "./users/user.entity"
import Login from "./IntialDB/Login"
import {MailerService} from "@nestjs-modules/mailer"
import {File} from "./ServiceCallOther/File";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFile(name:string):string{

    return 'success'
  }


}


