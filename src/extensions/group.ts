/**
 * @module GroupExtension
 */
import { FuncExpr } from '../operation'
import { Method } from '../rexer'
import { Matcher } from '../matcher'

export interface GroupExtension {
  /**
   * Sets name of preceding expression.
   * @param name -  Name for the previously applied expression.
   */
  as(name: string): Matcher
  /**
   * Captures multiple characters together.
   * Negate creates group of characters but doesn't capture them.
   * @param expr - Set's body as string of characters or expression body ( function ).
   */
  capture(expr: string | FuncExpr<Matcher>): Matcher
  group: GroupExtension['capture']

  /**
   * Matches result of previous group.
   * @param name - Name of expression to be referenced. Previously set by 'as()' method.
   */
  ref(name: string): Matcher
  reference: GroupExtension['ref']
}
/**
 * RegEx grouping-related methods ReX.js extension.
 */
export const GroupExtension: Method<Matcher>[] = [
  {
    name: ['capture', 'group'],
    func(expr: string | FuncExpr<Matcher>) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(',
        },
        negate() {
          this.setClosure({
            close: ')',
            open: '(?:',
          })
        },
      })

      return this
    },
  },
  {
    name: ['ref', 'reference'],
    func(name: string) {
      this.add(`\\k<${name}>`)

      return this
    },
  },
  {
    name: 'as',
    func(name: string) {
      const { open, close } = this.lastOperation
        ? this.lastOperation.closure
        : { open: '', close: '' }
      if (this.lastOperation && open === '(' && close === ')') {
        this.lastOperation.setClosure({
          open: `(?<${name}>`,
        })
      } else {
        if (this.lastOperation) {
          this.lastOperation.setClosure({
            open: `(?<${name}>${open}`,
            close: `${close})`,
          })
        } else {
          console.warn('No operation to be referenced - omitted!')
        }
      }

      return this
    },
  },
]
