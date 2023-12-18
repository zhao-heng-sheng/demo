import { Test, TestingModule } from '@nestjs/testing';
import { BrowsingHistoryService } from './browsing_history.service';

describe('BrowsingHistoryService', () => {
  let service: BrowsingHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrowsingHistoryService],
    }).compile();

    service = module.get<BrowsingHistoryService>(BrowsingHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
