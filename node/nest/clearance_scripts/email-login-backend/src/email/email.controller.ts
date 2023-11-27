import { Controller, Query,Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Get('code')
  async sendEmailCode(@Query('address') address){
    await this.emailService.sendMail({
      to:address,
      subject:'登录验证码',
      html:`<h3>您的验证码是${Math.floor(Math.random()*1000000)}</h3>`
    })
    return '发送成功'
  }

}
