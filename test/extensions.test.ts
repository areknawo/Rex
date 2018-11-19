import { Matcher, Replacer } from '../src/rex'

/**
 * ReX's Extension test
 * Tests check if extensions work correctly.
 */
describe('ReX Extensions Test', () => {
  test('Anchors Extension', () => {
    const expr = new Matcher()
      .begin()
      .wordBoundary()
      .negate()
      .end()
      .getExpr()

    expect(expr).toBe('^\\B$')
  })
  test('Characters Extension', () => {
    const expr = new Matcher()
      .set('AbC')
      .negate()
      .set(expr => {
        expr.find('aBc')
      })
      .range('a', 'z')
      .negate()
      .anyButBreak()
      .wordChar()
      .negate()
      .digit()
      .negate()
      .anyWhitespace()
      .negate()
      .getExpr()

    expect(expr).toBe('[^AbC][aBc][^a-z].\\W\\D\\S')
  })
  test('Escaped Characters Extension', () => {
    const expr = new Matcher()
      .extendedUnicodes()
      .octal('021')
      .hex('ff')
      .unicode('ffff')
      .unicode('eeeee')
      .control('Z')
      .tab()
      .enter()
      .verticalTab()
      .formFeed()
      .carriageReturn()
      .codeZero()
      .getExpr()

    expect(expr).toBe('\\021\\xff\\uffff\\u{eeeee}\\cZ\\t\\n\\v\\f\\r\\0')
  })
  test('Flags Extension', () => {
    const expr = new Matcher()
      .ignoreCase()
      .globalize()
      .extendedUnicodes()
      .multiline()
      .singleByIndex()

    expect(expr.containsFlag('i')).toBeTruthy()
    expect(expr.containsFlag('g')).toBeTruthy()
    expect(expr.containsFlag('u')).toBeTruthy()
    expect(expr.containsFlag('m')).toBeTruthy()
    expect(expr.containsFlag('y')).toBeTruthy()
  })
  test('Groups Extension', () => {
    const expr = new Matcher()
      .capture(expr => {
        expr.find('x')
      })
      .as('letterX')
      .find('y')
      .as('letterY')
      .capture('z')
      .negate()
      .ref('letterX')
      .ref('letterY')
      .getExpr()

    expect(expr).toBe('(?<letterX>x)(?<letterY>y)(?:z)\\k<letterX>\\k<letterY>')
  })
  test('Look Around Extension', () => {
    const expr = new Matcher()
      .precede('re')
      .negate()
      .find('ge')
      .follow('xp')
      .negate()
      .getExpr()

    expect(expr).toBe('(?<!re)ge(?!xp)')
  })
  test('Quantifiers Extension', () => {
    const expr = new Matcher()
      .find('x')
      .more()
      .lazy()
      .find('x')
      .moreOrNot()
      .find('x')
      .optional()
      .find('x')
      .or('y')
      .find('x')
      .withLimits(0, 2)
      .getExpr()

    expect(expr).toBe('x+?x*x?x|yx{0,2}')
  })
  test('Replace Extension', () => {
    const expr = new Replacer()
      .matched()
      .captured('letterX')
      .beforeMatched()
      .afterMatched()
      .dollar()
      .getExpr()

    expect(expr).toBe("$&$<letterX>$`$'$$")
  })
})
