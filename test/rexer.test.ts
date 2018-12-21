import { Matcher } from '../src/rex'
/**
 * ReXer test.
 * Test checks functionality of some basic ReXer class' methods.
 */
describe('ReXer Functions', () => {
  test('Repeat', () => {
    const expr = new Matcher()
      .find('RegEx')
      .repeat()
      .getExpr()

    expect(expr).toBe('RegExRegEx')
  })
  test('Snippet', () => {
    const expr = new Matcher()
      .createSnippet(
        'RegEx',
        new Matcher()
          .capture(expr => {
            expr.find('Reg').or('Regular')
          })
          .negate()
          .capture(expr => {
            expr.find('Ex').or(expr => {
              expr.anyWhitespace().find('Expression')
            })
          })
          .negate(),
      )
      .insertSnippet('RegEx')
      .repeat()
      .getExpr()

    expect(expr).toBe('(?:Reg|Regular)(?:Ex|\\sExpression)(?:Reg|Regular)(?:Ex|\\sExpression)')
  })
})
