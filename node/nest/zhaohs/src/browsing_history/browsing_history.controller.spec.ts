import { Test, TestingModule } from '@nestjs/testing';
import { BrowsingHistoryController } from './browsing_history.controller';
import { BrowsingHistoryService } from './browsing_history.service';

describe('BrowsingHistoryController', () => {
  let controller: BrowsingHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrowsingHistoryController],
      providers: [BrowsingHistoryService],
    }).compile();

    controller = module.get<BrowsingHistoryController>(BrowsingHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
