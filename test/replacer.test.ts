import { Replacer, Matcher } from '../src/rex'
/**
 * ReXReplacer Test.
 * Test checks if ReXMatcher's functions work correctly.
 */
describe('ReX Replacer Functions Test', () => {
  test('Replace', () => {
    const expr = new Replacer()
      .captured('beginning')
      .add('ular')
      .add(' ')
      .captured('ending')
      .add('pression')
      .replace(
        new Matcher()
          .find('Reg')
          .as('beginning')
          .find('Ex')
          .as('ending'),
        'RegEx RegEx',
      )

    expect(expr).toBe('Regular Expression RegEx')
  })
  test('ReplaceAll', () => {
    const expr = new Replacer()
      .captured('beginning')
      .add('ular')
      .add(' ')
      .captured('ending')
      .add('pression')
      .replaceAll(
        new Matcher()
          .find('Reg')
          .as('beginning')
          .find('Ex')
          .as('ending'),
        'RegEx RegEx',
      )

    expect(expr).toBe('Regular Expression Regular Expression')
  })
})
