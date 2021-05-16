[ReX.js](../README.md) > [QuantifiersExtension](../interfaces/quantifiersextension.md)

# Interface: QuantifiersExtension

RegEx quantifiers methods ReX.js extension.

## Hierarchy

**QuantifiersExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [additional](quantifiersextension.md#additional)
* [alternative](quantifiersextension.md#alternative)
* [lazy](quantifiersextension.md#lazy)
* [minimum](quantifiersextension.md#minimum)
* [more](quantifiersextension.md#more)
* [moreOrNot](quantifiersextension.md#moreornot)
* [optional](quantifiersextension.md#optional)
* [or](quantifiersextension.md#or)
* [plus](quantifiersextension.md#plus)
* [quantify](quantifiersextension.md#quantify)
* [star](quantifiersextension.md#star)
* [unnecessary](quantifiersextension.md#unnecessary)
* [withLimits](quantifiersextension.md#withlimits)

---

## Methods

<a id="additional"></a>

###  additional

▸ **additional**(): `this`

*Defined in [extensions/quantifiers.ts:43](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L43)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="alternative"></a>

###  alternative

▸ **alternative**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/quantifiers.ts:53](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L53)*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |  *   as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="lazy"></a>

###  lazy

▸ **lazy**(): `this`

*Defined in [extensions/quantifiers.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L27)*

Makes quantifiers match as little characters as possible.

**Returns:** `this`

___
<a id="minimum"></a>

###  minimum

▸ **minimum**(): `this`

*Defined in [extensions/quantifiers.ts:31](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L31)*

Makes quantifiers match as little characters as possible.

**Returns:** `this`

___
<a id="more"></a>

###  more

▸ **more**(): `this`

*Defined in [extensions/quantifiers.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L11)*

Matches 1 or more of preceding tokens.

**Returns:** `this`

___
<a id="moreornot"></a>

###  moreOrNot

▸ **moreOrNot**(): `this`

*Defined in [extensions/quantifiers.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L19)*

Matches 0 or more of preceding tokens.

**Returns:** `this`

___
<a id="optional"></a>

###  optional

▸ **optional**(): `this`

*Defined in [extensions/quantifiers.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L35)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="or"></a>

###  or

▸ **or**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/quantifiers.ts:48](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L48)*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |  *   as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="plus"></a>

###  plus

▸ **plus**(): `this`

*Defined in [extensions/quantifiers.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L15)*

Matches 1 or more of preceding tokens.

**Returns:** `this`

___
<a id="quantify"></a>

###  quantify

▸ **quantify**(lowerLimit: *`number`*, upperLimit?: *`undefined` \| `number`*): `this`

*Defined in [extensions/quantifiers.ts:65](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L65)*

Matches more of preceding tokens within given limits or for specific number.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest or specific number of tokens to match. |
| `Optional` upperLimit | `undefined` \| `number` |  Highest number of tokens to match - optional for creating range. |

**Returns:** `this`

___
<a id="star"></a>

###  star

▸ **star**(): `this`

*Defined in [extensions/quantifiers.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L23)*

Matches 0 or more of preceding tokens.

**Returns:** `this`

___
<a id="unnecessary"></a>

###  unnecessary

▸ **unnecessary**(): `this`

*Defined in [extensions/quantifiers.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L39)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="withlimits"></a>

###  withLimits

▸ **withLimits**(lowerLimit: *`number`*, upperLimit: *`number`*): `this`

*Defined in [extensions/quantifiers.ts:59](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L59)*

Matches more of preceding tokens within given limits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest number of tokens to match. |
| upperLimit | `number` |  Highest number of tokens to match. |

**Returns:** `this`

___

