/**
 * Interface for defining printable bills.
 */
export interface PrintableBill {
  /**
   * Sets a new bill.
   * @param newBill - The new bill to set.
   */
  setBill(newBill: Bill): void;
  /**
   * Prints the bill.
   * @returns A string representing the printed bill.
   */
  print(): string;
}

/**
 * Represents a bill with client information, provider information, date, price, and elements.
 */
export class Bill {
  /**
   * Creates an instance of Bill.
   * @param client - The client's name.
   * @param provider - The provider's name.
   * @param date - The date of the bill.
   * @param price - The total price of the bill.
   * @param elements - The elements included in the bill.
   */
  constructor(
    public readonly client: string,
    public readonly provider: string,
    public readonly date: string,
    public readonly price: number,
    public readonly elements: string[]
  ) {}
}

