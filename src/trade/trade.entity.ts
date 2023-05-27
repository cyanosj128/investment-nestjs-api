import { Currency } from 'src/currency/currency.entity';
import { Stock } from 'src/stock/stock.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Trade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  stockId: number;

  @Column()
  cost: number;

  @Column()
  quantity: number;

  @Column()
  tradeAt: string;

  @Column({ select: false })
  currencyId: number;

  @ManyToOne(() => Stock, (stock) => stock.trades)
  stock: Stock;

  @OneToOne(() => Currency)
  @JoinColumn()
  currency: Currency;
}
