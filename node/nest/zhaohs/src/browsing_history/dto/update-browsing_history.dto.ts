import { PartialType } from '@nestjs/swagger';
import { CreateBrowsingHistoryDto } from './create-browsing_history.dto';

export class UpdateBrowsingHistoryDto extends PartialType(CreateBrowsingHistoryDto) {}
