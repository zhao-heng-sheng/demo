import Imap from "imap"
import { MailParser } from "mailparser"
import path from "path"
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import fs from "fs"
const imap = new Imap({
    user: "263667262@qq.com",
    password: "usmxwtpwinzabgeb",
    host: "imap.qq.com",
    port: 993,
    tls: true,
})
imap.once("ready", () => {
    imap.openBox("INBOX", true, (err) => {
        imap.search([["SEEN"], ["SINCE", new Date("2023-11-26").toLocaleString()]], (err, results) => {
            if (!err) {
                console.log(results)
                handleResults(results)
            } else {
                throw err
            }
        })
    })
})
imap.connect()

function handleResults(results) {
    imap.fetch(results, {
        markSeen: false,
        bodies: "",
        struct: true,
    }).on("message", (msg) => {
        const mailparser = new MailParser()
        msg.on("body", (stream) => {
            const info = {}
            stream.pipe(mailparser)
            mailparser.on("headers", (headers) => {
                info.theme = headers.get("subject")
                info.form = headers.get("from").value[0].address
                info.mailName = headers.get("from").value[0].name
                info.to = headers.get("to").value[0].address
                info.datatime = headers.get("date").toLocaleString()
            })
            mailparser.on("data", (data) => {
                if (data.type === "attachment") {
                    const filePath = path.join(__dirname, "files", data.filename)
                    const ws = fs.createWriteStream(filePath)
                    data.content.pipe(ws)
                }
                if (data.type === "text") {
                    info.text = data.text
                    info.html = data.html
                    const filePath = path.join(__dirname, "mails", info.theme+'.html')
                    fs.writeFileSync(filePath,info.html || info.text)
                    console.log(info)
                }
            })
        })
    })
}
