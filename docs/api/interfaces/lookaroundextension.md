[ReX.js](../README.md) > [LookAroundExtension](../interfaces/lookaroundextension.md)

# Interface: LookAroundExtension

RegEx look around methods ReX extension.

## Hierarchy

**LookAroundExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [after](lookaroundextension.md#after)
* [before](lookaroundextension.md#before)

### Methods

* [follow](lookaroundextension.md#follow)
* [precede](lookaroundextension.md#precede)

---

## Properties

<a id="after"></a>

###  after

**● after**: *[follow](lookaroundextension.md#follow)*

*Defined in extensions/look.ts:16*

___
<a id="before"></a>

###  before

**● before**: *[precede](lookaroundextension.md#precede)*

*Defined in extensions/look.ts:22*

___

## Methods

<a id="follow"></a>

###  follow

▸ **follow**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/look.ts:15*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="precede"></a>

###  precede

▸ **precede**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/look.ts:21*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

