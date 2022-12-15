import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm"
import UserType from "./IntialDB/UserRolls"
import {Column, OneToMany, Repository} from "typeorm"
import {User} from "./users/user.entity"
import Login from "./IntialDB/Login"
import {MailerService} from "@nestjs-modules/mailer"
import {File} from "./ServiceCallOther/File";
import {ServiceCall} from "./service-calls/service-call.entity";


@Injectable()
export class AppService {
      @InjectRepository(File) private readonly fileRepository:Repository<File>
      @InjectRepository(ServiceCall) private readonly serviceCallRepository:Repository<ServiceCall>

  getHello(): string {
    return 'Hello World!';
  }
  getFile(name:string):string{

    return 'success'
  }

  saveFile(path:string,name:string,type:string,serviceCallId:number){
      const serviceCallDBthis=this.serviceCallRepository.findOne({ServiceCallId:serviceCallId});
      if(serviceCallDBthis)
      {
          const serviceCall=this.serviceCallRepository.create({ServiceCallId:serviceCallId})
          this.fileRepository.save({Path:path,Name:name,mimeType:type,serviceCall:serviceCall})
      }

  }

    async getFileById(fileId: number) {
        const file = await this.fileRepository.findOne(fileId);

        return file;
    }


}


