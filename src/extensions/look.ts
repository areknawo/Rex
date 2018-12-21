/**
 * @module LookAroundExtension
 */
import { FuncExpr } from '../operation'
import { Method, ReXer } from '../rexer'

/**
 */
export interface LookAroundExtension {
  /**
   * Matches group after last expression without including it in the result.
   * @param body - Lookahead body as string of characters or expression body ( function ).
   */
  follow(expr: string | FuncExpr<this>): this
  /**
   * Matches group after last expression without including it in the result.
   * @param body - Lookahead body as string of characters or expression body ( function ).
   */
  after(expr: string | FuncExpr<this>): this
  /**
   * Matches group before last expression without including it in the result.
   * @param expr - Lookbehind body as string of characters or expression body ( function )
   */
  precede(expr: string | FuncExpr<this>): this
  /**
   * Matches group before last expression without including it in the result.
   * @param expr - Lookbehind body as string of characters or expression body ( function )
   */
  before(expr: string | FuncExpr<this>): this
}

/**
 * RegEx look around methods ReX.js extension.
 */
export const LookAroundExtension: Method<ReXer>[] = [
  {
    name: ['follow', 'after'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(?=',
        },
        negate() {
          this.setClosure({ open: '(?!' })
        },
      })

      return this
    },
  },
  {
    name: ['precede', 'before'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(?<=',
        },
        negate() {
          this.setClosure({ open: '(?<!' })
        },
      })

      return this
    },
  },
]
