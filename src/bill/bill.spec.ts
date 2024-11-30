import { Test, TestingModule } from '@nestjs/testing';
import { Bill } from './bill.provider';

describe('Bill', () => {
  let provider: Bill;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bill],
    }).compile();

    provider = module.get<Bill>(Bill);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
