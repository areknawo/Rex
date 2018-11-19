[ReX.js](../README.md) > [GroupExtension](../interfaces/groupextension.md)

# Interface: GroupExtension

RegEx grouping-related methods ReX extension.

## Hierarchy

**GroupExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [group](groupextension.md#group)
* [reference](groupextension.md#reference)

### Methods

* [as](groupextension.md#as)
* [capture](groupextension.md#capture)
* [ref](groupextension.md#ref)

---

## Properties

<a id="group"></a>

###  group

**● group**: *[capture](groupextension.md#capture)*

*Defined in extensions/group.ts:20*

___
<a id="reference"></a>

###  reference

**● reference**: *[ref](groupextension.md#ref)*

*Defined in extensions/group.ts:27*

___

## Methods

<a id="as"></a>

###  as

▸ **as**(name: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/group.ts:13*

Sets name of preceding expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name for the previously applied expression. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="capture"></a>

###  capture

▸ **capture**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/group.ts:19*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  Set's body as string of characters or expression body ( function ). |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="ref"></a>

###  ref

▸ **ref**(name: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/group.ts:26*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

