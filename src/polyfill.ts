/**
 * @module Polyfiller
 * @hidden
 */
import { getTextBetweenBrackets, getNumberOfBracketsInside } from './utils'
import { Result } from './parser'

/**
 * Class used to polyfill some aspects of RegExp.
 * @hidden
 */
export class Polyfiller {
  /**
   * Map object for polyfilling look behinds.
   */
  private lookBehinds: {
    positive: { behind: number; value: number }[]
    negative: { behind: number; value: number }[]
  } = {
    positive: [],
    negative: [],
  }
  /**
   * Map object for polyfilling named groups.
   */
  private namedGroups: { [key: string]: number } = {}
  /**
   * Variable storing currently processed regEx group index.
   */
  private groupIndex: number = 0
  /**
   * Variable storing regEx preprocessed by Polyfiller.
   */
  private preprocessedRegEx: string = ''
  /**
   * Variable storing polyfilled regEx.
   */
  private regEx: string = ''

  /**
   * Maps polyfills for later use and returns preprocessed regEx string.
   * @param regEx - RegEx to polyfill.
   */
  public mapPolyfills = (regEx: string) => {
    this.groupIndex = 0
    this.preprocessedRegEx = this.regEx = regEx
    let index = -1
    for (let i = 0; i < this.regEx.length; i += 1) {
      index = this.regEx.indexOf('(', index + 1)
      if (index > -1) {
        const p1 = this.regEx[index + 1]
        const p2 = this.regEx[index + 2]
        const p3 = this.regEx[index + 3]
        if (p1 === '?') {
          if (p2 !== ':') {
            if (p2 === '<') {
              if (p3 === '=') {
                this.groupIndex += 1
                this.mapPositiveLookBehind(getTextBetweenBrackets(this.regEx, index + 3, '('))
                this.groupIndex += 1
              } else if (p3 === '!') {
                this.groupIndex += 1
                this.mapNegativeLookBehind(getTextBetweenBrackets(this.regEx, index + 3, '('))
                this.groupIndex += 1
              } else {
                this.groupIndex += 1
                this.mapNamedGroup()
              }
            }
          }
        } else this.groupIndex += 1
      } else break
    }
    this.mapNamedGroupsBackreferences()

    return this.preprocessedRegEx
  }
  /**
   * Applies polyfills to regEx result.
   * @param result - Result of running regEx mapped earlier.
   */
  public applyPolyfills(result: RegExpExecArray): Result | null {
    let preprocessedResult: Result | null = result
    preprocessedResult && (preprocessedResult = this.applyNamedGroups(preprocessedResult))
    preprocessedResult && (preprocessedResult = this.applyPositiveLookBehinds(preprocessedResult))
    preprocessedResult && (preprocessedResult = this.applyNegativeLookBehinds(preprocessedResult))

    return preprocessedResult
  }
  /**
   * Resets Polyfiller's data.
   */
  public reset() {
    this.groupIndex = 0
    this.lookBehinds = {
      positive: [],
      negative: [],
    }
    this.namedGroups = {}
    this.regEx = ''
    this.preprocessedRegEx = ''
  }
  /**
   * Applies negative look behind polyfill.
   * @param result - Result of running regEx mapped earlier.
   */
  private applyNegativeLookBehinds = (result: Result) => {
    const preprocessedResult = result
    for (const indices of this.lookBehinds.negative) {
      const behind = result[indices.behind]
      if (behind) {
        return null
      }
      preprocessedResult.splice(indices.value, 1)
      preprocessedResult.splice(indices.behind, 1)
    }

    return preprocessedResult
  }
  /**
   * Applies positive look behind polyfill.
   * @param result - Result of running regEx mapped earlier.
   */
  private applyPositiveLookBehinds = (result: Result) => {
    const preprocessedResult = result
    let behindIndex = -1
    for (const indices of this.lookBehinds.positive) {
      const behind = result[indices.behind]
      if (behind) {
        const lettersArray = preprocessedResult[0].split('')
        const behindLength = behind.length
        behindIndex = result[0].indexOf(behind, behindIndex + 1)
        if (behindIndex === 0) {
          preprocessedResult.index = behindLength
        }
        lettersArray.splice(behindIndex, behindLength)
        preprocessedResult[0] = lettersArray.join('')
        preprocessedResult.splice(indices.value, 1)
        preprocessedResult.splice(indices.behind, 1)
      } else {
        return null
      }
    }

    return preprocessedResult
  }
  /**
   * Applies named groups polyfill.
   * @param result - Result of running regEx mapped earlier.
   */
  private applyNamedGroups = (result: Result) => {
    const preprocessedResult: Result = result
    preprocessedResult.groups = {}
    for (const groupName in this.namedGroups) {
      const groupIndex = this.namedGroups[groupName]
      preprocessedResult.groups[groupName] = result[groupIndex]
    }

    return preprocessedResult
  }
  /**
   * Maps polyfilled positive look behinds.
   * @param negativeLookBehindValue - Value given to positive look behind.
   */
  private mapPositiveLookBehind = (positiveLookBehindValue: string) => {
    this.lookBehinds.positive.push({
      behind: this.groupIndex,
      value:
        this.groupIndex +
        getNumberOfBracketsInside(
          this.preprocessedRegEx,
          this.preprocessedRegEx.indexOf(`(?<=${positiveLookBehindValue})`) +
            6 +
            positiveLookBehindValue.length,
        ) +
        1,
    })
    this.preprocessedRegEx = this.preprocessedRegEx.replace(
      `(?<=${positiveLookBehindValue})`,
      `(${positiveLookBehindValue})?(`,
    )
    this.preprocessedRegEx += ')'
  }
  /**
   * Maps polyfilled negative look behinds.
   * @param negativeLookBehindValue - Value given to negative look behind.
   */
  private mapNegativeLookBehind = (negativeLookBehindValue: string) => {
    this.lookBehinds.negative.push({
      behind: this.groupIndex,
      value:
        this.groupIndex +
        getNumberOfBracketsInside(
          this.preprocessedRegEx,
          this.preprocessedRegEx.indexOf(`(?<=${negativeLookBehindValue})`) +
            6 +
            negativeLookBehindValue.length,
        ) +
        1,
    })
    this.preprocessedRegEx = this.preprocessedRegEx.replace(
      `(?<!${negativeLookBehindValue})`,
      `(${negativeLookBehindValue})?(`,
    )
    this.preprocessedRegEx += ')'
  }
  /**
   * Maps polyfilled named groups.
   */
  private mapNamedGroup() {
    this.preprocessedRegEx = this.preprocessedRegEx.replace(/\?<(\w+)>/, (matched, name) => {
      this.namedGroups[name] = this.groupIndex

      return ''
    })
  }
  /**
   * Maps polyfilled named groups backreferences.
   */
  private mapNamedGroupsBackreferences() {
    let index = -1
    for (let i = 0; i < this.regEx.length; i += 1) {
      index = this.regEx.indexOf('\\k<', index + 1)
      if (index > -1) {
        const groupName = getTextBetweenBrackets(this.regEx, index + 2)
        this.preprocessedRegEx = this.preprocessedRegEx.replace(
          `\\k<${groupName}>`,
          `\\${this.namedGroups[groupName]}`,
        )
      } else break
    }
  }
}
