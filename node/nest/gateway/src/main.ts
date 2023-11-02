import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter,NestFastifyApplication} from '@nestjs/platform-fastify'
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  // 接口版本化管理
  app.enableVersioning({
    type:VersioningType.URI,
    defaultVersion:'1'
  })
  await app.listen(3000);
}
bootstrap();
