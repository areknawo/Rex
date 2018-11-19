/**
 * @module CharactersExtension
 */
import { Method } from '../rexer'
import { Matcher } from '../matcher'
import { FuncExpr } from '../operation'

export interface CharactersExtension {
  /**
   * Matches any character except line breaks.
   */
  anyButBreak(): Matcher
  any: CharactersExtension['anyButBreak']
  /**
   * Matches any whitespace character - spaces, tabs, line breaks.
   */
  anyWhitespace(): Matcher
  whitespace: CharactersExtension['anyWhitespace']
  /**
   * Matches any digit.
   */
  digit(): Matcher
  /**
   * Matches any word character - upper & lower case letters, numbers and underscores.
   */
  wordChar(): Matcher
  char: CharactersExtension['wordChar']
  /**
   * Matches set of chararacters of same type between desired limits.
   * @param start - Range starting character.
   * @param end - Range ending character of same type e.g. 1,5 or a,f
   */
  range<T extends string | number>(start: T, end: T): Matcher
  /**
   * Matches set of characters.
   * @param set - String of characters to be included in set.
   */
  set(set: string | ((rex: Matcher) => void)): Matcher
}

/**
 * RegEx character matching methods ReX.js extension.
 */
export const CharactersExtension: Method<Matcher>[] = [
  {
    name: 'set',
    func(set: string | FuncExpr<Matcher>) {
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
    func(start: string | number, end: string | number) {
      this.add({
        closure: {
          close: ']',
          open: '[',
        },
        expr: `${start}-${end}`,
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
