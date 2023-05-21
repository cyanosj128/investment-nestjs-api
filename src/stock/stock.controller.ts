import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from 'src/stock/stock.entity';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Get()
  findAll(): Promise<Stock[]> {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Stock> {
    return this.stockService.findOne(id);
  }

  @Post()
  create(@Body() stock: Stock) {
    return this.stockService.create(stock);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.stockService.remove(id);
  }
}
