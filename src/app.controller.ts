import {
    Controller,
    Get,
    Headers,
    Param,
    ParseIntPipe,
    Post,
    UploadedFile,
    UseInterceptors,
    Res,
    StreamableFile
} from "@nestjs/common"
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express"
import {diskStorage} from "multer"
import {exit} from "@nestjs/cli/actions"
import fs = require('fs');
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';
import path = require('path')

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
                destination:path.join(__dirname, '..', './Uploads'),
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = file.originalname;
                    console.log(process.env.Filepath )
                    const filename = `${uniqueSuffix}-${ext}`;
                    console.log(__dirname+'..'+filename)
                    callback(null, filename);
                },
            }),
        }),
    )
    handleUpload(@UploadedFile() file: Express.Multer.File,@Headers() header) {
        console.log('file', file);
        console.log(file.path);
        console.log(header.servicecall);
        this.appService.saveFile(file.path,file.filename,file.mimetype,header.servicecall)
        const text = fs.readFileSync(file.path, 'utf8');
        // console.log(text);
        return 'File upload API';
    }

    @Get(':id')
    async getDatabaseFileById(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) response: Response) {
        const file = await this.appService.getFileById(id);

        const stream = createReadStream(join(process.cwd(), file.Path));

        response.set({
            'Content-Disposition': `inline; filename="${file.Name}"`,
            'Content-Type': file.mimeType
        })
        return new StreamableFile(stream);
    }



}
