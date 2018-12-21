/**
 * @module QuantifiersExtension
 */
import { FuncExpr } from '../operation'
import { Method, ReXer } from '../rexer'

export interface QuantifiersExtension {
  /**
   * Matches 1 or more of preceding tokens.
   */
  more(): this
  /**
   * Matches 1 or more of preceding tokens.
   */
  plus(): this
  /**
   * Matches 0 or more of preceding tokens.
   */
  moreOrNot(): this
  /**
   * Matches 0 or more of preceding tokens.
   */
  star(): this
  /**
   * Makes quantifiers match as little characters as possible.
   */
  lazy(): this
  /**
   * Makes quantifiers match as little characters as possible.
   */
  minimum(): this
  /**
   * Makes preceding token optional.
   */
  optional(): this
  /**
   * Makes preceding token optional.
   */
  unnecessary(): this
  /**
   * Makes preceding token optional.
   */
  additional(): this
  /**
   * Matches the expression before or QuantifiersExtension currently provided.
   * @param expr - - as string of characters or expression body ( function ).
   */
  or(expr: string | FuncExpr<this>): this
  /**
   * Matches the expression before or QuantifiersExtension currently provided.
   * @param expr - - as string of characters or expression body ( function ).
   */
  alternative(expr: string | FuncExpr<this>): this
  /**
   * Matches more of preceding tokens within given limits.
   * @param lowerLimit - Lowest number of tokens to match.
   * @param upperLimit - Highest number of tokens to match.
   */
  withLimits(lowerLimit: number, upperLimit: number): this
  /**
   * Matches more of preceding tokens within given limits or for specific number.
   * @param lowerLimit - Lowest or specific number of tokens to match.
   * @param upperLimit - Highest number of tokens to match - optional for creating range.
   */
  quantify(lowerLimit: number, upperLimit?: number): this
}
/**
 * RegEx quantifiers methods ReX.js extension.
 */
export const QuantifiersExtension: Method<ReXer>[] = [
  {
    name: ['or', 'alternative'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add('|')
      this.add({
        expr,
      })

      return this
    },
  },
  {
    name: ['lazy', 'minimum'],
    func() {
      this.add('?')

      return this
    },
  },
  {
    name: ['optional', 'unnecessary', 'additional'],
    func() {
      this.add('?')

      return this
    },
  },
  {
    name: ['withLimits', 'quantify'],
    func(lowerLimit: number, upperLimit?: number) {
      if (upperLimit) {
        this.add(`{${lowerLimit},${upperLimit}}`)
      } else {
        this.add(`{${lowerLimit}}`)
      }

      return this
    },
  },
  {
    name: ['moreOrNot', 'star'],
    func() {
      this.add('*')

      return this
    },
  },
  {
    name: ['more', 'plus'],
    func() {
      this.add('+')

      return this
    },
  },
]
