/**
 * @module EscapedCharactersExtension
 */
import { Method } from '../rexer'
import { Matcher } from '../matcher'

export interface EscapedCharactersExtension {
  /**
   * Matches carriage return character ( char code 13 ).
   */
  carriageReturn(): Matcher
  /**
   * Matches null character ( char code 0 ).
   */
  codeZero(): Matcher
  /**
   * Matches given control escaped character.
   * @param letter - Control letter ( A for char code 1 up to Z for char code 26 )
   */
  control(letter: string): Matcher
  /**
   * Matches line feed character a.k.a. 'enter' ( char code 10 ).
   */
  lineFeed(): Matcher
  enter: EscapedCharactersExtension['lineFeed']
  /**
   * Matches form feed character ( char code 12 ).
   */
  formFeed(): Matcher
  /**
   * Matches given hexadecimal escaped character.
   * @param hex - Sting of two hex digits e.g. "ff".
   */
  hex(hex: string): Matcher
  /**
   * Matches given octal escaped character.
   * @param oct - Sting of three octal digits e.g. "021" with max being "377".
   */
  octal(oct: string): Matcher
  /**
   * Matches tab character ( char code 9 ).
   */
  tab(): Matcher
  /**
   * Matches given unicode escaped character.
   * @param code - Sting of four ( can be more with extendedUnicodes applied ) hex digits.
   */
  unicode(code: string): Matcher
  /**
   * Matches vertical tab character ( char code 11 ).
   */
  verticalTab(): Matcher
  vTab: EscapedCharactersExtension['verticalTab']
}

/**
 * RegEx escaped characters matching methods ReX.js extension.
 */
export const EscapedCharactersExtension: Method<Matcher>[] = [
  {
    name: 'octal',
    func(oct: string) {
      const maxOctDigits: number = 3
      const maxOctNumber: number = 377
      if (oct.length === maxOctDigits && Number(oct) <= maxOctNumber) {
        this.add(`\\${oct}`)
      } else {
        console.warn('Too big octal number - omitted!')
      }

      return this
    },
  },
  {
    name: 'hex',
    func(hex: string) {
      const maxHexDigits: number = 2
      if (hex.length === maxHexDigits) {
        this.add(`\\x${hex}`)
      } else {
        console.warn('Not enough characters supplied - omitted!')
      }

      return this
    },
  },
  {
    name: 'unicode',
    func(code: string) {
      const maxHexDigits: number = 4
      if (code.length === maxHexDigits) {
        this.add(`\\u${code}`)
      } else if (code.length > maxHexDigits && this.containsFlag('u')) {
        this.add(`\\u{${code}}`)
      } else {
        console.warn(
          'Not enough characters supplied or too many without `u` flag applied - omitted!',
        )
      }

      return this
    },
  },
  {
    name: 'control',
    func(letter: string) {
      if (letter.length === 1) {
        this.add(`\\c${letter}`)
      } else {
        console.warn('Character was not supplied correctly - omitted!')
      }

      return this
    },
  },
  {
    name: 'tab',
    func() {
      this.add('\\t')

      return this
    },
  },
  {
    name: ['enter', 'lineFeed'],
    func() {
      this.add('\\n')

      return this
    },
  },
  {
    name: ['vTab', 'verticalTab'],
    func() {
      this.add('\\v')

      return this
    },
  },
  {
    name: 'formFeed',
    /**
     * Matches form feed character ( char code 12 ).
     */
    func() {
      this.add('\\f')

      return this
    },
  },
  {
    name: 'carriageReturn',
    func() {
      this.add('\\r')

      return this
    },
  },
  {
    name: 'codeZero',
    func() {
      this.add('\\0')

      return this
    },
  },
]
