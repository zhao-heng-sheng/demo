import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowsingHistoryModule } from './browsing_history/browsing_history.module';

@Module({
  imports: [BrowsingHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
