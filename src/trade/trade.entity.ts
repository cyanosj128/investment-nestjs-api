import { Stock } from 'src/stock/stock.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Trade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stockId: number;

  @Column()
  cost: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Stock, (stock) => stock.trades)
  stock: Stock;
}
