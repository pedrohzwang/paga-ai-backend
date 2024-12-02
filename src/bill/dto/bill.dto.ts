export class BillDTO {
  id: string;

  description: string;

  value: number;

  dueDate: Date;

  paid: boolean;

  active: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
