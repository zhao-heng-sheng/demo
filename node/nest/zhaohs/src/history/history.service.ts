import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  create(createHistoryDto: CreateHistoryDto) {
    return 'This action adds a new history';
  }

  findAll() {
    return `This action returns all history`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
