import * as Minio from 'minio'
import dotenv  from 'dotenv'
dotenv.config()
console.log(process.env)
let minioClient = new Minio.Client({
  endPoint: process.env.endPoint,
  port: parseInt(process.env.port),
  useSSL: false,
  accessKey: process.env.accessKey,
  secretKey: process.env.secretKey
})
function put (){
  minioClient.fPutObject('zhaohs', 'test.png', 'test.png', function(err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
  })
}
put()