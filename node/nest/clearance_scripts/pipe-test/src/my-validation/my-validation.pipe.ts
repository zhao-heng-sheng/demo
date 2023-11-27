import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
@Injectable()
export class MyValidationPipe implements PipeTransform {
  @Optional()
  @Inject('validation_options')
  private options: any;
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(this.options);

    if (!metatype) return value;
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    console.log(errors);
    if (errors.length > 0) throw new BadRequestException('参数验证失败');
    return value;
  }
}
