import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BillEntity } from './entities/bill.entity';
import { BillNotFoundException } from './exception/BillNotFoundException';

@Injectable()
export class BillService {
  constructor(
    @Inject('BILL_REPOSITORY')
    private billRepository: Repository<BillEntity>
  ) {}

  async create(createDto: BillEntity): Promise<BillEntity> {
    return await this.billRepository.create(createDto);
  }

  async findAll(): Promise<Array<BillEntity>> {
    return await this.billRepository.find();
  }

  async findOne(id: string): Promise<BillEntity> {
    return await this.billRepository.findOne({ where: { id } });
  }

  async setInactive(id: string): Promise<void> {
    const bill = await this.findOne(id);
    if (!bill) throw new BillNotFoundException();
    const updatedBill: BillEntity = { ...bill, active: false };
    await this.billRepository.update(
      {
        id
      },
      updatedBill
    );
  }

  async update(id: string, updateDto: BillEntity): Promise<void> {
    if (!this.billRepository.existsBy({ id }))
      throw new BillNotFoundException();
    await this.billRepository.update({ id }, updateDto);
  }
}
