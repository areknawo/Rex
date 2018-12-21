/**
 * @module FlagsExtension
 */
import { Method } from '../rexer'
import { Matcher } from '../matcher'

export interface FlagsExtension {
  /**
   * Allows extended use of unicodes.
   * See browser support!
   */
  extendedUnicodes(): this
  /**
   * Allows extended use of unicodes.
   * See browser support!
   */
  u(): this

  /**
   * Allows to regiser more than 1 matches.
   */
  globalize(): this
  /**
   * Allows to regiser more than 1 matches.
   */
  global(): this
  /**
   * Allows to regiser more than 1 matches.
   */
  g(): this

  /**
   * Disables case sensitivity.
   */
  ignoreCase(): this
  /**
   * Disables case sensitivity.
   */
  i(): this

  /**
   * Takes into account new lines.
   */
  multiline(): this
  /**
   * Takes into account new lines.
   */
  m(): this

  /**
   * Register only one match, starting from selected index.
   * Automatically ignores 'globalize()' function
   * See browser support!
   */
  singleByIndex(): this
  /**
   * Register only one match, starting from selected index.
   * Automatically ignores 'globalize()' function
   * See browser support!
   */
  sticky(): this
  /**
   * Register only one match, starting from selected index.
   * Automatically ignores 'globalize()' function
   * See browser support!
   */
  y(): this
}

/**
 * RegEx flags-related methods ReX.js extension.
 */
export const FlagsExtension: Method<Matcher>[] = [
  {
    name: ['ignoreCase', 'i'],
    func() {
      this.addFlag('i')

      return this
    },
  },
  {
    name: ['globalize', 'g', 'global'],
    func() {
      this.addFlag('g')

      return this
    },
  },
  {
    name: ['extendedUnicodes', 'u'],
    func() {
      this.addFlag('u')

      return this
    },
  },
  {
    name: ['multiline', 'm'],
    func() {
      this.addFlag('m')

      return this
    },
  },
  {
    name: ['singleByIndex', 'y', 'sticky'],
    func() {
      this.addFlag('y')

      return this
    },
  },
]
