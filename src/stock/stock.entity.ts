import { Trade } from 'src/trade/trade.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticker: string;

  @Column()
  kor: string;

  @Column()
  eng: string;

  @OneToMany(() => Trade, (trade) => trade.stock)
  trades: Trade[];
}
