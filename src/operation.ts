/**
 * @module Operation
 */
import { ReXer } from './rexer'

export interface FuncExpr<T> {
  (rex: T): void
}

export interface OperationConfig<T> {
  expr: string | FuncExpr<T>
  closure?: {
    open: string
    close: string
  }
  negate?: (this: Operation<T>) => void
}
/**
 * Class representing operation appendable to ReX.js Matcher.
 */
export class Operation<T> {
  /**
   * RegEx part as operation body.
   */
  public expr: string | FuncExpr<T> = ''
  /**
   * Operation's closures.
   */
  public closure = {
    open: '',
    close: '',
  }
  /**
   * Operation's negate function.
   */
  public negate?: (this: Operation<T>) => void
  /**
   * @param config - Operation object or string.
   */
  public constructor(config: OperationConfig<T> | string) {
    if (typeof config === 'string') {
      this.expr = config
    } else {
      const { expr, closure, negate } = config
      this.expr = expr
      if (closure) this.setClosure(closure)
      if (negate) this.negate = negate
    }
  }
  /**
   * Sets body of operation.
   * @param expr - Expression to set as body.
   */
  public setExpr = (expr: string | FuncExpr<T>) => {
    this.expr = expr
  }
  /**
   * Sets operation's closures.
   * @param closure - Object specifying closures.
   */
  public setClosure = (closure: { open?: string; close?: string }) => {
    if (closure.open) this.closure.open = closure.open
    if (closure.close) this.closure.close = closure.close
  }
  /**
   * Sets operation's negate function.
   * @param negate - Negate function.
   */
  public setNegate = (negate: (this: Operation<T>) => void) => {
    this.negate = negate
  }
  /**
   * Transforms operation into its string form.
   * @param rex - Rexer instance for executing function expressions.
   */
  public stringify = (rex: ReXer) => {
    const { open, close } = this.closure
    const expr = this.expr
    if (typeof expr === 'string') {
      return open + expr + close
    }

    return open + rex.stringifyExpression((expr as unknown) as FuncExpr<ReXer>) + close
  }
}
