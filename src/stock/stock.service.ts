import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Stock } from 'src/stock/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  findAll(): Promise<Stock[]> {
    return this.stockRepository.find({
      relations: [
        'trades',
        'trades.currency',
        'dividends',
        'dividends.currency',
      ],
    });
  }

  findOne(id: number): Promise<Stock> {
    return this.stockRepository.findOne({
      relations: ['trades'],
      where: { id: id },
    });
  }

  async create(stock: Stock): Promise<Stock> {
    return this.stockRepository.save(stock);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.stockRepository.delete(id);
  }
}
