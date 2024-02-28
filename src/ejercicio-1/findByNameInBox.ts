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

