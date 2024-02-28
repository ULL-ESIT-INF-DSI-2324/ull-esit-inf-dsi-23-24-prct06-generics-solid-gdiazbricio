import { Bill, PrintableBill } from "./bill";

/**
 * Represents a printable bill in HTML format.
 */
export class BillInHTML implements PrintableBill {
  /**
   * Creates an instance of BillInHTML.
   * @param bill - The bill to be printed in HTML format.
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
   * Prints the bill in HTML format.
   * @returns A string representing the bill in HTML format.
   */
  print(): string {
    return `<h1>FACTURA</h1> <p><strong>Cliente:</strong> ${this.bill.client}</p><p><strong>Proveedor:</strong> ${this.bill.provider}</p><p><strong>Fecha:</strong> ${this.bill.date}</p><p><strong>\nProductos:</strong> ${this.bill.elements.join(", ")}</p><p><strong>\nPrecio total:</strong> ${this.bill.price}</p>`;
  }
}

