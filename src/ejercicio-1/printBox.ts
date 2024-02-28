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

