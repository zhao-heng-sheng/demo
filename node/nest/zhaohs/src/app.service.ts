import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let a = 2;
    return 'Hello World!';
  }
}
