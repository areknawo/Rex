[ReX.js](../README.md) > [Parser](../classes/parser.md)

# Class: Parser

Parser class for executing extended regExs.

## Hierarchy

**Parser**

## Index

### Constructors

* [constructor](parser.md#constructor)

### Properties

* [expr](parser.md#expr)
* [flags](parser.md#flags)
* [lastIndex](parser.md#lastindex)

### Methods

* [match](parser.md#match)
* [matchAll](parser.md#matchall)
* [search](parser.md#search)
* [split](parser.md#split)
* [test](parser.md#test)
* [update](parser.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Parser**(expr?: *`undefined` \| `string`*, flags?: *`undefined` \| `string`*): [Parser](parser.md)

*Defined in [parser.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L35)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` expr | `undefined` \| `string` |  Rex regEx string. |
| `Optional` flags | `undefined` \| `string` |  Regular Expression flags. |

**Returns:** [Parser](parser.md)

___

## Properties

<a id="expr"></a>

###  expr

**● expr**: *`string`* = ""

*Defined in [parser.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L23)*

Parser regEx as string.

___
<a id="flags"></a>

###  flags

**● flags**: *`string`[]* =  []

*Defined in [parser.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L19)*

Flags applied to parser regEx.

___
<a id="lastindex"></a>

###  lastIndex

**● lastIndex**: *`number`* = 0

*Defined in [parser.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L27)*

Index to start parsing from.

___

## Methods

<a id="match"></a>

###  match

▸ **match**(str: *`string`*): `null` \| [Result](../interfaces/result.md)

*Defined in [parser.ts:59](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L59)*

Matches string against regEx and returns result as array. Similar to 'RegExp.exec()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `null` \| [Result](../interfaces/result.md)

___
<a id="matchall"></a>

###  matchAll

▸ **matchAll**(str: *`string`*): `null` \| [Result](../interfaces/result.md)[]

*Defined in [parser.ts:89](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L89)*

Matches all matches in string for regEx and returns array of result arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `null` \| [Result](../interfaces/result.md)[]

___
<a id="search"></a>

###  search

▸ **search**(str: *`string`*): `number`

*Defined in [parser.ts:118](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L118)*

Search for match in given string. Returns beginning index of match or -1 if not found.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `number`

___
<a id="split"></a>

###  split

▸ **split**(str: *`string`*, n?: *`undefined` \| `number`*): `string`[]

*Defined in [parser.ts:129](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L129)*

Splits the string in places that match regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |
| `Optional` n | `undefined` \| `number` |  How many times to split the string - minimum 1 |

**Returns:** `string`[]

___
<a id="test"></a>

###  test

▸ **test**(str: *`string`*): `boolean`

*Defined in [parser.ts:79](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L79)*

Tests string against regEx and returns boolean if matched. Similar to 'RegExp.test()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `boolean`

___
<a id="update"></a>

###  update

▸ **update**(expr: *`string`*, flags: *`string`*): `void`

*Defined in [parser.ts:48](https://github.com/areknawo/Rex/blob/04d02e1/src/parser.ts#L48)*

Updates parser data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` |  Parser Rex regEx. |
| flags | `string` |  Parser Rex regEx flags string. |

**Returns:** `void`

___

