import nodemailer from 'nodemailer'
import fs from 'fs'
const transporter = nodemailer.createTransport({
    host:'smtp.qq.com',
    port:587,
    secure:false,
    auth:{
        user:'263667262@qq.com',
        pass:'usmxwtpwinzabgeb'
    }
})
async function main(){
    const info = await transporter.sendMail({
        from:'"Fred Foo 👻" <263667262@qq.com>',
        to:'1787600886@qq.com',
        subject:'Hello ✔',
        text:'111',
        html:fs.readFileSync('./button.html')
    })
    console.log(console.log('发送成功'),info)
}
main().catch(console.error)