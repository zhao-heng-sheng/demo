import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService]
})
export class DddModule implements OnModuleInit,OnApplicationBootstrap {
  onModuleInit() {
    console.log(' DddModule Module initialized');
  }
  onApplicationBootstrap() {
    console.log('DddModule Module Application bootstrapped');
  }
}
