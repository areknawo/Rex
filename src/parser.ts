/**
 * @module Parser
 */

import { Polyfiller } from './polyfill'

export interface Result extends RegExpExecArray {
  groups?: {
    [key: string]: string
  }
}
/**
 * Parser class for executing extended regExs.
 */
export class Parser {
  /**
   * Flags applied to parser regEx.
   */
  public flags: string[] = []
  /**
   * Parser regEx as string.
   */
  public expr: string = ''
  /**
   * Parser regEx polyfiller.
   */
  private polyfiller = new Polyfiller()
  /**
   * Parser preprocessed regEx.
   */
  private regEx: RegExp | undefined = undefined
  /**
   * @param expr - Rex regEx string.
   * @param flags - Regular Expression flags.
   */
  constructor(expr?: string, flags?: string) {
    this.update(expr ? expr : '', flags ? flags : '')
  }
  /**
   * Updates parser data.
   * @param expr - Parser Rex regEx.
   * @param flags - Parser Rex regEx flags string.
   */
  public update = (expr: string, flags: string) => {
    this.expr = expr
    this.flags = flags.split('')
    this.polyfiller.reset()
    this.regEx = undefined
  }
  /**
   * Tests string against regEx and returns boolean if matched.
   * Similar to 'RegExp.test()' method.
   * @param str - String to run operation against.
   */
  public test = (str: string) => {
    const match = this.match(str)

    return match && match.length > 0 ? true : false
  }
  /**
   * Matches string against regEx and returns result as array.
   * Similar to 'RegExp.exec()' method.
   * @param str - String to run operation against.
   */
  public match = (str: string) => {
    if (!this.regEx) this.preprocess()
    if (this.regEx) {
      const result = this.regEx.exec(str)
      if (result) {
        return this.polyfiller.applyPolyfills(result)
      }
    }

    return null
  }
  /**
   * Matches all matches in string for regEx and returns array of result arrays.
   * @param str - String to run operation against.
   */
  public matchAll = (str: string) => {
    const results: Result[] = []
    let addedGFlag = false
    if (this.flags.indexOf('g') === -1) {
      addedGFlag = true
      this.update(this.expr, `${this.flags.join('')}g`)
    }

    for (let i = 0; i < Infinity; i += 1) {
      const result = this.match(str)
      if (result) {
        results.push(result)
      } else {
        break
      }
    }

    if (addedGFlag) {
      this.flags.pop()
      this.update(this.expr, this.flags.join(''))
    }

    return results.length > 0 ? results : null
  }
  /**
   * Search for match in given string. Returns beginning index of match or -1 if not found.
   * @param str - String to run operation against.
   */
  public search = (str: string) => {
    const match = this.match(str)

    return match && match.index ? match.index : -1
  }
  /**
   * Splits the string in places that match regEx.
   * @param str - String to run operation against.
   * @param n - How many times to split the string - minimum 1
   */
  public split = (str: string, n?: number) => {
    const matches = this.matchAll(str)
    const result: string[] = []
    let splitIndex = 0
    if (matches) {
      const maxIndex = n && n <= matches.length ? n : matches.length
      for (let i = 0; i < maxIndex; i += 1) {
        const match = matches[i]
        const part = str.substring(splitIndex, match.index)
        if (part !== '') result.push(part)
        splitIndex = match.index + match[0].length
      }
    }
    const part = str.substring(splitIndex, str.length)
    if (part !== '') result.push(part)

    return result
  }
  /**
   * Preprocesses RegEx execution.
   * @param str - String to run operation against.
   */
  private preprocess = () => {
    const expr = this.polyfiller.mapPolyfills(this.expr)
    this.regEx = new RegExp(expr, this.flags.join(''))
  }
}
