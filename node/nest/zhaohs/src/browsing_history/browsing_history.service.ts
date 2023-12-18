import { Injectable } from '@nestjs/common';
import { CreateBrowsingHistoryDto } from './dto/create-browsing_history.dto';
import { UpdateBrowsingHistoryDto } from './dto/update-browsing_history.dto';

@Injectable()
export class BrowsingHistoryService {
  create(createBrowsingHistoryDto: CreateBrowsingHistoryDto) {
    return 'This action adds a new browsingHistory';
  }

  findAll() {
    return `This action returns all browsingHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} browsingHistory`;
  }

  update(id: number, updateBrowsingHistoryDto: UpdateBrowsingHistoryDto) {
    return `This action updates a #${id} browsingHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} browsingHistory`;
  }
}
