import { Box, Element } from "./box";

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

