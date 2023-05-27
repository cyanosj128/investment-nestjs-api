import { Controller, Get } from '@nestjs/common';
import { DividendService } from './dividend.service';
import { Dividend } from './dividend.entity';

@Controller('dividend')
export class DividendController {
  constructor(private dividendService: DividendService) {}

  @Get()
  findAll(): Promise<Dividend[]> {
    return this.dividendService.findAll();
  }
}
