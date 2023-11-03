import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter,NestFastifyApplication} from '@nestjs/platform-fastify'
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  // 接口版本化管理
  app.enableVersioning({
    type:VersioningType.URI,
    // defaultVersion:'1'
    defaultVersion:[VERSION_NEUTRAL,'1','2']
  })
  //统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor())
  // 统一异常处理
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  // 创建文档
  generateDocument(app)
  // 添加热更新
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
