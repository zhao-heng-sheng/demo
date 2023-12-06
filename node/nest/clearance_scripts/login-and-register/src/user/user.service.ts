import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import * as crypto from 'crypto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRespository: Repository<User>;
  private logger = new Logger()
  async register(user: RegisterDto) {
    const foundUser = await this.userRespository.findOneBy({
      username: user.username,
    });
    if (foundUser) {
      throw new HttpException('用户已存在', 200);
    }

    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);
    try {
      await this.userRespository.save(newUser);
      return '注册成功'
    } catch (error) {
      this.logger.error(error,UserService)
      return '注册失败'
    }

  }
  async login(user:LoginDto){
    
  }
}

function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}
