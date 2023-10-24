import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('swagger')
    .setDescription('xxx')
    .setVersion('1.1')
    .addTag('test123')
    .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
