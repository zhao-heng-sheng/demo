import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import { RedisService } from '../redis/redis.service';
import { Inject } from '@nestjs/common/decorators';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Inject(RedisService)
  private redisService: RedisService

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto){
    const {email,code} = loginUserDto
    const codeInRedis = await this.redisService.get(`captcha_${email}`)
    if(!codeInRedis){
      throw new UnauthorizedException('验证码已失效')
    }
    if(code !== codeInRedis){
      throw new UnauthorizedException('验证码错误')
    }
    const user = await this.userService.findOneByEmail(email)
    console.log(user)
    return 'success'

  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
