import { Bill, PrintableBill } from "./bill";

export class BillInHTML implements PrintableBill {
  constructor(private bill: Bill) {}

  setBill(newBill: Bill): void {
    this.bill = newBill;
  }

  print(): string {
    return `<h1>FACTURA</h1> <p><strong>Cliente:</strong> ${this.bill.client}</p><p><strong>Proveedor:</strong> ${this.bill.provider}</p><p><strong>Fecha:</strong> ${this.bill.date}</p><p><strong>\nProductos:</strong> ${this.bill.elements.join(", ")}</p><p><strong>\nPrecio total:</strong> ${this.bill.price}</p>`;
  }
}
