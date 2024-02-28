export interface Element {
  name: string;
  size: number;
}

export interface BoxInterface<T extends Element> {
  identifier: number;
  maxCappacity: number;
  getElements(): T[];
  getElementsNumber(): number;
  addElement(element: T): void;
  deleteObject(element: T): void;
}

export class Box<T extends Element> implements BoxInterface<T> {
  constructor(
    protected elements: T[],
    public readonly identifier: number,
    public readonly maxCappacity: number
  ) {
    this.occupancy = this.elements.reduce((acc, element) => {
      return acc + element.size;
    }, 0);
  }
  private occupancy: number = 0;

  getElements(): T[] {
    return this.elements;
  }

  getElementsNumber(): number {
    return this.elements.length;
  }

  addElement(element: T): void {
    element.size + this.occupancy <= this.maxCappacity
      ? this.elements.push(element)
      : console.log(`${element.name} no cabe dentro de esta caja.`);
  }

  deleteObject(element: T): void {
    this.elements = this.elements.filter((listElement) => {
      return element.name !== listElement.name;
    });
  }
}
