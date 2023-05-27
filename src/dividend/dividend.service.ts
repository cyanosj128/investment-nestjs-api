import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dividend } from './dividend.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DividendService {
  constructor(
    @InjectRepository(Dividend)
    private dividendRepository: Repository<Dividend>,
  ) {}

  findAll(): Promise<Dividend[]> {
    return this.dividendRepository.find({
      relations: ['stock'],
    });
  }
}
