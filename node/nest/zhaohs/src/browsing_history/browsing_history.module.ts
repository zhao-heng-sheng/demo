import { Module } from '@nestjs/common';
import { BrowsingHistoryService } from './browsing_history.service';
import { BrowsingHistoryController } from './browsing_history.controller';

@Module({
  controllers: [BrowsingHistoryController],
  providers: [BrowsingHistoryService],
})
export class BrowsingHistoryModule {}
