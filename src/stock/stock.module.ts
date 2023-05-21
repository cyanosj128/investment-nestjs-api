import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { Stock } from 'src/stock/stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stock])],
  exports: [TypeOrmModule],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
