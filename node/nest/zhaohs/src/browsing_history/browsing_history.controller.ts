import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrowsingHistoryService } from './browsing_history.service';
import { CreateBrowsingHistoryDto } from './dto/create-browsing_history.dto';
import { UpdateBrowsingHistoryDto } from './dto/update-browsing_history.dto';

@Controller('browsing-history')
export class BrowsingHistoryController {
  constructor(private readonly browsingHistoryService: BrowsingHistoryService) {}

  @Post()
  create(@Body() createBrowsingHistoryDto: CreateBrowsingHistoryDto) {
    return this.browsingHistoryService.create(createBrowsingHistoryDto);
  }

  @Get()
  findAll() {
    return this.browsingHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.browsingHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrowsingHistoryDto: UpdateBrowsingHistoryDto) {
    return this.browsingHistoryService.update(+id, updateBrowsingHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.browsingHistoryService.remove(+id);
  }
}
