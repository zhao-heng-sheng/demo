import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //swagger
  const config = new DocumentBuilder()
    .setTitle('zhaohs swagger')
    .setDescription('swagger文档')
    .setVersion('1.0')
    .addTag('xxx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  log('http://localhost:3000');
}
bootstrap();
