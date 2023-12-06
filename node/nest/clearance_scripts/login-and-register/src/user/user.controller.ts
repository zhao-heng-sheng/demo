import { Controller, Get, Post, Body, Patch, Param, Delete, Inject,Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Inject(JwtService)
  private jwtService:JwtService
  @Post('login')
  async login(@Body() user:LoginDto,@Res({passthrough:true})res:Response){
    console.log(user);
    const foundUser = await this.userService.login(user)
    if(foundUser){
      const token = await this.jwtService.signAsync({
        user:{
          id:foundUser.id,
          username:foundUser.username
        }
      })
      res.setHeader('token',token)
      return 'login success'
    } 
    return 'login failed'
  }
  @Post('register')
  async register(@Body() user:RegisterDto){
    console.log(user);
    return await this.userService.register(user)
  }

}
