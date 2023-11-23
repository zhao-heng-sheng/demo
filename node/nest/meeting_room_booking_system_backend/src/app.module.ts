import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'111111',
      database:'meeting_room_booking_system',
      synchronize:true,
      logging:true,
      entities:[],
      poolSize:10,
      connectorPackage:'mysql2'
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}