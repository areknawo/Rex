/**
 * @module ReXer
 */
import { Operation, FuncExpr, OperationConfig } from './operation'

export interface Method<T> {
  name: string | string[]
  func: (this: T, ...params: any[]) => T
}

interface Snippets<T extends ReXer> {
  [key: string]: OperationConfig<T> | string | T
}
/**
 * Base class for constructing regExs.
 */
export class ReXer {
  /**
   * Last added operation to main channel.
   */
  public lastOperation: Operation<this> | null = null
  /**
   * Array of operation channels - arrays of operations.
   */
  private operationChannels: Operation<this>[][] = [[]]
  /**
   * Current operation channel index.
   */
  private channelIndex: number = 0
  /**
   * Array of created
   */
  private snippets: Snippets<this> = {}

  /**
   * Appends operation to current channel.
   * @param operation - Operation to append.
   */
  public add(operationConfig: OperationConfig<this> | string | this) {
    const operation = new Operation(operationConfig)
    this.operationChannels[this.channelIndex].push(operation)
    this.lastOperation = operation

    return this
  }
  /**
   * Repeats last appended operation.
   */
  public repeat() {
    if (this.lastOperation) {
      this.operationChannels[this.channelIndex].push(this.lastOperation)
    } else {
      console.warn('No operation to be repeated - omitted!')
    }

    return this
  }
  /**
   * Returns constructed matching expression.
   */
  public getExpr() {
    return this.stringifyChannel(0)
  }
  /**
   * Appends extension method to ReXer for its later reuse.
   * @param method - Extension method.
   */
  public useMethod<T extends ReXer>(method: Method<T>) {
    const { name, func } = method
    if (typeof name === 'string') {
      this[name] = func
    } else {
      for (const alias of name) {
        this[alias] = func
      }
    }
  }
  /**
   * Appends array of extension method to ReXer for their later reuse.
   * @param method - Extension methods array.
   */
  public useExtension<T extends ReXer>(ext: Method<T>[]) {
    for (const method of ext) {
      this.useMethod(method)
    }
  }
  /**
   * Creates snippet for given operation.
   * @param name - Snippet's name.
   * @param snippet - Operation's snippet.
   */
  public createSnippet(name: string, snippet: OperationConfig<this> | string | this) {
    this.snippets[name] = snippet

    return this
  }
  /**
   * Inserts specified snippet in expression.
   * @param name - Snippet's name.
   */
  public insertSnippet = (name: string) => {
    this.add(this.snippets[name])

    return this
  }
  /**
   * Creates string from function expression.
   * @param expr - Function expression.
   */
  public stringifyExpression(expr: FuncExpr<this>) {
    const channel = this.setChannel(this.createChannel())
    expr(this)
    const stringified = this.stringifyChannel(channel)
    this.setChannel(0)

    return stringified
  }
  /**
   * Creates string from channel's operations.
   * @param channelIndex - Channel index.
   * @returns All operation in given channel in form of string.
   */
  public stringifyChannel = (channelIndex: number) => {
    const channel = this.operationChannels[channelIndex]
    let stringified = ''
    channel.forEach(operation => {
      stringified += operation.stringify(this)
    })

    return stringified
  }
  /**
   * Creates new operations channel.
   * @returns New channel's index.
   */
  public createChannel() {
    const channelIndex = this.operationChannels.push([]) - 1

    return channelIndex
  }
  /**
   * Sets current operations channel.
   * @param channelIndex - Channel index.
   * @returns Passed channel index.
   */
  public setChannel = (channelIndex: number) => {
    this.channelIndex = channelIndex

    return channelIndex
  }
}
