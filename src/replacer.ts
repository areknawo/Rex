/**
 * @module Replacer
 */
import { ReplaceExtension } from './extensions/replace'
import { ReXer } from './rexer'
import { Matcher } from './matcher'
import { getTextBetweenBrackets } from './utils'
import { Result } from './parser'

/**
 * Class for constructing replacement expressions.
 */
export class Replacer extends ReXer {
  constructor() {
    super()
    this.useExtension(ReplaceExtension)
  }
  /**
   * Replaces matching part of string with constructed expression.
   * @param matcher - Matcher expression for matching string parts.
   * @param str - String to match on.
   */
  public replace = (matcher: Matcher, str: string) => {
    const match = matcher.match(str)
    const splitted = matcher.split(str, 1)
    if (match) {
      const replacement = this.replacementExpr(match)
      const editedIndex = match.index === 0 ? 0 : 1
      splitted.splice(editedIndex, 0, match[0].replace(match[0], replacement))
    }

    return splitted.join('')
  }
  /**
   * Replaces all matching parts of string with constructed expression.
   * @param matcher - Matcher expression for matching string parts.
   * @param str - String to match on.
   */
  public replaceAll = (matcher: Matcher, str: string) => {
    const matches = matcher.matchAll(str)
    const splitted = matcher.split(str)
    let editedIndex = 1
    if (matches) {
      for (const match of matches) {
        const replacement = this.replacementExpr(match)
        editedIndex = match.index === 0 ? 0 : editedIndex
        splitted.splice(editedIndex, 0, match[0].replace(match[0], replacement))
        editedIndex += 2
      }
    }

    return splitted.join('')
  }
  /**
   * Returns constructed replacement expression.
   */
  public getExpr = () => {
    return this.stringifyChannel(0)
  }
  /**
   * Generates, preprocesses & polyfills replacement expression.
   * @param matched - Result of Matcher execution.
   */
  private replacementExpr = (matched: Result) => {
    const expr = this.getExpr()
    let preprocessedExpr = expr
    let index = -1
    if (matched.groups) {
      for (let i = 0; i < expr.length; i += 1) {
        index = expr.indexOf('$<', index + 1)
        if (index > -1) {
          const groupName = getTextBetweenBrackets(expr, index + 1)
          preprocessedExpr = preprocessedExpr.replace(`$<${groupName}>`, matched.groups[groupName])
        } else break
      }
    }

    return preprocessedExpr
  }
}
export interface Replacer extends ReplaceExtension {}
