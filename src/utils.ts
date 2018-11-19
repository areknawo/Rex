/**
 * @module Utils
 * @hidden
 */

/**
 * Returns index of paired closing bracket.
 * @param str - String to run operation against.
 * @param opening - Brackets' opening index.
 * @param type - Type of bracket to match, specified as string of opening one.
 * @hidden
 */
export const getClosingBracket = (str: string, opening: number, type?: string) => {
  const openingBracket = type ? type : str[opening]
  const length = str.length
  let closingBracket: string
  let index = opening
  let opened = 1
  switch (openingBracket) {
    case '(':
      closingBracket = ')'
      break
    case '<':
      closingBracket = '>'
      break
    default:
      closingBracket = ')'
  }
  for (let i = opening + 1; i < length; i += 1) {
    index += 1
    if (str[i] === openingBracket) {
      opened += 1
    } else if (str[i] === closingBracket) {
      opened -= 1
    }
    if (opened === 0) {
      break
    }
  }

  return index
}
/**
 * Returns text between brackets.
 * @param str - String to run operation against.
 * @param opening - Brackets' opening index.
 * @param type - Type of bracket to match, specified as string of opening one.
 * @hidden
 */
export const getTextBetweenBrackets = (str: string, opening: number, type?: string) => {
  const closing = getClosingBracket(str, opening, type)

  return str.substring(opening + 1, closing)
}
/**
 * Returns number of nested brackets in given ones.
 * @param str - String to run operation against.
 * @param opening - Brackets' opening index.
 * @param type - Type of brackets to match, specified as string of opening one.
 * @hidden
 */
export const getNumberOfBracketsInside = (str: string, opening: number, type?: string) => {
  const openingBracket = type ? type : str[opening]
  const inside = getTextBetweenBrackets(str, opening, openingBracket)
  let numberOfGroups = 0
  for (let i = 0; i < inside.length; i += 1) {
    const opening = inside.indexOf(openingBracket)
    if (opening > -1) {
      if (inside[opening + 1] !== '?' && inside[opening + 2] !== ':') {
        numberOfGroups += 1
      }
    } else {
      break
    }
  }

  return numberOfGroups
}
