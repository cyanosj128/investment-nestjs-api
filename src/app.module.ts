import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from 'config';
import { Stock } from './stock/stock.entity';
import { Trade } from './trade/trade.entity';
import { StockModule } from './stock/stock.module';
import { TradeModule } from './trade/trade.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      type: 'mysql',
      entities: [Stock, Trade],
      synchronize: false, // false가 안전함
    }),
    StockModule,
    TradeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
