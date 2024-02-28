import 'mocha'
import { expect } from 'chai';
import { Printer, Scanner, PrinterScanner } from '../src/ejercicio-4/ejercicio-4';

describe("exercise 4 tests", () => {
  let consoleOutput: string[] = [];

  beforeEach(() => {
    // Redirigir console.log a un buffer temporal
    consoleOutput = [];
    console.log = (message: string) => {
      consoleOutput.push(message);
    };
  });

  // afterEach(() => {
  //   // Restaurar console.log
  //   console.log = console.log;
  // });

  it("should print using Printer", () => {
    const printer = new Printer();
    printer.print();
    expect(consoleOutput).to.include("Printing...");
  });

  it("should scan using Scanner", () => {
    const scanner = new Scanner();
    scanner.scan();
    expect(consoleOutput).to.include("Scanning...");
  });

  it("should print and scan using PrinterScanner", () => {
    const printerScanner = new PrinterScanner();
    printerScanner.print();
    printerScanner.scan();
    expect(consoleOutput).to.include("Printing...");
    expect(consoleOutput).to.include("Scanning...");
  });
});

