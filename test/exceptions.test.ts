import { Matcher, Replacer } from '../src/rex'
/**
 * Exceptions test.
 * Test checks exceptions handling functionality.
 */
describe('Exceptions', () => {
  test('Hex not enough chars', () => {
    const expr = new Matcher().hex('f').getExpr()

    expect(expr).toBe('')
  })
  test("Too many unicodes chars without 'u' flag", () => {
    const expr = new Matcher().unicode('ffffff').getExpr()

    expect(expr).toBe('')
  })
  test('Control char is not a char', () => {
    const expr = new Matcher().control('reg').getExpr()

    expect(expr).toBe('')
  })
  test('No negate function', () => {
    const expr = new Matcher()
      .anyButBreak()
      .negate()
      .getExpr()

    expect(expr).toBe('.')
  })
  test('Nothing to be referenced', () => {
    const expr = new Matcher()
      .repeat()
      .as('nothing')
      .getExpr()

    expect(expr).toBe('')
  })
  test('Octal too big', () => {
    const expr = new Matcher().octal('380').getExpr()

    expect(expr).toBe('')
  })
  test('Nothing to replace', () => {
    const expr = new Replacer()
      .add('Regular Expression')
      .replace(new Matcher().find('RegEx'), 'Regular-Expression')

    expect(expr).toBe('Regular-Expression')
  })
  test('Nothing to replace at all', () => {
    const expr = new Replacer()
      .add('Regular Expression')
      .replaceAll(new Matcher().find('RegEx'), 'Regular-Expression')

    expect(expr).toBe('Regular-Expression')
  })
  test('Unmatched positive look behind', () => {
    const expr = new Matcher()
      .precede('ge')
      .find('xp')
      .match('Regular Expression')

    expect(expr).toBeNull()
  })
  test('Unextended unicodes', () => {
    const expr = new Matcher().unicode('23').getExpr()

    expect(expr).toBe('\\u23')
  })
  test('Invalid range', () => {
    const expr = new Matcher().range('a', 'b', 'c').getExpr()

    expect(expr).toBe('[a-b]')
  })
  test("Removing flag that doesn't exist", () => {
    const expr = new Matcher()
      .globalize()
      .removeFlag('g')
      .removeFlag('g')
      .containsFlag('g')
    expect(expr).toBeFalsy()
  })
})
