import { Injectable } from '@nestjs/common';

@Injectable()
export class BillService {
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
