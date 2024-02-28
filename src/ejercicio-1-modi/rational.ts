import { Arithmeticable } from "./arithmeticable";

/**
 * Class consisting on Rational numbers, implements arithmeticable interface.
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(public readonly num1: number, public readonly num2: number) {}

  /**
   * Add two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  add(arithmetic: Rational): Rational {
    const commonDenom = mcm(this.num1, arithmetic.num2);
    const thisNewNum = (this.num1 * commonDenom) / this.num2;
    const arithmeticNewNum = (arithmetic.num1 * commonDenom) / arithmetic.num2;
    const numSum = thisNewNum + arithmeticNewNum; // Sumar los numeradores.
    const mcdcalc = mcd(new Rational(numSum, commonDenom)); // Reducir la fracción.
    return new Rational(numSum / mcdcalc, commonDenom / mcdcalc);
  }

  /**
   * Substract two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  substract(arithmetic: Rational): Rational {
    const commonDenom = mcm(this.num1, arithmetic.num2);
    const thisNewNum = (this.num1 * commonDenom) / this.num2;
    const arithmeticNewNum = (arithmetic.num1 * commonDenom) / arithmetic.num2;
    const numSub = thisNewNum - arithmeticNewNum; // Sumar los numeradores.
    const mcdcalc = mcd(new Rational(numSub, commonDenom)); // Reducir la fracción.
    return new Rational(numSub / mcdcalc, commonDenom / mcdcalc);
  }

  /**
   * Multiplies two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  multiply(arithmetic: Rational): Rational {
    const newNum = this.num1 * arithmetic.num1; // Calcular la multiplicación de los numeradores.
    const newDenom = this.num1 * arithmetic.num2; // Calcular la multiplicación de los denominadores.
    const mcdcalc = mcd(new Rational(newNum, newDenom)); // Reducir la fracción
    return new Rational (newNum / mcdcalc, newDenom / mcdcalc);
  }

    /**
   * Divides two rational numebers
   * @param arithmetic consists on the second opperand
   * @returns a new rational with the result
   */
  divide(arithmetic: Rational): Rational {
    const newNum = this.num1 * arithmetic.num2; // Multiplicamos en diagonal.
    const newDenom = this.num1 * arithmetic.num2;
    const mcdcalc = mcd(new Rational(newNum, newDenom));
    return new Rational (newNum / mcdcalc, newDenom / mcdcalc);
  }
}

/**
 * Calculates the mcd of a Rational number.
 * @param rationalNum consists on the rational number.
 * @returns a number resulting of the mcd.
 */
function mcd(rationalNum: Rational): number {
  let newNum = rationalNum.num1;
  let newDenom = rationalNum.num2;
  while (newDenom !== 0) {
    const temp = newDenom;
    newDenom = newNum % newDenom;
    newNum = temp;
  }
  return newNum;
}

/**
 * Calculates the mcm of two numbers.
 * @param firstDenom Consists of the first denominator.
 * @param secondDenom Consists of the second denominator.
 * @returns The result of the mcm.
 */
function mcm(firstDenom: number, secondDenom: number): number {
  return (firstDenom * secondDenom) / mcd(new Rational (firstDenom, secondDenom));
}