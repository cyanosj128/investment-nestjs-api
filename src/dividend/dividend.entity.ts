import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Stock } from 'src/stock/stock.entity';

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

  @OneToOne(() => Stock)
  @JoinColumn()
  stock: Stock;
}
