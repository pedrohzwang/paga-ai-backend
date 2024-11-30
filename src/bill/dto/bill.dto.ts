export class BillDTO {
  id: string;

  description: string;

  value: string;

  dueDate: Date;

  paid: boolean;

  active: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
