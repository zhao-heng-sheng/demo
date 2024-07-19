import * as Minio from 'minio'
import dotenv  from 'dotenv'
import {createWriteStream} from 'fs'
dotenv.config()
console.log(process.env)
let minioClient = new Minio.Client({
  endPoint: process.env.endPoint,
  port: parseInt(process.env.port),
  useSSL: false,
  accessKey: process.env.accessKey,
  secretKey: process.env.secretKey
})
function get (){
  minioClient.getObject('zhaohs', 'test.png', function(err,stream) {
    if (err) return console.log(err)
      stream.pipe(createWriteStream('./zxcv.png'))
    console.log('File downloaded successfully.')
  })
}
get()