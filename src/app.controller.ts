import {Controller, Get, Headers, Post, UploadedFile, UseInterceptors} from "@nestjs/common"
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express"
import {diskStorage} from "multer"
import {exit} from "@nestjs/cli/actions"
import fs = require('fs');
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
    @Post('/file')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination:'./Uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = file.originalname;
                    console.log(process.env.Filepath )
                    const filename = `${uniqueSuffix}-${ext}`;
                    console.log(__dirname+filename)
                    callback(null, filename);
                },
            }),
        }),
    )
    handleUpload(@UploadedFile() file: Express.Multer.File,@Headers() header) {
        console.log('file', file);
        console.log(file.path);
        console.log(header.servicecall);
        this.appService.saveFile(file.path,file.filename,header.servicecall)
        const text = fs.readFileSync(file.path, 'utf8');
        // console.log(text);
        return 'File upload API';
    }
}
