import {Controller, Get, Inject, Post, UploadedFile, UseInterceptors} from "@nestjs/common"
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express"
import {diskStorage} from "multer"
import {exit} from "@nestjs/cli/actions"
import {InjectRepository} from "@nestjs/typeorm";
import {ServiceCall} from "./service-calls/service-call.entity";
import {Repository} from "typeorm";
import {File} from "./ServiceCallOther/File";
import {ServiceCallsService} from "./service-calls/service-calls.service";

@Controller()
export class AppController {
    constructor(@Inject() private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    @Post('/file')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix =
                        Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = file.originalname;
                    const filename = `${uniqueSuffix}-${ext}`;
                    callback(null, filename);
                },
            }),
        }),
    )
    handleUpload(@UploadedFile() file: Express.Multer.File) {
        console.log('file', file);
        return 'File upload API';
    }
}
