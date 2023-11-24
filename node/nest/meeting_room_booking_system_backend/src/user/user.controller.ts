import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import {RegisterUserDto} from './dto/register-user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  register(@Body() registerUser:RegisterUserDto){
    console.log(registerUser);
    return 'success'
  }

}
