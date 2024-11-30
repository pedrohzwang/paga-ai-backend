import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BillEntity } from './entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @Inject('BILL_REPOSITORY')
    private billRepository: Repository<BillEntity>
  ) {}

  async listAll(): Promise<Array<BillEntity>> {
    return await this.billRepository.find();
  }

  async listOne(id: string): Promise<any> {
    // return await this.billRepository.findOne({ where: { id } });
    return new Promise((resolve) => null);
  }

  delete(id: string): void {
    console.log(id);
    return;
  }
}
