/**
 * @module EscapedCharactersExtension
 */
import { Method } from '../rexer'
import { Matcher } from 'src/matcher'

export interface EscapedCharactersExtension {
  /**
   * Matches carriage return character ( char code 13 ).
   */
  carriageReturn(): this
  /**
   * Matches null character ( char code 0 ).
   */
  codeZero(): this
  /**
   * Matches given control escaped character.
   * @param letter - Control letter ( A for char code 1 up to Z for char code 26 )
   */
  control(letter: string): this
  /**
   * Matches line feed character a.k.a. 'enter' ( char code 10 ).
   */
  lineFeed(): this
  /**
   * Matches line feed character a.k.a. 'enter' ( char code 10 ).
   */
  enter(): this
  /**
   * Matches form feed character ( char code 12 ).
   */
  formFeed(): this
  /**
   * Matches given hexadecimal escaped character.
   * @param hex - Sting of two hex digits e.g. "ff".
   */
  hex(hex: string): this
  /**
   * Matches given octal escaped character.
   * @param oct - Sting of three octal digits e.g. "021" with max being "377".
   */
  octal(oct: string): this
  /**
   * Matches tab character ( char code 9 ).
   */
  tab(): this
  /**
   * Matches given unicode escaped character.
   * @param code - Sting of four ( can be more with extendedUnicodes applied ) hex digits.
   */
  unicode(code: string): this
  /**
   * Matches vertical tab character ( char code 11 ).
   */
  verticalTab(): this
  /**
   * Matches vertical tab character ( char code 11 ).
   */
  vTab(): this
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
      const containsUFlag = this.containsFlag('u')
      if (code.length <= maxHexDigits && !containsUFlag) {
        this.add(`\\u${code}`)
      } else if (containsUFlag) {
        this.add(`\\u{${code}}`)
      } else {
        console.warn('Too many characters supplied without `u` flag applied - omitted!')
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
