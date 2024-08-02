import { Global, Module } from '@nestjs/common';
import * as Minio from 'minio';
import { ConfigService } from '@nestjs/config';
export const MINIO_CLIENT = 'MINIO_CLIENT';
@Global()
@Module(
  {
  providers: [
    {
      provide: MINIO_CLIENT,
      async useFactory(configService: ConfigService) {
        console.log(configService,'123')
        console.log(process.env)
        const client = new Minio.Client({
          endPoint: process.env.endPoint,
          port: parseInt(process.env.port),
          useSSL: false,
          accessKey: process.env.accessKey,
          secretKey: process.env.secretKey,
        });
        return client;
      },
    },
  ],
  exports: [MINIO_CLIENT],
})
export class MinioModule {}
