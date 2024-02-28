import { Moving } from "./moving";
import { Element } from "./box";
import { PrintBox } from "./printBox";

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

