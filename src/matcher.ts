/**
 *  @module Matcher
 */
import { AnchorsExtension } from './extensions/anchors'
import { CharactersExtension } from './extensions/characters'
import { EscapedCharactersExtension } from './extensions/escaped'
import { FlagsExtension } from './extensions/flags'
import { GroupExtension } from './extensions/group'
import { LookAroundExtension } from './extensions/look'
import { QuantifiersExtension } from './extensions/quantifiers'
import { Operation } from './operation'
import { Parser } from './parser'
import { ReXer } from './rexer'

/**
 * Class for constructing matching expressions.
 */
export class Matcher extends ReXer {
  /**
   * Parser for regEx execution.
   */
  protected parser = new Parser()
  constructor() {
    super()
    this.useExtension(AnchorsExtension)
    this.useExtension(CharactersExtension)
    this.useExtension(EscapedCharactersExtension)
    this.useExtension(FlagsExtension)
    this.useExtension(GroupExtension)
    this.useExtension(LookAroundExtension)
    this.useExtension(QuantifiersExtension)
  }
  /**
   * Tests string against regEx and returns boolean if matched.
   * Similar to 'RegExp.test()' method.
   * @param str - String to run operation against.
   */
  public test = (str: string) => {
    this.preprocess()

    return this.parser.test(str)
  }
  /**
   * Matches string against regEx and returns result as array.
   * Similar to 'RegExp.exec()' method.
   * @param str - String to run operation against.
   */
  public match = (str: string) => {
    this.preprocess()

    return this.parser.match(str)
  }
  /**
   * Matches all matches in string for regEx and returns array of result arrays.
   * @param str - String to run operation against.
   */
  public matchAll = (str: string) => {
    this.preprocess()

    return this.parser.matchAll(str)
  }
  /**
   * Search for match in given string. Returns beginning index of match or -1 if not found.
   * @param str - String to run operation against.
   */
  public search = (str: string) => {
    this.preprocess()

    return this.parser.search(str)
  }
  /**
   * Splits the string in places that match regEx.
   * @param str - String to run operation against.
   * @param n - How many times to split the string - minimum 1
   */
  public split = (str: string, n?: number) => {
    this.preprocess()

    return this.parser.split(str, n)
  }
  /**
   * Returns constructed matching expression.
   */
  public getExpr = () => {
    return this.stringifyChannel(0)
  }
  /**
   * Inserts given expression to regEx.
   * Standard string characters are automatically escaped.
   * @param str - RegEx string to append.
   */
  public find = (str: string) => {
    const regEx: RegExp = /\+|\*|\?|\^|\$|\.|\[|\]|\{|\}|\(|\)|\||\/|\\/g
    this.add(new Operation(str.replace(regEx, '\\$&')))

    return this
  }
  /**
   * Negates last appended operation.
   */
  public negate = () => {
    if (this.lastOperation && this.lastOperation.negate) {
      this.lastOperation.negate()
    } else {
      console.warn("Operation doesn't implement negate method!")
    }

    return this
  }
  /**
   * Appends given flag to regEx.
   * @param flag - Flag to append.
   */
  public addFlag = (flag: string) => {
    const { flags, expr, update } = this.parser
    update(expr, flags.join('') + flag)

    return this
  }
  /**
   * Removes given flag from regEx.
   * @param flag - Flag to remove.
   */
  public removeFlag = (flag: string) => {
    const { expr, flags, update } = this.parser
    const index = flags.indexOf(flag)
    if (index > -1) {
      flags.splice(index, 1)
      update(expr, flags.join(''))
    }

    return this
  }
  /**
   * Checks if expression contains given flag.
   * @param flag - Flag to check.
   * @returns If expression contains flag.
   */
  public containsFlag = (flag: string) => {
    return this.parser.flags.indexOf(flag) > -1
  }
  /**
   * Updates parser before each execution.
   */
  private preprocess = () => {
    const { flags, update } = this.parser
    update(this.getExpr(), flags.join(''))
  }
}
export interface Matcher
  extends AnchorsExtension,
    CharactersExtension,
    EscapedCharactersExtension,
    FlagsExtension,
    GroupExtension,
    LookAroundExtension,
    QuantifiersExtension {}
