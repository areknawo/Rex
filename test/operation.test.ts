import { ReXer, Operation } from '../src/rex'
/**
 * ReXOperation test.
 * Test checks if ReXOperation class is working properly.
 */
describe('Operation', () => {
  test('Creation', () => {
    const operation = new Operation({
      closure: {
        open: '(',
        close: ')',
      },
      expr: 'RegEx',
      negate() {
        this.setExpr('Regular Expression')
      },
    })
    operation.negate()
    expect(operation.stringify(new ReXer())).toBe('(Regular Expression)')
  })
  test('Edition', () => {
    const operation = new Operation('')
    operation.setClosure({ open: '(', close: ')' })
    operation.setExpr('RegEx')
    operation.setNegate(function() {
      this.setExpr('Regular Expression')
    })
    operation.negate()
    expect(operation.stringify(new ReXer())).toBe('(Regular Expression)')
  })
})
