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
}

