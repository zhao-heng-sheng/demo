import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {MINIO_CLIENT} from './minio/minio.module'
import * as Minio from 'minio';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Inject(MINIO_CLIENT)
  private readonly minioClient: Minio.Client;

  @Get('test')
  async test(){
    try{
      let res = await this.minioClient.fPutObject('test','xxx.json','./package.json')
      console.log(res);
      return res;
    }catch(e){
      console.log(e);
      return e;
    }
  }

  @Get('presignedUrl')
  async presignedUrl(@Query('name') name:string){
    return this.minioClient.presignedPutObject('test',name,3600)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
