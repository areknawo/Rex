/**
 * @module ReplaceExtension
 */
import { Method } from '../rexer'
import { Replacer } from '../replacer'

export interface ReplaceExtension {
  /**
   * Includes matched string in its replacer.
   */
  matched(): Replacer
  /**
   * Includes matched named group in replacer.
   * @param name - Name of the group to be referenced.
   */
  captured(name: string): Replacer
  /**
   * Includes portion of string that precedes matched part in replacer.
   */
  beforeMatched(): Replacer
  /**
   * Includes portion of string that follows matched part in replacer.
   */
  afterMatched(): Replacer
  /**
   * Includes dollar character in replacer
   */
  dollar(): Replacer
}

/**
 * RegEx replacement-related methods ReX.js extension.
 */
export const ReplaceExtension: Method<Replacer>[] = [
  {
    name: 'matched',
    func() {
      this.add('$&')

      return this
    },
  },
  {
    name: 'captured',
    func(name: string) {
      this.add(`$<${name}>`)

      return this
    },
  },
  {
    name: 'beforeMatched',
    func() {
      this.add('$`')

      return this
    },
  },
  {
    name: 'afterMatched',
    func() {
      this.add("$'")

      return this
    },
  },
  {
    name: 'dollar',
    func() {
      this.add('$$')

      return this
    },
  },
]
