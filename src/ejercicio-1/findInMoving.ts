import { Moving } from "./moving";
import { Element } from "./box";
import { FindByNameInBox } from "./findByNameInBox";

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

