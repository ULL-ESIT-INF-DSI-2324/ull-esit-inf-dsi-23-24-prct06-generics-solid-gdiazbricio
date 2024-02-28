import { Bill } from "./bill";

/**
 * Represents a collection of bills.
 */
export class BillCollection {
  /**
   * Creates an instance of BillCollection.
   * @param bills - An array of Bill instances representing the bills collection.
   */
  constructor(public readonly bills: Bill[]) {}

  /**
   * Adds a new bill to the collection.
   * @param newBill - The new bill to add.
   */
  addBill(newBill: Bill): void {
    this.bills.push(newBill);
  }

  /**
   * Retrieves the number of bills in the collection.
   * @returns The number of bills in the collection.
   */
  getNumberOfBills(): number {
    return this.bills.length;
  }
}

