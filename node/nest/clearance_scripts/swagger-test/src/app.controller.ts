import { Controller, Get, Query, Param, Post, Body,HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation,ApiQuery,ApiResponse} from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: '测试 aaa', description: 'aaa 描述' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'aaa 成功',
    type: String,
  })
  @ApiQuery({
    name:'a1',
    type:String,
    description:'a1 描述',
    required:false,
    example:'1111'
  })
  @ApiQuery({
    name: 'a2',
    type: Number,
    description: 'a2 param',
    required: true,
    example: 2222,
})  
  @Get('aaa')
  aaa(@Query('a1') a1, @Query('a2') a2) {
    console.log(a1, a2);
    return 'aaa success';
  }

  @Get('bbb/:id')
  bbb(@Param('id') id) {
    console.log(id);
    return 'bbb success';
  }

  @Post('ccc')
  ccc(@Body('ccc') ccc) {
    console.log(ccc);
    return 'ccc success';
  }
}
