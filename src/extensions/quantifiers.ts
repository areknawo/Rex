/**
 * @module QuantifiersExtension
 */
import { FuncExpr } from '../operation'
import { Method } from '../rexer'
import { Matcher } from '../matcher'

interface Quantifier extends Matcher {
  /**
   * Makes quantifiers match as little characters as possible.
   */
  lazy(): Matcher
  minimum: Quantifier['lazy']
}
export interface QuantifiersExtension {
  /**
   * Matches 1 or more of preceding tokens.
   */
  more(): Quantifier
  plus: QuantifiersExtension['more']
  /**
   * Matches 0 or more of preceding tokens.
   */
  moreOrNot(): Quantifier
  star: QuantifiersExtension['moreOrNot']
  /**
   * Makes preceding token optional.
   */
  optional(): Matcher
  unnecessary: QuantifiersExtension['optional']
  additional: QuantifiersExtension['optional']

  /**
   * Matches the expression before or QuantifiersExtension currently provided.
   * @param expr - - as string of characters or expression body ( function ).
   */
  or(expr: string | FuncExpr<Matcher>): Matcher
  alternative: QuantifiersExtension['or']
  /**
   * Matches more of preceding tokens within given limits.
   * @param lowerLimit - Lowest number of tokens to match.
   * @param upperLimit - Highest number of tokens to match.
   */
  withLimits(lowerLimit: number, upperLimit: number): Quantifier
  quantify: QuantifiersExtension['withLimits']
}
/**
 * RegEx quantifiers methods ReX.js extension.
 */
export const QuantifiersExtension: Method<Matcher>[] = [
  {
    name: ['or', 'alternative'],
    func(expr: string | FuncExpr<Matcher>) {
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
    func(lowerLimit: number, upperLimit: number) {
      this.add(`{${lowerLimit},${upperLimit}}`)

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
