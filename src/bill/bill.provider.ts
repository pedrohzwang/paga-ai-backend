import { DataSource } from 'typeorm';
import { BillEntity } from './entities/bill.entity';

export const billProviders = [
  {
    provide: 'BILL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BillEntity),
    inject: ['DATA_SOURCE']
  }
];
