[ReX.js](../README.md) > [QuantifiersExtension](../interfaces/quantifiersextension.md)

# Interface: QuantifiersExtension

RegEx quantifiers methods ReX extension.

## Hierarchy

**QuantifiersExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [additional](quantifiersextension.md#additional)
* [alternative](quantifiersextension.md#alternative)
* [plus](quantifiersextension.md#plus)
* [quantify](quantifiersextension.md#quantify)
* [star](quantifiersextension.md#star)
* [unnecessary](quantifiersextension.md#unnecessary)

### Methods

* [more](quantifiersextension.md#more)
* [moreOrNot](quantifiersextension.md#moreornot)
* [optional](quantifiersextension.md#optional)
* [or](quantifiersextension.md#or)
* [withLimits](quantifiersextension.md#withlimits)

---

## Properties

<a id="additional"></a>

###  additional

**● additional**: *[optional](quantifiersextension.md#optional)*

*Defined in extensions/quantifiers.ts:31*

___
<a id="alternative"></a>

###  alternative

**● alternative**: *[or](quantifiersextension.md#or)*

*Defined in extensions/quantifiers.ts:38*

___
<a id="plus"></a>

###  plus

**● plus**: *[more](quantifiersextension.md#more)*

*Defined in extensions/quantifiers.ts:20*

___
<a id="quantify"></a>

###  quantify

**● quantify**: *[withLimits](quantifiersextension.md#withlimits)*

*Defined in extensions/quantifiers.ts:45*

___
<a id="star"></a>

###  star

**● star**: *[moreOrNot](quantifiersextension.md#moreornot)*

*Defined in extensions/quantifiers.ts:25*

___
<a id="unnecessary"></a>

###  unnecessary

**● unnecessary**: *[optional](quantifiersextension.md#optional)*

*Defined in extensions/quantifiers.ts:30*

___

## Methods

<a id="more"></a>

###  more

▸ **more**(): [ReXQuantifier](rexquantifier.md)

*Defined in extensions/quantifiers.ts:19*

Matches 1 or more of preceding tokens.

**Returns:** [ReXQuantifier](rexquantifier.md)

___
<a id="moreornot"></a>

###  moreOrNot

▸ **moreOrNot**(): [ReXQuantifier](rexquantifier.md)

*Defined in extensions/quantifiers.ts:24*

Matches 0 or more of preceding tokens.

**Returns:** [ReXQuantifier](rexquantifier.md)

___
<a id="optional"></a>

###  optional

▸ **optional**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/quantifiers.ts:29*

Makes preceding token optional.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="or"></a>

###  or

▸ **or**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/quantifiers.ts:37*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  *   as string of characters or expression body ( function ). |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="withlimits"></a>

###  withLimits

▸ **withLimits**(lowerLimit: *`number`*, upperLimit: *`number`*): [ReXQuantifier](rexquantifier.md)

*Defined in extensions/quantifiers.ts:44*

Matches more of preceding tokens within given limits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest number of tokens to match. |
| upperLimit | `number` |  Highest number of tokens to match. |

**Returns:** [ReXQuantifier](rexquantifier.md)

___

