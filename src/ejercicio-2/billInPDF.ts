import { Bill, PrintableBill } from "./bill"

export class BillInPDF implements PrintableBill {
  constructor(private bill: Bill){}

  setBill(newBill: Bill): void {
    this.bill = newBill;
  }

  print(): string {
    return `FACTURA\nCliente: ${this.bill.client}\nProveedor: ${this.bill.provider}\nFecha: ${this.bill.date}\nProductos: ${this.bill.elements.join(", ")}\nPrecio total: ${this.bill.price}`
  }
}