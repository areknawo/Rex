/**
 * @module CharactersExtension
 */
import { Method, ReXer } from '../rexer'
import { FuncExpr } from '../operation'

export interface CharactersExtension {
  /**
   * Matches any character except line breaks and special unicodes.
   */
  anyButBreak(): this
  /**
   * Matches any character except line breaks and special unicodes.
   */
  any(): this
  /**
   * Matches any whitespace character - spaces, tabs, line breaks.
   */
  anyWhitespace(): this
  /**
   * Matches any whitespace character - spaces, tabs, line breaks.
   */
  whitespace(): this
  /**
   * Matches any digit.
   */
  digit(): this
  /**
   * Matches any word character - upper & lower case letters, numbers and underscores.
   */
  wordChar(): this
  /**
   * Matches any word character - upper & lower case letters, numbers and underscores.
   */
  char(): this
  /**
   * Matches set of chararacters of same type between desired limits.
   * @param start - Range starting character.
   * @param end - Range ending character of same type e.g. 1,5 or a,f
   * @param more - Pass more ranges in form of two arguments pairs.
   */
  range<T extends string | number>(start: T, end: T, ...more: (string | number)[]): this
  /**
   * Matches set of characters.
   * @param set - String of characters to be included in set.
   */
  set(set: string | FuncExpr<this>): this
}

/**
 * RegEx character matching methods ReX.js extension.
 */
export const CharactersExtension: Method<ReXer>[] = [
  {
    name: 'set',
    func(set: string | FuncExpr<ReXer>) {
      let expr
      if (typeof set === 'string') {
        expr = set.replace(/\\|]|-/g, '\\$&')
      } else {
        expr = set
      }
      this.add({
        expr,
        closure: {
          close: ']',
          open: '[',
        },
        negate() {
          this.setClosure({
            close: ']',
            open: '[^',
          })
        },
      })

      return this
    },
  },
  {
    name: 'range',
    func(start: string | number, end: string | number, ...more: (string | number)[]) {
      let expr = `${start}-${end}`
      const length = more ? more.length : 0
      if (length > 0 && length % 2 === 0) {
        for (let i = 0; i < length; i += 2) {
          expr += `${more[i]}-${more[i + 1]}`
        }
      } else if (length % 2 !== 0) {
        console.warn('Invalid range - omitted!')
      }
      this.add({
        expr,
        closure: {
          close: ']',
          open: '[',
        },
        negate() {
          this.setClosure({
            close: ']',
            open: '[^',
          })
        },
      })

      return this
    },
  },
  {
    name: ['any', 'anyButBreak'],
    func() {
      this.add('.')

      return this
    },
  },
  {
    name: ['char', 'wordChar'],
    func() {
      this.add({
        expr: '\\w',
        negate() {
          this.setExpr('\\W')
        },
      })

      return this
    },
  },
  {
    name: 'digit',
    func() {
      this.add({
        expr: '\\d',
        negate() {
          this.setExpr('\\D')
        },
      })

      return this
    },
  },
  {
    name: ['whitespace', 'anyWhitespace'],
    func() {
      this.add({
        expr: '\\s',
        negate() {
          this.setExpr('\\S')
        },
      })

      return this
    },
  },
]
