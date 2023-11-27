import { Controller, Query, Get, Inject } from '@nestjs/common';
import { EmailService } from './email.service';
import { RedisService } from '../redis/redis.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @Inject()
  private redisService: RedisService

  @Get('code')
  async sendEmailCode(@Query('address') address) {
    const code = Math.floor(Math.random() * 1000000)
    await this.redisService.set(`captcha_${address}`,code,5*60)
    await this.emailService.sendMail({
      to: address,
      subject: '登录验证码',
      html: `<h3>您的验证码是${code}</h3>`
    })
    return '发送成功'
  }

}
