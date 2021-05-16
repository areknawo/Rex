[ReX.js](../README.md) > [GroupExtension](../interfaces/groupextension.md)

# Interface: GroupExtension

RegEx grouping-related methods ReX.js extension.

## Hierarchy

**GroupExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [as](groupextension.md#as)
* [capture](groupextension.md#capture)
* [group](groupextension.md#group)
* [ref](groupextension.md#ref)
* [reference](groupextension.md#reference)

---

## Methods

<a id="as"></a>

###  as

▸ **as**(name: *`string`*): `this`

*Defined in [extensions/group.ts:12](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L12)*

Sets name of preceding expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name for the previously applied expression. |

**Returns:** `this`

___
<a id="capture"></a>

###  capture

▸ **capture**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`> \| `this`*): `this`

*Defined in [extensions/group.ts:18](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L18)*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> \| `this` |  Set's body as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="group"></a>

###  group

▸ **group**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`> \| `this`*): `this`

*Defined in [extensions/group.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L24)*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> \| `this` |  Set's body as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="ref"></a>

###  ref

▸ **ref**(name: *`string`*): `this`

*Defined in [extensions/group.ts:30](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L30)*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** `this`

___
<a id="reference"></a>

###  reference

▸ **reference**(name: *`string`*): `this`

*Defined in [extensions/group.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L35)*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** `this`

___

