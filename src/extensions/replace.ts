/**
 * @module ReplaceExtension
 */
import { Method, ReXer } from '../rexer'

export interface ReplaceExtension {
  /**
   * Includes matched string.
   */
  matched(): this
  /**
   * Includes matched named group.
   * @param name - Name of the group to be referenced.
   */
  captured(name: string): this
  /**
   * Includes portion of string that precedes matched part.
   */
  beforeMatched(): this
  /**
   * Includes portion of string that follows matched part.
   */
  afterMatched(): this
  /**
   * Includes dollar character.
   */
  dollar(): this
}

/**
 * RegEx replacement-related methods ReX.js extension.
 */
export const ReplaceExtension: Method<ReXer>[] = [
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
