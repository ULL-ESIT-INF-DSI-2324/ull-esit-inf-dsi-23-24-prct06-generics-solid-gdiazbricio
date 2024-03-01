# Cubrimiento de código:
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio?branch=main)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)
### INFORME: https://ull-esit-inf-dsi-2324.github.io/ull-esit-inf-dsi-23-24-prct06-generics-solid-gdiazbricio/
# PRÁCTICA 6: OBJETOS, CLASES E INTERFACES GENÉRICAS.
### Guillermo Díaz Bricio - Desarrollo de Sistemas Informáticos, 3º Grado en Ingeniería Informática
## Contenidos:
  * [Contenidos.](#contenidos)
  * [Resumen.](#resumen)
  * [Objetivos.](#objetivos)
  * [Ejercicios propuestos en el guión:](#ejercicios-propuestos-en-el-guión)
    * [Ejercicio 1.](#ejercicio-1)
    * [Ejercicio 2.](#ejercicio-2)
    * [Ejercicio 3.](#ejercicio-3)
    * [Ejercicio 4.](#ejercicio-4)
    * [Ejercicio 5.](#ejercicio-5)
  * [Ejercicios propuestos en el aula:](#ejericicios-propuestos-en-el-aula)
    * [Ejercicio 1.](#ejercicio-1-modificación)
  * [Conclusiones.](#conclusiones)
  * [Bibliografía.](#bibliografía)

## Resumen:
En esta práctica se han realizado un total de 6 ejercicios de lógica de programación, con el fin de continuar trabajando con Objetos, Clases e Interfaces, y mecanismos de la Programación Orientada a Objetos como la herencia y clases abstractas, ampliando con la introducción de clases e interfaces genéricas, además de trabajar siguiendo los principios SOLID.

## Objetivos:
Los objetivos son:
1. Manejar adecuadamente objetos.
1. Diseñar clases e interfaces genéricas.
1. Crear relaciones entre clases genéricas mediante herencia.
1. Aplicar principios SOLID. 
1. Diseño de un código consistente y bien formateado (mediante el uso de herramintas como ESLint y Prettier).
1. Desarrollo integrado mediante pruebas, utilizando Mocha y Chai.
1. Creación de documentación automátizada mediante TypeDoc.
1. Cubrimiento de código mediante nyc y coveralls.

## Ejercicios propuestos en el guión:
### Ejercicio 1:
En este ejercicio se requería diseñar e implementar un conjunto de clases e interfaces genércias necesarias para representar una mudanza, donde los elementos a transportar, se almacenan en cajas, y deben poder hacerse búsquedas, por ejemplo, por su nombre.

En primer lugar, se define la interfaz `Element`, que define la forma mínima que debe tener un objeto almacenado por una caja:
```typescript
/**
 * Represents an element with a name and size.
 */
export interface Element {
  /**
   * The name of the element.
   */
  name: string;
  /**
   * The size of the element.
   */
  size: number;
}
```

Vemos que, como es necesario que se pueda buscar mediante nombre, todos los elementos que almacenenemos en la caja, deberán tener un `name`, además, deberán tener asociado el tamaño `size` que ocupan.

Se define también la interfaz genérica `BoxInterface` cuyo argumento de tipo `T` extiende a la forma de `Element`, esto quiere decir, que `BoxInterface` trabajará con elementos de la forma `Element`, es decir que, como mínimo, tengan definidos un `name` y un `size`:
``` typescript
/**
 * Interface for defining a box that can contain elements.
 * @template T - The type of elements that the box can contain, must extend Element interface.
 */
export interface BoxInterface<T extends Element> {
  /**
   * The identifier of the box.
   */
  identifier: number;
  /**
   * The maximum capacity of the box.
   */
  maxCappacity: number;
  /**
   * Retrieves all elements currently in the box.
   * @returns An array of elements in the box.
   */
  getElements(): T[];
  /**
   * Retrieves the number of elements currently in the box.
   * @returns The number of elements in the box.
   */
  getElementsNumber(): number;
  /**
   * Adds an element to the box if there is enough space.
   * @param element - The element to add to the box.
   */
  addElement(element: T): void;
  /**
   * Deletes an element from the box if it exists.
   * @param element - The element to delete from the box.
   */
  deleteObject(element: T): void;
}
```
Vemos que se define un campo `identifier`, que identificará a cada caja, un campo `maxCappacity` que almacena el tamaño máximo que puede almacenar la caja, y los métodos `getElements()`, `getElementsNumber`, `addElement` y `deleteObject`.

Lo siguiente a comentar es la clase `Box`, que implementa a `BoxInterface`:
```typescript
/**
 * Represents a box that can contain elements.
 * @template T - The type of elements that the box can contain, must extend Element interface.
 */
export class Box<T extends Element> implements BoxInterface<T> {
  /**
   * The elements currently in the box.
   */
  constructor(
    protected elements: T[],
    /**
     * The identifier of the box.
     */
    public readonly identifier: number,
    /**
     * The maximum capacity of the box.
     */
    public readonly maxCappacity: number
  ) {
    this.occupancy = this.elements.reduce((acc, element) => {
      return acc + element.size;
    }, 0);
  }
  /**
   * The total size occupied by the elements in the box.
   */
  private occupancy: number = 0;

  /**
   * Retrieves all elements currently in the box.
   * @returns An array of elements in the box.
   */
  getElements(): T[] {
    return this.elements;
  }

  /**
   * Retrieves the number of elements currently in the box.
   * @returns The number of elements in the box.
   */
  getElementsNumber(): number {
    return this.elements.length;
  }

  /**
   * Adds an element to the box if there is enough space.
   * @param element - The element to add to the box.
   */
  addElement(element: T): void {
    element.size + this.occupancy <= this.maxCappacity
      ? this.elements.push(element)
      : console.log(`${element.name} cannot fit inside this box.`);
  }

  /**
   * Deletes an element from the box if it exists.
   * @param element - The element to delete from the box.
   */
  deleteObject(element: T): void {
    this.elements = this.elements.filter((listElement) => {
      return element.name !== listElement.name;
    });
  }
```

Donde lo más interesante a destacar son los métodos `addElement()` y `deleteObject()`, que sirven para añadir un elemento a una caja y para eliminar un elemento de una caja. En el caso de `addElement()`, simplemente comprueba que el objeto a introducir cabe en la caja, y si lo hace lo introduce. Mientras que el método `deleteObject`, utiliza el método `filter` para reasignar el array a uno nuevo, pero sin el elemento a eliminar.

Ahora, continuando con las operaciones sobre `Box`, se han definido las clases `FindByNameInBox` y `PrintBox`, utilizando una estrategia similar al patrón de diseño `srategy`:

```typescript
import { Box, Element } from "./box";

/**
 * Utility class for finding elements by name in a Box.
 * @template T - The type of elements contained in the Box, must extend Element interface.
 */
export class FindByNameInBox<T extends Element> {
  /**
   * Creates an instance of FindByNameInBox.
   * @param box - The Box instance to search in.
   * @param name - The name of the element to find.
   */
  constructor(
    private box: Box<T>,
    /**
     * The name of the element to find.
     */
    public readonly name: string
  ) {}

  /**
   * Sets a new Box instance to search in.
   * @param newBox - The new Box instance.
   */
  setBox(newBox: Box<T>): void {
    this.box = newBox;
  }

  /**
   * Finds an element with the specified name in the Box.
   * @returns True if the element is found, otherwise false.
   */
  find(): boolean {
    const found = this.box.getElements().find((element) => {
      return element.name === this.name;
    });
    return found === undefined ? false : true;
  }
}
```
Recibe una `Box<T>` y un `name` y se define el método `find()` que devolverá true si el elemento a buscar se encuentra dentro de la caja. Se implementa también un `setter` que nos permite cambiar la caja en la que estamos buscando en tiempo de ejecución.

Veamos también la clase `PrintBox`:
```typescript
import { Box, Element } from "./box";

/**
 * Utility class for printing the contents of a Box.
 * @template T - The type of elements contained in the Box, must extend Element interface.
 */
export class PrintBox<T extends Element> {
  /**
   * Creates an instance of PrintBox.
   * @param box - The Box instance to print.
   */
  constructor(private box: Box<T>) {}

  /**
   * Sets a new Box instance to print.
   * @param newBox - The new Box instance.
   */
  setBox(newBox: Box<T>): void {
    this.box = newBox;
  }

  /**
   * Prints the contents of the Box.
   * @returns A string representing the contents of the Box.
   */
  print(): string {
    let resultingString = "";
    this.box.getElements().forEach((element) => {
      resultingString += `- ${element.name} \n`;
    });
    return resultingString;
  }
}
```
Cuya implementación es muy similar a la de la clase comentada anteriormente, la decisión acerca de separar estas funcionalidades en clases diferentes se hizo en base al principio de Single Responsability, y al principio Open-Closed, de manera que cada clase se encargue de un único propósito, y si en el futuro queremos añadir una funcionalidad para buscar por tamaño, lo único que tendríamos que hacer es crear una clase nueva, y no modificar la ya existente.

Por último, se implementó la clase `Moving` que representaría una colección de cajas:

```typescript
/**
 * Represents a collection of boxes for moving elements.
 * @template T - The type of elements that the boxes can contain, must extend Element interface.
 */
export class Moving<T extends Element> {
  /**
   * Creates an instance of Moving.
   * @param boxes - An array of Box instances representing the boxes for moving.
   */
  constructor(private boxes: Box<T>[]) {}

  /**
   * Retrieves all boxes for moving.
   * @returns An array of Box instances.
   */
  getBoxes(): Box<T>[] {
    return this.boxes;
  }

  /**
   * Retrieves the number of boxes.
   * @returns The number of boxes.
   */
  numberOfBoxes(): number {
    return this.boxes.length;
  }

  /**
   * Adds a box to the collection.
   * @param box - The Box instance to add.
   */
  addBox(box: Box<T>): void {
    this.boxes.push(box);
  }

  /**
   * Deletes a box from the collection by its identifier.
   * @param identifier - The identifier of the box to delete.
   */
  deleteBox(identifier: number): void {
    this.boxes = this.boxes.filter((element) => {
      return identifier !== element.identifier;
    });
  }
}
```

Su diseño es muy parecido al de la clase `Box`, pero ésta almacena cajas, en vez de elementos.

Siguiendo también con la estrategia explicada anteriormente, se implementan operaciones con la clase `Moving` en clases separadas, son en este caso la clase `PrintMoving`:
```typescript
/**
 * Utility class for printing the contents of a Moving instance.
 * @template T - The type of elements contained in the Moving instance, must extend Element interface.
 */
export class PrintMoving<T extends Element> {
  /**
   * Creates an instance of PrintMoving.
   * @param moving - The Moving instance to print.
   */
  constructor(private moving: Moving<T>) {}

  /**
   * Prints the contents of the Moving instance.
   * @returns A string representing the contents of the Moving instance.
   */
  print(): string {
    const printer = new PrintBox(this.moving.getBoxes()[0]);
    let resultingString = "";
    this.moving.getBoxes().forEach((box) => {
      printer.setBox(box);
      resultingString +=
        `La caja ${box.identifier} contiene: \n` + printer.print();
    });
    return resultingString;
  }
}
```

Y la clase `FindInMoving`:
```typescript
/**
 * Utility class for finding elements in a Moving instance.
 * @template T - The type of elements contained in the Moving instance, must extend Element interface.
 */
export class FindInMoving<T extends Element> {
  /**
   * Creates an instance of FindInMoving.
   * @param moving - The Moving instance to search in.
   * @param name - The name of the element to find.
   */
  constructor(
    private moving: Moving<T>,
    /**
     * The name of the element to find.
     */
    public readonly name: string
  ) {}

  /**
   * Finds the specified element in the Moving instance.
   * @returns A string indicating the box where the element is found, or an empty string if not found.
   */
  find(): string {
    const finder = new FindByNameInBox(this.moving.getBoxes()[0], this.name);
    let resultingString: string = "";
    this.moving.getBoxes().forEach((box) => {
      finder.setBox(box);
      if (finder.find())
        resultingString = `${this.name} se encuentra en la caja ${box.identifier}`;
    });
    return resultingString;
  }
}

```
### Ejercicio 2:
Se debía diseñar e implementar un conjunto de clases e interfaces necesarias para la creación de facturas y su exportación a diferentes formatos.

Para ello se definió, en primer lugar, la clase `Bill`, que almacenaría los campos que debe tener la factura:
```typescript
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
```

Lo siguiente fue la definición de la interfaz `PrintableBill`, que definiría la forma que debe tener cada formato de exportación de las facturas:

```typescript
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
```
Vemos que se define el método `print()`, que será el encargado de imprimir las facturas.

Hecho esto, se crearon dos clases que implementan la interfaz mencionada anteriormente, `BillInHTML`:

```typescript
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
```
Y `BillInPDF`:
```typescript
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
```
De manera que, de nuevo, volvemos a tener clases que cumplen un único propósito, y si ademas queremos añadir otra manera de exportar la factura, deberíamos crear una clase que implemente la interfaz `PrintableBill`, en vez de modificar la clase `Bill`, siguiendo así los principios Single Responsability y Open-Closed.

Por último, se implementa la clase `BillCollection`, que servirá como contenedor para almacenar varias facturas y poder realizar operaciones con ellas.

```typescript
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
```

### Ejercicio 3:
El código proporcionado por el ejercicio 3 no cumplía el principio de Single Responsability, al implementar la operación de lectura y escritura del fichero en una misma clase, es por ello que se realizaron los siguientes cambios:
```typescript
export class FileReader {
  /**
   * Reads the content of a file.
   * @param filePath - The path of the file to read.
   * @returns The content of the file as a string.
   */
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error("Error reading the file:", error.message);
      return "";
    }
  }
}

export class FileWriter {
  /**
   * Writes data to a file.
   * @param filePath - The path of the file to write.
   * @param data - The data to write to the file.
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("File written successfully.");
    } catch (error) {
      console.error("Error writing to the file:", error.message);
    }
  }
}

export class FileManager {
  /**
   * Creates an instance of FileManager.
   * @param fileReader - The FileReader instance to use for reading files.
   * @param fileWriter - The FileWriter instance to use for writing files.
   * @param filePath - The path of the file to manage.
   */
  constructor(
    private fileReader: FileReader,
    private fileWriter: FileWriter,
    private filePath: string
  ) {}

  /**
   * Reads the content of the managed file.
   * @returns The content of the file as a string.
   */
  public readFile(): string {
    return this.fileReader.readFile(this.filePath);
  }

  /**
   * Writes data to the managed file.
   * @param data - The data to write to the file.
   */
  public writeFile(data: string): void {
    this.fileWriter.writeFile(this.filePath, data);
  }
}
```

Se crearon las clases `FileReader` y `FileWriter`, de manera que cada una de ellas implemente la funcionalidad de lectura o escritura según corresponda, y de manera única. Se actualizó la clase `FileManager` para que utilizara las clases anteriores para realizar las operaciones.

### Ejercicio 4:
En cuanto al código del ejercicio 4, vemos como claramente se está incumpliendo el principio de Interface Segregation, que indica que las interfaces deben ser lo más simple posible, de manera que implementen el menor número de métodos posibles. En este caso, vemos como la interfaz `PrintableScannable` implementaba el método `print()` y el método `scan()`, es por ello que luego en la clase `Printer` y `Scaner`, que implementaban dicha interfaz, era necesario definir los dos métodos y dejar uno vacío. La estrategia seguida fue:
```typescript
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
```
En primer lugar se eliminó la interfaz `PrintableScannable`, y se crearon `Printable` que define únicamente el método `print()` y `Scannable` que define `scan()`, de manera que ahora la clase `Printer` implementa la interfaz `Printable` y la clase `Scaner` implementa `Scannable`.

### Ejercicio 5:
El código no cumplía con el principio open-closed, porque en el caso de que quisieramos añadir un nuevo tipo de notificación se tendría que modificar los tipos de `notificationService` dentro de la clase `Notify`, de manera que lo que se hizo fue crear una interfaz `NotificationService`, que define el método `notify()`, de manera que `notificationService` sea de tipo `NotificationService` y cuando queramos añadir nuevos tipos de
notificaciones, simplementa haya que crear una nueva clase que implemente la interfaz.
```typescript
interface NotificationService {
  /**
   * Sends a notification with the given message.
   * @param message - The message of the notification.
   */
  notify(message: string): void;
}

/**
 * Class that allows notifications to be sent by email.
 */
export class EmailService implements NotificationService {
  /**
   * Sends a notification by email.
   * @param message - The message of the notification.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Class that allows notifications to be sent by SMS.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Sends a notification by SMS.
   * @param message - The message of the notification.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Class that uses different types of notification services to send notifications.
 */
export class Notifier {
  /**
   * Creates an instance of Notifier.
   * @param notificationService - The notification service to use.
   */
  constructor(private notificationService: NotificationService) {
  }

  /**
   * Sends a notification using the configured notification service.
   * @param message - The message of the notification.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```

### Ejercicio 1 Modificación:
Se pedía crear una interfaz genérica `Arithmeticable` que definiera métodos para realizar operaciones aritméticas sobre un tipo de datos genérico:
```typescript
export interface Arithmeticable<T> {
  add(arithmetic: T): T;
  substract(arithmetic: T): T;
  multiply(arithmetic: T): T;
  divide(arithmetic: T): T;
}
```

Se debía crear también las clases `Complex` y `Rational` que implementaran la interfaz `Arithmeticable` y representaban números complejos y racionales:
```typescript
export class Complex implements Arithmeticable<Complex> {
  constructor(
    public readonly num1: number,
    public readonly num2: number
  ) {}

  /**
   * Add two complex numebers
   * @param arithmetic consists on the second opperand
   * @returns a new complex with the result
   */
  add(arithmetic: Complex): Complex {
    return new Complex(
      this.num1 + arithmetic.num1,
      this.num2 + arithmetic.num2
    );
  }

  /**
   * Substract two complex numebers
   * @param arithmetic consists on the second opperand
   * @returns a new complex with the result
   */
  substract(arithmetic: Complex): Complex {
    return new Complex(
      this.num1 - arithmetic.num1,
      this.num2 - arithmetic.num2
    );
  }

  /**
   * Multiplies two complex numebers
   * @param arithmetic consists on the second opperand
   * @returns a new complex with the result
   */
  multiply(arithmetic: Complex): Complex {
    return new Complex(
      this.num1 * arithmetic.num1 - this.num2 * arithmetic.num2,
      this.num1 * arithmetic.num2 + this.num2 * arithmetic.num1
    );
  }

  /**
   * Divides two complex numebers
   * @param arithmetic consists on the second opperand
   * @returns a new complex with the result
   */
  divide(arithmetic: Complex): Complex {
    const numerator = this.multiply(
      new Complex(arithmetic.num1, -arithmetic.num2)
    );
    const denom = Math.pow(arithmetic.num1, 2) + Math.pow(arithmetic.num2, 2);
    return new Complex(numerator.num1 / denom, numerator.num2 / denom);
  }
}
```

```typescript
export class Rational implements Arithmeticable<Rational> {
  constructor(
    public readonly num1: number,
    public readonly num2: number
  ) {}

  /**
   * Add two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  add(arithmetic: Rational): Rational {
    const commonDenom = mcm(this.num1, arithmetic.num2);
    const thisNewNum = (this.num1 * commonDenom) / this.num2;
    const arithmeticNewNum = (arithmetic.num1 * commonDenom) / arithmetic.num2;
    const numSum = thisNewNum + arithmeticNewNum; // Sumar los numeradores.
    const mcdcalc = mcd(new Rational(numSum, commonDenom)); // Reducir la fracción.
    return new Rational(numSum / mcdcalc, commonDenom / mcdcalc);
  }

  /**
   * Substract two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  substract(arithmetic: Rational): Rational {
    const commonDenom = mcm(this.num1, arithmetic.num2);
    const thisNewNum = (this.num1 * commonDenom) / this.num2;
    const arithmeticNewNum = (arithmetic.num1 * commonDenom) / arithmetic.num2;
    const numSub = thisNewNum - arithmeticNewNum; // Sumar los numeradores.
    const mcdcalc = mcd(new Rational(numSub, commonDenom)); // Reducir la fracción.
    return new Rational(numSub / mcdcalc, commonDenom / mcdcalc);
  }

  /**
   * Multiplies two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  multiply(arithmetic: Rational): Rational {
    const newNum = this.num1 * arithmetic.num1; // Calcular la multiplicación de los numeradores.
    const newDenom = this.num1 * arithmetic.num2; // Calcular la multiplicación de los denominadores.
    const mcdcalc = mcd(new Rational(newNum, newDenom)); // Reducir la fracción
    return new Rational(newNum / mcdcalc, newDenom / mcdcalc);
  }

  /**
   * Divides two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  divide(arithmetic: Rational): Rational {
    const newNum = this.num1 * arithmetic.num2; // Multiplicamos en diagonal.
    const newDenom = this.num1 * arithmetic.num2;
    const mcdcalc = mcd(new Rational(newNum, newDenom));
    return new Rational(newNum / mcdcalc, newDenom / mcdcalc);
  }
}
```

Por último, se debía definir también una colección de números que tuvieran la forma `Arithmeticable`:
```typescript
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  constructor(public readonly elements: T[]) {}

  /**
   * Pushes a new arithmeticable element to the collection.
   * @param newArtithmeticable consists on the element to add.
   */
  addArithmeticable(newArtithmeticable: T): void {
    this.elements.push(newArtithmeticable);
  }

  /**
   * Access to an element in the given position
   * @param index the position to be checked.
   * @returns the element in the position or undefined if not in range.
   */
  getArithmeticable(index: number): T | undefined {
    return this.elements.at(index);
  }

  /**
   * Gives the number of elements inside the collection.
   * @returns the number of elements.
   */
  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
```

## Conclusiones:
La realización de la práctica proporcionó un conocimiento más profundo acerca de Objetos, Clases e interfaces genéricas, así como la consolidación de conceptos acerca de los principios SOLID y sus aplicaciones, y, aunque todavía muy por encima, sobre patrones de diseño. Además de seguir mejorando la lógica de programación, no solamente aplicada a TypeScript si no a cualquier lenguaje y a continuar prosperando con elementos como el desarrollo basado en pruebas, la generación de documentación automática y el cubrimiento de código.

## Bibliografía
* [Documentación sobre objetos de Mozzilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects).
* [Documentación sobre clases de Mozzilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
* [Documentación de JavaScript de Mozzilla](https://developer.mozilla.org/es/docs/Web/JavaScript).
* [Documentación de Mocha](https://mochajs.org/).
* [Documentación de Chai](https://www.chaijs.com/).
* [Documentación de TypeDoc](https://typedoc.org/).
* [Web de Coveralls](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj3tsPGj9OEAxWVT6QEHcycA4AQFnoECAcQAQ&url=https%3A%2F%2Fcoveralls.io%2F&usg=AOvVaw2PjKrDGWUgtP9bnQyMWMrr&opi=89978449).
