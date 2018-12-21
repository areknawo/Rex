/**
 * @module AnchorsExtension
 */
import { Method, ReXer } from '../rexer'

export interface AnchorsExtension {
  /**
   * Matches beginning of passed string or line ( if multiline is applied ).
   */
  begin(): this
  /**
   * Matches ending of passed string or line ( if multiline is applied ).
   */
  end(): this
  /**
   * States that match starts with non-word character e.g. space, -, tab etc.
   */
  wordBoundary(): this
  /**
   * States that match starts with non-word character e.g. space, -, tab etc.
   */
  boundary(): this
}
/**
 * RegEx anchor-related methods ReX.js extension.
 */
export const AnchorsExtension: Method<ReXer>[] = [
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
