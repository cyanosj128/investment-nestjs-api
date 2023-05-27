import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Stock } from 'src/stock/stock.entity';
import { Currency } from 'src/currency/currency.entity';

@Entity()
export class Dividend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  stockId: number;

  @Column()
  amount: string;

  @Column()
  dividendAt: string;

  @Column({ select: false })
  currencyId: number;

  @OneToOne(() => Stock)
  @JoinColumn()
  stock: Stock;

  @OneToOne(() => Currency)
  @JoinColumn()
  currency: Currency;
}
