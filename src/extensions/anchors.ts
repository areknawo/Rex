/**
 * @module AnchorsExtension
 */
import { Method } from '../rexer'
import { Matcher } from '../matcher'

export interface AnchorsExtension {
  /**
   * Matches beginning of passed string or line ( if multiline is applied ).
   */
  begin(): Matcher
  /**
   * Matches ending of passed string or line ( if multiline is applied ).
   */
  end(): Matcher
  /**
   * States that match starts with non-word character e.g. space, -, tab etc.
   */
  wordBoundary(): Matcher
  boundary: AnchorsExtension['wordBoundary']
}
/**
 * RegEx anchor-related methods ReX.js extension.
 */
export const AnchorsExtension: Method<Matcher>[] = [
  {
    name: 'begin',
    func() {
      this.add('^')

      return this
    },
  },
  {
    name: 'end',
    func() {
      this.add('$')

      return this
    },
  },
  {
    name: ['wordBoundary', 'boundary'],
    func() {
      this.add({
        expr: '\\b',
        negate() {
          this.setExpr('\\B')
        },
      })

      return this
    },
  },
]
