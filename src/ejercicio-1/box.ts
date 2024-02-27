import { FindByNameInBox } from "./findByNameInBox";
import { PrintBox } from "./printBox";
import { Moving } from "./moving";
import { FindInMoving } from "./findInMoving";
import { PrintMoving } from "./printMoving";

export interface Element {
  name: string,
  size: number
}

export interface BoxInterface<T extends Element> {
  identifier: number,
  maxCappacity: number,
  getElements(): T[],
  getElementsNumber(): number,
  addElement(element: T): void,
  deleteObject(element: T): void
}

export class Box<T extends Element> implements BoxInterface<T>{
  constructor(protected elements: T[], public readonly identifier: number, public readonly maxCappacity: number){
    this.occupancy = this.elements.reduce((acc, element) => {
      return acc + element.size;
    }, 0);
    if (this.occupancy > this.maxCappacity) console.log("!Los elementos que estás intentando introducir no caben en la caja!");
  }
  private occupancy:number = 0;

  getElements(): T[] {
    return this.elements;
  }

  getElementsNumber(): number {
    return this.elements.length;
  }
  
  addElement(element: T): void {
    (element.size + this.occupancy <= this.maxCappacity) ? this.elements.push(element) : console.log(`${element.name} no cabe dentro de esta caja.`);
  }

  deleteObject(element: T): void {
    this.elements = this.elements.filter((listElement) => {
      return element.name !== listElement.name;
    })
  }
}


const myBox1 = new Box([{name: "objeto 1", size: 7, description: "es un objeto que meto primero"}, {name: "objeto 2", size: 1}], 1,  10);
const myBox2 = new Box([{name: "objeto 4", size: 5}, {name: "objeto 5", size: 7}], 2, 20);

const myMoving = new Moving([myBox1, myBox2]);

const myFinderInMoving = new FindInMoving(myMoving, "objeto 4");

const myPrinter = new PrintMoving(myMoving);

myPrinter.print();
