import { Bill } from "./bill";

export class BillCollection {
  constructor(public readonly bills: Bill[]) {}

  addBill(newBill: Bill): void {
    this.bills.push(newBill);
  }

  getNumberOfBills(): number {
    return this.bills.length;
  }
}
