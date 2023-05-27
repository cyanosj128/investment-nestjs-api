import { Module } from '@nestjs/common';
import { DividendController } from './dividend.controller';
import { DividendService } from './dividend.service';
import { Dividend } from './dividend.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dividend])],
  exports: [TypeOrmModule],
  controllers: [DividendController],
  providers: [DividendService],
})
export class DividendModule {}
