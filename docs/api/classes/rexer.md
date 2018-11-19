[ReX.js](../README.md) > [ReXer](../classes/rexer.md)

# Class: ReXer

Base class for constructing regExs.

## Hierarchy

**ReXer**

↳  [ReXMatcher](rexmatcher.md)

↳  [ReXReplacer](rexreplacer.md)

## Index

### Properties

* [lastOperation](rexer.md#lastoperation)

### Methods

* [add](rexer.md#add)
* [createChannel](rexer.md#createchannel)
* [createSnippet](rexer.md#createsnippet)
* [insertSnippet](rexer.md#insertsnippet)
* [repeat](rexer.md#repeat)
* [setChannel](rexer.md#setchannel)
* [stringifyChannel](rexer.md#stringifychannel)
* [stringifyExpression](rexer.md#stringifyexpression)
* [useExtension](rexer.md#useextension)
* [useMethod](rexer.md#usemethod)

---

## Properties

<a id="lastoperation"></a>

###  lastOperation

**● lastOperation**: * [ReXOperation](rexoperation.md)<`this`> &#124; `null`
* =  null

*Defined in rexer.ts:21*

Last added operation to main channel.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(operationConfig: * [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; `string`*): `this`

*Defined in rexer.ts:38*

Appends operation to current channel.

**Parameters:**

| Name | Type |
| ------ | ------ |
| operationConfig |  [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; `string`|

**Returns:** `this`

___
<a id="createchannel"></a>

###  createChannel

▸ **createChannel**(): `number`

*Defined in rexer.ts:129*

Creates new operations channel.

**Returns:** `number`
New channel's index.

___
<a id="createsnippet"></a>

###  createSnippet

▸ **createSnippet**(name: *`string`*, snippet: * [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; "string"*): `this`

*Defined in rexer.ts:85*

Creates snippet for given operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |
| snippet |  [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`this`> &#124; "string"|  Operation's snippet. |

**Returns:** `this`

___
<a id="insertsnippet"></a>

###  insertSnippet

▸ **insertSnippet**(name: *`string`*): `this`

*Defined in rexer.ts:94*

Inserts specified snippet in expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |

**Returns:** `this`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(): `this`

*Defined in rexer.ts:48*

Repeats last appended operation.

**Returns:** `this`

___
<a id="setchannel"></a>

###  setChannel

▸ **setChannel**(channelIndex: *`number`*): `number`

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

