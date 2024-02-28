import { Arithmeticable } from "./arithmeticable";

/**
 * Class that stores arithmeticable elements.
 */
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
