export class BillNotFoundException extends Error {
  constructor() {
    super('Bill does not exist in database.');
  }
}
