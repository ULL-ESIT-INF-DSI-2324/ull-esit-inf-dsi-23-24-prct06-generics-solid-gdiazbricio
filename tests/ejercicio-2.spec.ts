import 'mocha'
import { expect } from 'chai'
import { Bill } from '../src/ejercicio-2/bill'
import { BillCollection } from '../src/ejercicio-2/billCollection'
import { BillInHTML } from '../src/ejercicio-2/billInHTML'
import { BillInPDF } from '../src/ejercicio-2/billInPDF' 


const myFirstBill = new Bill("Suso Santana", "Movistar", "17/02/23", 2301.92, ["Iphone 12 - 126GB", "AirBook Pro"]);
const mySecondBill = new Bill("Alvaro Jimenez", "PcComponentes", "29/07/22", 532.21, ["Pc Sobremesa (Intel Core i5, 8GB RAM DDR4, Nvidia GTX 1050...)"]);
const myCollection = new BillCollection([myFirstBill]);
const myBillInHTML = new BillInHTML(myFirstBill);
const myBillInPDF = new BillInPDF(myFirstBill);

describe('exercise 2 tests', () => {
  it ('billCollection must add bills to the collection', () => {
    myCollection.addBill(mySecondBill);
    expect(myCollection.bills).to.be.deep.equal([myFirstBill, mySecondBill]);
  });

  it ('billCollection must returns the number of bills in the collection', () => {
    expect(myCollection.getNumberOfBills()).to.be.equal(2);
  });

  it ('billinHTML must print bills in HTML format', () => {
    expect(myBillInHTML.print()).to.be.equal("<h1>FACTURA</h1> <p><strong>Cliente:</strong> Suso Santana</p><p><strong>Proveedor:</strong> Movistar</p><p><strong>Fecha:</strong> 17/02/23</p><p><strong>\nProductos:</strong> Iphone 12 - 126GB, AirBook Pro</p><p><strong>\nPrecio total:</strong> 2301.92</p>");
  });

  it ('billinHTML must set bill to given bill', () => {
    myBillInHTML.setBill(mySecondBill);
    expect(myBillInHTML.print()).to.be.deep.equal("<h1>FACTURA</h1> <p><strong>Cliente:</strong> Alvaro Jimenez</p><p><strong>Proveedor:</strong> PcComponentes</p><p><strong>Fecha:</strong> 29/07/22</p><p><strong>\nProductos:</strong> Pc Sobremesa (Intel Core i5, 8GB RAM DDR4, Nvidia GTX 1050...)</p><p><strong>\nPrecio total:</strong> 532.21</p>");
  });

  it ('billinPDF must print bills in PDF format', () => {
    expect(myBillInPDF.print()).to.be.equal("FACTURA\nCliente: Suso Santana\nProveedor: Movistar\nFecha: 17/02/23\nProductos: Iphone 12 - 126GB, AirBook Pro\nPrecio total: 2301.92");
  });


  it ('billinPDF must set bill to given bill', () => {
    myBillInPDF.setBill(mySecondBill);
    expect(myBillInPDF.print()).to.be.equal("FACTURA\nCliente: Alvaro Jimenez\nProveedor: PcComponentes\nFecha: 29/07/22\nProductos: Pc Sobremesa (Intel Core i5, 8GB RAM DDR4, Nvidia GTX 1050...)\nPrecio total: 532.21");
  });
  
});