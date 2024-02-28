/**
 * Interface that defines arithmetic operations
 */

export interface Arithmeticable<T> {
  add(arithmetic: T): T,
  substract(arithmetic: T): T,
  multiply(arithmetic: T): T,
  divide(arithmetic: T): T
}