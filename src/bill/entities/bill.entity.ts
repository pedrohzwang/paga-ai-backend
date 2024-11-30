import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class BillEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ nullable: false, length: 255 })
  description: string;

  @Column({ nullable: false, precision: 2 })
  value: string;

  @Column({ nullable: false, default: new Date() })
  dueDate: Date;

  @Column({ nullable: false, default: false })
  paid: boolean;

  @Column({ nullable: false, default: true })
  active: boolean;
}
