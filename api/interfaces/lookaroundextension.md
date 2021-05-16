[ReX.js](../README.md) > [LookAroundExtension](../interfaces/lookaroundextension.md)

# Interface: LookAroundExtension

RegEx look around methods ReX.js extension.

## Hierarchy

**LookAroundExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [after](lookaroundextension.md#after)
* [before](lookaroundextension.md#before)
* [follow](lookaroundextension.md#follow)
* [precede](lookaroundextension.md#precede)

---

## Methods

<a id="after"></a>

###  after

▸ **after**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/look.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L19)*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |

**Returns:** `this`

___
<a id="before"></a>

###  before

▸ **before**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/look.ts:29](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L29)*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** `this`

___
<a id="follow"></a>

###  follow

▸ **follow**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/look.ts:14](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L14)*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |

**Returns:** `this`

___
<a id="precede"></a>

###  precede

▸ **precede**(expr: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/look.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L24)*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](funcexpr.md)<`this`> |  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** `this`

___

