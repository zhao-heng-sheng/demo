import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { md5 } from '../utils';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class UserService {
  private logger = new Logger('UserService');
  @InjectRepository(User)
  private userRepository: Repository<User>;
  @Inject(RedisService)
  private redisService: RedisService;
  async register(user: RegisterUserDto) {
    const captcha = await this.redisService.get(`captcha_${user.email}`);
    if (!captcha)
      throw new HttpException('验证码已过期', HttpStatus.BAD_REQUEST);
    if (user.captcha !== captcha)
      throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST);
    const foundUser = await this.userRepository.findOneBy({
      username: user.username,
    });
    if (foundUser)
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);
    newUser.email = user.email;
    newUser.nick_name = user.nickName;
    try {
      await this.userRepository.save(newUser);
      return '注册成功';
    } catch (e) {
      this.logger.error(e);
      return '注册失败';
    }
  }
}
