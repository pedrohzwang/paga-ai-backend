import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BillEntity } from './entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @Inject('BILL_REPOSITORY')
    private billRepository: Repository<BillEntity>
  ) {}

  listAll(): Array<string> {
    return ['bill1', 'bill2'];
  }

  listOne(id: string): string {
    return `bill ${id}`;
  }

  delete(id: string): void {
    console.log(id);
    return;
  }
}
