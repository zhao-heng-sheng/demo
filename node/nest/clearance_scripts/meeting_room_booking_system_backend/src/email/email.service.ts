import { Injectable } from '@nestjs/common';
import { createTransport, Transporter} from 'nodemailer';
@Injectable()
export class EmailService {
    transporter:Transporter
    constructor(){
        this.transporter = createTransport({
            host: 'smtp.qq.com',
            port:587,
            secure:false,
            auth:{
                user:'',
                pass:''
            },
        })
    }
}
