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
  extendedUnicodes(): Matcher
  u: FlagsExtension['extendedUnicodes']
  /**
   * Allows to regiser more than 1 matches.
   */
  globalize(): Matcher
  g: FlagsExtension['globalize']
  global: FlagsExtension['globalize']
  /**
   * Disables case sensitivity.
   */
  ignoreCase(): Matcher
  i: FlagsExtension['ignoreCase']
  /**
   * Takes into account new lines.
   */
  multiline(): Matcher
  m: FlagsExtension['multiline']
  /**
   * Register only one match, starting from selected index.
   * Automatically ignores 'globalize()' function
   * See browser support!
   */
  singleByIndex(): Matcher
  y: FlagsExtension['singleByIndex']
  sticky: FlagsExtension['singleByIndex']
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
