import { Bill, PrintableBill } from "./bill";

/**
 * Represents a printable bill in PDF format.
 */
export class BillInPDF implements PrintableBill {
  /**
   * Creates an instance of BillInPDF.
   * @param bill - The bill to be printed in PDF format.
   */
  constructor(private bill: Bill) {}

  /**
   * Sets a new bill.
   * @param newBill - The new bill to set.
   */
  setBill(newBill: Bill): void {
    this.bill = newBill;
  }

  /**
   * Prints the bill in PDF format.
   * @returns A string representing the bill in PDF format.
   */
  print(): string {
    return `FACTURA\nCliente: ${this.bill.client}\nProveedor: ${this.bill.provider}\nFecha: ${this.bill.date}\nProductos: ${this.bill.elements.join(", ")}\nPrecio total: ${this.bill.price}`;
  }
}

