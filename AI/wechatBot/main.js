import { WechatyBuilder } from "wechaty";

let bot =WechatyBuilder.build(
  {
    name: "mybot",
    puppet: "wechaty-puppet-wechat",

  }
)


bot.on("scan", (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on("login", (user) => console.log(`User ${user} logined`))
    .on("message", (message) => console.log(`Message: ${message}`))
    .start();