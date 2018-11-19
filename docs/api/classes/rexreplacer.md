[ReX.js](../README.md) > [ReXReplacer](../classes/rexreplacer.md)

# Class: ReXReplacer

Class for constructing replacement expressions.

## Hierarchy

 [ReXer](rexer.md)

 [ReplaceExtension](../interfaces/replaceextension.md)

**↳ ReXReplacer**

## Index

### Constructors

* [constructor](rexreplacer.md#constructor)

### Properties

* [lastOperation](rexreplacer.md#lastoperation)
* [ReplaceExtension](rexreplacer.md#replaceextension)

### Methods

* [add](rexreplacer.md#add)
* [afterMatched](rexreplacer.md#aftermatched)
* [beforeMatched](rexreplacer.md#beforematched)
* [captured](rexreplacer.md#captured)
* [createChannel](rexreplacer.md#createchannel)
* [createSnippet](rexreplacer.md#createsnippet)
* [dollar](rexreplacer.md#dollar)
* [getExpr](rexreplacer.md#getexpr)
* [insertSnippet](rexreplacer.md#insertsnippet)
* [matched](rexreplacer.md#matched)
* [repeat](rexreplacer.md#repeat)
* [replace](rexreplacer.md#replace)
* [replaceAll](rexreplacer.md#replaceall)
* [setChannel](rexreplacer.md#setchannel)
* [stringifyChannel](rexreplacer.md#stringifychannel)
* [stringifyExpression](rexreplacer.md#stringifyexpression)
* [useExtension](rexreplacer.md#useextension)
* [useMethod](rexreplacer.md#usemethod)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReXReplacer**(): [ReXReplacer](rexreplacer.md)

*Defined in replacer.ts:13*

**Returns:** [ReXReplacer](rexreplacer.md)

___

## Properties

<a id="lastoperation"></a>

###  lastOperation

**● lastOperation**: * [ReXOperation](rexoperation.md)<`this`> &#124; `null`
* =  null

*Inherited from [ReXer](rexer.md).[lastOperation](rexer.md#lastoperation)*

*Defined in rexer.ts:21*

Last added operation to main channel.

___
<a id="replaceextension"></a>

### `<Static>` ReplaceExtension

**● ReplaceExtension**: *[ReXMethod](../interfaces/rexmethod.md)<[ReXReplacer](rexreplacer.md)>[]* =  [
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

*Defined in extensions/replace.ts:34*

RegEx replacement-related methods ReX extension.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(operationConfig: * [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; `string`*): `this`

*Inherited from [ReXer](rexer.md).[add](rexer.md#add)*

*Defined in rexer.ts:38*

Appends operation to current channel.

**Parameters:**

| Name | Type |
| ------ | ------ |
| operationConfig |  [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; `string`|

**Returns:** `this`

___
<a id="aftermatched"></a>

###  afterMatched

▸ **afterMatched**(): [ReXReplacer](rexreplacer.md)

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[afterMatched](../interfaces/replaceextension.md#aftermatched)*

*Defined in extensions/replace.ts:24*

Includes portion of string that follows matched part in replacer.

**Returns:** [ReXReplacer](rexreplacer.md)

___
<a id="beforematched"></a>

###  beforeMatched

▸ **beforeMatched**(): [ReXReplacer](rexreplacer.md)

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[beforeMatched](../interfaces/replaceextension.md#beforematched)*

*Defined in extensions/replace.ts:20*

Includes portion of string that precedes matched part in replacer.

**Returns:** [ReXReplacer](rexreplacer.md)

___
<a id="captured"></a>

###  captured

▸ **captured**(name: *`string`*): [ReXReplacer](rexreplacer.md)

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[captured](../interfaces/replaceextension.md#captured)*

*Defined in extensions/replace.ts:16*

Includes matched named group in replacer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of the group to be referenced. |

**Returns:** [ReXReplacer](rexreplacer.md)

___
<a id="createchannel"></a>

###  createChannel

▸ **createChannel**(): `number`

*Inherited from [ReXer](rexer.md).[createChannel](rexer.md#createchannel)*

*Defined in rexer.ts:129*

Creates new operations channel.

**Returns:** `number`
New channel's index.

___
<a id="createsnippet"></a>

###  createSnippet

▸ **createSnippet**(name: *`string`*, snippet: * [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; "string"*): `this`

*Inherited from [ReXer](rexer.md).[createSnippet](rexer.md#createsnippet)*

*Defined in rexer.ts:85*

Creates snippet for given operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |
| snippet |  [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; "string"|  Operation's snippet. |

**Returns:** `this`

___
<a id="dollar"></a>

###  dollar

▸ **dollar**(): [ReXReplacer](rexreplacer.md)

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[dollar](../interfaces/replaceextension.md#dollar)*

*Defined in extensions/replace.ts:28*

Includes dollar character in replacer

**Returns:** [ReXReplacer](rexreplacer.md)

___
<a id="getexpr"></a>

###  getExpr

▸ **getExpr**(): `string`

*Defined in replacer.ts:57*

Returns constructed replacement expression.

**Returns:** `string`

___
<a id="insertsnippet"></a>

###  insertSnippet

▸ **insertSnippet**(name: *`string`*): `this`

*Inherited from [ReXer](rexer.md).[insertSnippet](rexer.md#insertsnippet)*

*Defined in rexer.ts:94*

Inserts specified snippet in expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |

**Returns:** `this`

___
<a id="matched"></a>

###  matched

▸ **matched**(): [ReXReplacer](rexreplacer.md)

*Inherited from [ReplaceExtension](../interfaces/replaceextension.md).[matched](../interfaces/replaceextension.md#matched)*

*Defined in extensions/replace.ts:11*

Includes matched string in its replacer.

**Returns:** [ReXReplacer](rexreplacer.md)

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(): `this`

*Inherited from [ReXer](rexer.md).[repeat](rexer.md#repeat)*

*Defined in rexer.ts:48*

Repeats last appended operation.

**Returns:** `this`

___
<a id="replace"></a>

###  replace

▸ **replace**(matcher: *[ReXMatcher](rexmatcher.md)*, str: *`string`*): `string`

*Defined in replacer.ts:23*

Replaces matching part of string with constructed expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matcher | [ReXMatcher](rexmatcher.md) |  Matcher expression for matching string parts. |
| str | `string` |  String to match on. |

**Returns:** `string`

___
<a id="replaceall"></a>

###  replaceAll

▸ **replaceAll**(matcher: *[ReXMatcher](rexmatcher.md)*, str: *`string`*): `string`

*Defined in replacer.ts:39*

Replaces all matching parts of string with constructed expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matcher | [ReXMatcher](rexmatcher.md) |  Matcher expression for matching string parts. |
| str | `string` |  String to match on. |

**Returns:** `string`

___
<a id="setchannel"></a>

###  setChannel

▸ **setChannel**(channelIndex: *`number`*): `number`

*Inherited from [ReXer](rexer.md).[setChannel](rexer.md#setchannel)*

*Defined in rexer.ts:139*

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

*Defined in rexer.ts:116*

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

▸ **stringifyExpression**(expr: *[ReXFuncExpr](../interfaces/rexfuncexpr.md)<`this`>*): `string`

*Inherited from [ReXer](rexer.md).[stringifyExpression](rexer.md#stringifyexpression)*

*Defined in rexer.ts:103*

Creates string from function expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | [ReXFuncExpr](../interfaces/rexfuncexpr.md)<`this`> |  Function expression. |

**Returns:** `string`

___
<a id="useextension"></a>

###  useExtension

▸ **useExtension**<`T`>(ext: *[ReXMethod](../interfaces/rexmethod.md)<`T`>[]*): `void`

*Inherited from [ReXer](rexer.md).[useExtension](rexer.md#useextension)*

*Defined in rexer.ts:75*

Appends array of extension method to ReXer for their later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| ext | [ReXMethod](../interfaces/rexmethod.md)<`T`>[] |

**Returns:** `void`

___
<a id="usemethod"></a>

###  useMethod

▸ **useMethod**<`T`>(method: *[ReXMethod](../interfaces/rexmethod.md)<`T`>*): `void`

*Inherited from [ReXer](rexer.md).[useMethod](rexer.md#usemethod)*

*Defined in rexer.ts:61*

Appends extension method to ReXer for its later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | [ReXMethod](../interfaces/rexmethod.md)<`T`> |  Extension method. |

**Returns:** `void`

___

