import { Module } from '@nestjs/common';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trade } from './trade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trade])],
  exports: [TypeOrmModule],
  controllers: [TradeController],
  providers: [TradeService],
})
export class TradeModule {}
