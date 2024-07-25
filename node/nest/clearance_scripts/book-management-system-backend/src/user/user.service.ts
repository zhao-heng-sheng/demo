import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @Inject(DbService)
  private dbService: DbService;
  async register(registerUserDto:RegisterUserDto){
    console.log(User)
    const users:User[] = await this.dbService.read()
    const foundUser = users.find(item=>item.username===registerUserDto.username)
    if(foundUser){
      throw new BadRequestException("用户名已存在")
    }
    const user = new User();
    user.username = registerUserDto.username;
    user.password = registerUserDto.password;
    users.push(user)
    await this.dbService.write(users)
    return user;
  }
}
