import { Matcher } from '../src/rex'

/**
 * ReXMatcher Test.
 * Test checks if ReXMatcher's functions work correctly.
 */
describe('ReX Matcher Functions Test', () => {
  describe('Matching', () => {
    test('Test', () => {
      const expr = new Matcher()
        .find('Regular')
        .anyWhitespace()
        .capture('Expression')
        .test('Regular Expression')

      expect(expr).toBeTruthy()
    })
    test('Match', () => {
      const expr = new Matcher()
        .precede(expr => {
          expr.find('Regular').anyWhitespace()
        })
        .find('Expression')
        .as('noun')
        .match('Regular Expression')
      expect(expr).toBeDefined()
      expect(expr.groups).toBeDefined()
      expect(expr.groups.noun).toBe('Expression')
    })
    test('MatchAll', () => {
      const expr = new Matcher()
        .precede(expr => {
          expr.capture('-')
        })
        .negate()
        .find('RegEx')
        .matchAll('RegEx-RegEx')
      expect(expr.length).toBe(1)
    })
    test('MatchAll - `g` flag preapplied', () => {
      const expr = new Matcher()
        .globalize()
        .precede(expr => {
          expr.find('-')
        })
        .negate()
        .find('RegEx')
        .matchAll('RegEx-RegEx')
      expect(expr.length).toBe(1)
    })
    test('Search', () => {
      const expr = new Matcher().find('Expression').search('Regular Expression')

      expect(expr).toBe(8)
    })
    test('Split', () => {
      const expr = new Matcher()
        .anyWhitespace()
        .as('empty')
        .ref('empty')
        .split('Regular  Expression', 2)
      expect(expr[0]).toBe('Regular')
      expect(expr[1]).toBe('Expression')
    })
  })
  describe('Flags', () => {
    test('Add', () => {
      const expr = new Matcher().addFlag('g')

      expect(expr.containsFlag('g')).toBeTruthy()
    })
    test('Remove', () => {
      const expr = new Matcher().addFlag('g').removeFlag('g')

      expect(expr.containsFlag('g')).toBeFalsy()
    })
  })
})
