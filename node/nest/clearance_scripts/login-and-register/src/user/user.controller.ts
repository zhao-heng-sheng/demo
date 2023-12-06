import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() user:LoginDto){
    console.log(user);
    const foundUser = await this.userService.login(user)
    if(foundUser) return 'login success'
    return 'login failed'
  }
  @Post('register')
  async register(@Body() user:RegisterDto){
    console.log(user);
    return await this.userService.register(user)
  }

}
