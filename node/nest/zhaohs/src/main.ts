import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  //swagger
  const config = new DocumentBuilder()
    .setTitle('zhaohs swagger')
    .setDescription('swagger文档')
    .setVersion('1.0')
    .addTag('xxx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }))
  await app.listen(3000);
  log('http://localhost:3000');
}
bootstrap();
