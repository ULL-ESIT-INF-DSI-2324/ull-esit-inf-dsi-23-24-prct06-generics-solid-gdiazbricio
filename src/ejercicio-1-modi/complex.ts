import { Arithmeticable } from "./arithmeticable";

/**
 * Class consisting on complex values, implements the arithmeticable interface.
 */
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
