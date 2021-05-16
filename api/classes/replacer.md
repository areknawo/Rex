[ReX.js](../README.md) > [Replacer](../classes/replacer.md)

# Class: Replacer

Class for constructing replacement expressions.

## Hierarchy

 [ReXer](rexer.md)

 [ReplaceExtension](../interfaces/replaceextension.md)

**↳ Replacer**

## Index

### Constructors

* [constructor](replacer.md#constructor)

### Properties

* [lastOperation](replacer.md#lastoperation)
* [ReplaceExtension](replacer.md#replaceextension)

### Methods

* [add](replacer.md#add)
* [afterMatched](replacer.md#aftermatched)
* [beforeMatched](replacer.md#beforematched)
* [captured](replacer.md#captured)
* [createChannel](replacer.md#createchannel)
* [createSnippet](replacer.md#createsnippet)
* [dollar](replacer.md#dollar)
* [getExpr](replacer.md#getexpr)
* [insertSnippet](replacer.md#insertsnippet)
* [matched](replacer.md#matched)
* [repeat](replacer.md#repeat)
* [replace](replacer.md#replace)
* [replaceAll](replacer.md#replaceall)
* [setChannel](replacer.md#setchannel)
* [stringifyChannel](replacer.md#stringifychannel)
* [stringifyExpression](replacer.md#stringifyexpression)
* [useExtension](replacer.md#useextension)
* [useMethod](replacer.md#usemethod)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Replacer**(): [Replacer](replacer.md)

*Defined in [replacer.ts:13](https://github.com/areknawo/Rex/blob/04d02e1/src/replacer.ts#L13)*

**Returns:** [Replacer](replacer.md)

___

## Properties

<a id="lastoperation"></a>

###  lastOperation

**● lastOperation**: *[Operation](operation.md)<`this`> \| `null`* =  null

*Inherited from [ReXer](rexer.md).[lastOperation](rexer.md#lastoperation)*

*Defined in [rexer.ts:21](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L21)*

Last added operation to main channel.

___
<a id="replaceextension"></a>

### `<Static>` ReplaceExtension

**● ReplaceExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: 'matched',
    func() {
      this.add('$&')

      return this
    },
  },
  {
    name: 'captured',
    func(name: string) {
      this.add(`$<${name}>`)

      return this
    },
  },
  {
    name: 'beforeMatched',
    func() {
      this.add('$`')

      return this
    },
  },
  {
    name: 'afterMatched',
    func() {
      this.add("$'")

      return this
    },
  },
  {
    name: 'dollar',
    func() {
      this.add('$$')

      return this
    },
  },
]

*Defined in [extensions/replace.ts:33](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L33)*

RegEx replacement-related methods ReX.js extension.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(operationConfig: *[OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this`*): `this`

*Inherited from [ReXer](rexer.md).[add](rexer.md#add)*

*Defined in [rexer.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L39)*

Appends operation to current channel.

**Parameters:**

| Name | Type |
| ------ | ------ |
| operationConfig | [OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this` |

**Returns:** `this`

___
<a id="aftermatched"></a>

###  afterMatched

▸ **afterMatched**(): `this`

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[afterMatched](../interfaces/replaceextension.md#aftermatched)*

*Defined in [extensions/replace.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L23)*

Includes portion of string that follows matched part.

**Returns:** `this`

___
<a id="beforematched"></a>

###  beforeMatched

▸ **beforeMatched**(): `this`

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[beforeMatched](../interfaces/replaceextension.md#beforematched)*

*Defined in [extensions/replace.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L19)*

Includes portion of string that precedes matched part.

**Returns:** `this`

___
<a id="captured"></a>

###  captured

▸ **captured**(name: *`string`*): `this`

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[captured](../interfaces/replaceextension.md#captured)*

*Defined in [extensions/replace.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L15)*

Includes matched named group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of the group to be referenced. |

**Returns:** `this`

___
<a id="createchannel"></a>

###  createChannel

▸ **createChannel**(): `number`

*Inherited from [ReXer](rexer.md).[createChannel](rexer.md#createchannel)*

*Defined in [rexer.ts:136](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L136)*

Creates new operations channel.

**Returns:** `number`
New channel's index.

___
<a id="createsnippet"></a>

###  createSnippet

▸ **createSnippet**(name: *`string`*, snippet: *[OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this`*): `this`

*Inherited from [ReXer](rexer.md).[createSnippet](rexer.md#createsnippet)*

*Defined in [rexer.ts:92](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L92)*

Creates snippet for given operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |
| snippet | [OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this` |  Operation's snippet. |

**Returns:** `this`

___
<a id="dollar"></a>

###  dollar

▸ **dollar**(): `this`

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[dollar](../interfaces/replaceextension.md#dollar)*

*Defined in [extensions/replace.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L27)*

Includes dollar character.

**Returns:** `this`

___
<a id="getexpr"></a>

###  getExpr

▸ **getExpr**(): `string`

*Inherited from [ReXer](rexer.md).[getExpr](rexer.md#getexpr)*

*Defined in [rexer.ts:61](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L61)*

Returns constructed matching expression.

**Returns:** `string`

___
<a id="insertsnippet"></a>

###  insertSnippet

▸ **insertSnippet**(name: *`string`*): `this`

*Inherited from [ReXer](rexer.md).[insertSnippet](rexer.md#insertsnippet)*

*Defined in [rexer.ts:101](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L101)*

Inserts specified snippet in expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |

**Returns:** `this`

___
<a id="matched"></a>

###  matched

▸ **matched**(): `this`

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[matched](../interfaces/replaceextension.md#matched)*

*Defined in [extensions/replace.ts:10](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L10)*

Includes matched string.

**Returns:** `this`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(): `this`

*Inherited from [ReXer](rexer.md).[repeat](rexer.md#repeat)*

*Defined in [rexer.ts:49](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L49)*

Repeats last appended operation.

**Returns:** `this`

___
<a id="replace"></a>

###  replace

▸ **replace**(matcher: *[Matcher](matcher.md)*, str: *`string`*): `string`

*Defined in [replacer.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/replacer.ts#L23)*

Replaces matching part of string with constructed expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matcher | [Matcher](matcher.md) |  Matcher expression for matching string parts. |
| str | `string` |  String to match on. |

**Returns:** `string`

___
<a id="replaceall"></a>

###  replaceAll

▸ **replaceAll**(matcher: *[Matcher](matcher.md)*, str: *`string`*): `string`

*Defined in [replacer.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/replacer.ts#L39)*

Replaces all matching parts of string with constructed expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matcher | [Matcher](matcher.md) |  Matcher expression for matching string parts. |
| str | `string` |  String to match on. |

**Returns:** `string`

___
<a id="setchannel"></a>

###  setChannel

▸ **setChannel**(channelIndex: *`number`*): `number`

*Inherited from [ReXer](rexer.md).[setChannel](rexer.md#setchannel)*

*Defined in [rexer.ts:146](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L146)*

Sets current operations channel.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channelIndex | `number` |  Channel index. |

**Returns:** `number`
Passed channel index.

___
<a id="stringifychannel"></a>

###  stringifyChannel

▸ **stringifyChannel**(channelIndex: *`number`*): `string`

*Inherited from [ReXer](rexer.md).[stringifyChannel](rexer.md#stringifychannel)*

*Defined in [rexer.ts:123](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L123)*

Creates string from channel's operations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channelIndex | `number` |  Channel index. |

**Returns:** `string`
All operation in given channel in form of string.

___
<a id="stringifyexpression"></a>

###  stringifyExpression

▸ **stringifyExpression**(expr: *[FuncExpr](../interfaces/funcexpr.md)<`this`>*): `string`

*Inherited from [ReXer](rexer.md).[stringifyExpression](rexer.md#stringifyexpression)*

*Defined in [rexer.ts:110](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L110)*

Creates string from function expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | [FuncExpr](../interfaces/funcexpr.md)<`this`> |  Function expression. |

**Returns:** `string`

___
<a id="useextension"></a>

###  useExtension

▸ **useExtension**<`T`>(ext: *[Method](../interfaces/method.md)<`T`>[]*): `void`

*Inherited from [ReXer](rexer.md).[useExtension](rexer.md#useextension)*

*Defined in [rexer.ts:82](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L82)*

Appends array of extension method to ReXer for their later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| ext | [Method](../interfaces/method.md)<`T`>[] |

**Returns:** `void`

___
<a id="usemethod"></a>

###  useMethod

▸ **useMethod**<`T`>(method: *[Method](../interfaces/method.md)<`T`>*): `void`

*Inherited from [ReXer](rexer.md).[useMethod](rexer.md#usemethod)*

*Defined in [rexer.ts:68](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L68)*

Appends extension method to ReXer for its later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | [Method](../interfaces/method.md)<`T`> |  Extension method. |

**Returns:** `void`

___

