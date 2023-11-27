import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { AaaPipe } from './aaa.pipe';
import { Ooo } from './dto/ooo.dto';
import { MyValidationPipe } from './my-validation/my-validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aa')
  aa(@Query('aa', ParseFloatPipe) aa: number) {
    return aa + 1;
  }
  @Get('bb')
  bb(@Query('bb', ParseBoolPipe) bb: boolean) {
    console.log(bb);

    return bb;
  }
  @Get('cc')
  cc(
    @Query(
      'cc',
      new ParseArrayPipe({
        // 指定数组中的元素类型为Number
        items: Number,
        // 指定分隔符
        separator: ',',
        // 如果查询参数不存在，也不会抛出异常
        optional: true,
      }),
    )
    cc: number[],
  ) {
    console.log(cc);

    return cc.reduce((total, item) => total + item, 0);
  }
  @Get('dd/:uuid')
  dd(@Param('uuid',new ParseUUIDPipe({})) uuid:string){
    return uuid
  }
  @Get('ee')
  ee(@Query('ee',new DefaultValuePipe('xxx')) ee:string){
    return ee
  }
  @Get('ff/:f2')
  ff(@Query('ff',AaaPipe) ff:string,@Param('f2',AaaPipe) f2:string){
    console.log(ff,f2);

    return ff+f2
  }


  @Post('ooo')
  @UsePipes(new ValidationPipe({transform:true}))
  ooo(@Body() obj:Ooo){
    console.log(obj);

    return obj
  }

  @Post('qqq')
  qqq(@Body() obj:Ooo){
    console.log(obj);

    return obj
  }

  @Get('getHello')
  getHello(
    @Query(
      'aa',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException('自定义错误', HttpStatus.NOT_FOUND);
        },
      }),
    )
    aa: string,
  ): string {
    console.log(aa);

    return aa + 1;
  }
}
