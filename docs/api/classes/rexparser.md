[ReX.js](../README.md) > [ReXParser](../classes/rexparser.md)

# Class: ReXParser

Parser class for executing extended regExs.

## Hierarchy

**ReXParser**

## Index

### Constructors

* [constructor](rexparser.md#constructor)

### Properties

* [expr](rexparser.md#expr)
* [flags](rexparser.md#flags)

### Methods

* [match](rexparser.md#match)
* [matchAll](rexparser.md#matchall)
* [search](rexparser.md#search)
* [split](rexparser.md#split)
* [test](rexparser.md#test)
* [update](rexparser.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReXParser**(expr?: * `undefined` &#124; `string`*, flags?: * `undefined` &#124; `string`*): [ReXParser](rexparser.md)

*Defined in parser.ts:31*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` expr |  `undefined` &#124; `string`|  Rex regEx string. |
| `Optional` flags |  `undefined` &#124; `string`|  Regular Expression flags. |

**Returns:** [ReXParser](rexparser.md)

___

## Properties

<a id="expr"></a>

###  expr

**● expr**: *`string`* = ""

*Defined in parser.ts:23*

Parser regEx as string.

___
<a id="flags"></a>

###  flags

**● flags**: *`string`[]* =  []

*Defined in parser.ts:19*

Flags applied to parser regEx.

___

## Methods

<a id="match"></a>

###  match

▸ **match**(str: *`string`*):  `null` &#124; [ReXResult](../interfaces/rexresult.md)

*Defined in parser.ts:65*

Matches string against regEx and returns result as array. Similar to 'RegExp.exec()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:**  `null` &#124; [ReXResult](../interfaces/rexresult.md)

___
<a id="matchall"></a>

###  matchAll

▸ **matchAll**(str: *`string`*):  `null` &#124; [ReXResult](../interfaces/rexresult.md)[]

*Defined in parser.ts:79*

Matches all matches in string for regEx and returns array of result arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:**  `null` &#124; [ReXResult](../interfaces/rexresult.md)[]

___
<a id="search"></a>

###  search

▸ **search**(str: *`string`*): `number`

*Defined in parser.ts:107*

Search for match in given string. Returns beginning index of match or -1 if not found.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `number`

___
<a id="split"></a>

###  split

▸ **split**(str: *`string`*, n?: * `undefined` &#124; `number`*): `string`[]

*Defined in parser.ts:117*

Splits the string in places that match regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |
| `Optional` n |  `undefined` &#124; `number`|  How many times to split the string - minimum 1 |

**Returns:** `string`[]

___
<a id="test"></a>

###  test

▸ **test**(str: *`string`*): `boolean`

*Defined in parser.ts:55*

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

*Defined in parser.ts:44*

Updates parser data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` |  Parser Rex regEx. |
| flags | `string` |  Parser Rex regEx flags string. |

**Returns:** `void`

___

