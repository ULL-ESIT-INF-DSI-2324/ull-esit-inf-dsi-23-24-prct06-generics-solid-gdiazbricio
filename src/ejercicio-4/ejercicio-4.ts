/**
 * Interface for printable objects.
 */
interface Printable {
  /**
   * Prints the object.
   */
  print(): void;
}

/**
 * Interface for scannable objects.
 */
interface Scannable {
  /**
   * Scans the object.
   */
  scan(): void;
}

/**
 * Represents a printer.
 */
export class Printer implements Printable {
  /**
   * Prints using the printer.
   */
  print(): void {
    console.log('Printing...');
  }
}

/**
 * Represents a scanner.
 */
export class Scanner implements Scannable {
  /**
   * Scans using the scanner.
   */
  scan(): void {
    console.log('Scanning...');
  }
}

/**
 * Represents a device that can print and scan.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Prints using the device.
   */
  print(): void {
    console.log('Printing...');
  }

  /**
   * Scans using the device.
   */
  scan(): void {
    console.log('Scanning...');
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();



// El código no cumplía con el principio de interface segregation, por lo que se dividió la interfaz PrintableScanable por dos 
// interfaces, de manera que cada clase implemente la que le interesa.