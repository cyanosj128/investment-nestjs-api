import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from 'config';
import { Stock } from './stock/stock.entity';
import { Trade } from './trade/trade.entity';
import { StockModule } from './stock/stock.module';
import { TradeModule } from './trade/trade.module';
import { CurrencyModule } from './currency/currency.module';
import { Currency } from './currency/currency.entity';
import { DividendModule } from './dividend/dividend.module';
import { Dividend } from './dividend/dividend.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      type: 'mysql',
      entities: [Stock, Trade, Currency, Dividend],
      synchronize: false, // false가 안전함
    }),
    StockModule,
    TradeModule,
    CurrencyModule,
    DividendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
