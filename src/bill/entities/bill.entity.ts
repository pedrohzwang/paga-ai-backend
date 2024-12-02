import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'bill' })
export class BillEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ nullable: false, length: 255 })
  description: string;

  @Column({ nullable: false, type: 'decimal' })
  value: number;

  @Column({ nullable: false, default: new Date() })
  dueDate: Date;

  @Column({ nullable: false, default: false })
  paid: boolean;

  @Column({ nullable: false, default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
