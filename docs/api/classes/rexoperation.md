[ReX.js](../README.md) > [ReXOperation](../classes/rexoperation.md)

# Class: ReXOperation

Class representing operation appendable to ReX Matcher.

## Type parameters
#### T 
## Hierarchy

**ReXOperation**

## Index

### Constructors

* [constructor](rexoperation.md#constructor)

### Properties

* [expr](rexoperation.md#expr)
* [negate](rexoperation.md#negate)

### Methods

* [setClosure](rexoperation.md#setclosure)
* [setExpr](rexoperation.md#setexpr)
* [setNegate](rexoperation.md#setnegate)
* [stringify](rexoperation.md#stringify)

### Object literals

* [closure](rexoperation.md#closure)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReXOperation**(config: * [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`T`> &#124; `string`*): [ReXOperation](rexoperation.md)

*Defined in operation.ts:36*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| config |  [ReXOperationConfig](../interfaces/rexoperationconfig.md)<`T`> &#124; `string`|  Operation object or string. |

**Returns:** [ReXOperation](rexoperation.md)

___

## Properties

<a id="expr"></a>

###  expr

**● expr**: * `string` &#124; [ReXFuncExpr](../interfaces/rexfuncexpr.md)<`T`>
* = ""

*Defined in operation.ts:25*

RegEx part as operation body.

___
<a id="negate"></a>

### `<Optional>` negate

**● negate**: * `undefined` &#124; `function`
*

*Defined in operation.ts:36*

Operation's negate function.

___

## Methods

<a id="setclosure"></a>

###  setClosure

▸ **setClosure**(closure: *`object`*): `void`

*Defined in operation.ts:61*

Sets operation's closures.

**Parameters:**

**closure: `object`**

Object specifying closures.

| Name | Type |
| ------ | ------ |
| `Optional` close |  `undefined` &#124; `string`|
| `Optional` open |  `undefined` &#124; `string`|

**Returns:** `void`

___
<a id="setexpr"></a>

###  setExpr

▸ **setExpr**(expr: * `string` &#124; [ReXFuncExpr](../interfaces/rexfuncexpr.md)<`T`>*): `void`

*Defined in operation.ts:54*

Sets body of operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](../interfaces/rexfuncexpr.md)<`T`>|  Expression to set as body. |

**Returns:** `void`

___
<a id="setnegate"></a>

###  setNegate

▸ **setNegate**(negate: *`function`*): `void`

*Defined in operation.ts:69*

Sets operation's negate function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| negate | `function` |  Negate function. |

**Returns:** `void`

___
<a id="stringify"></a>

###  stringify

▸ **stringify**(rex: *[ReXer](rexer.md)*): `string`

*Defined in operation.ts:76*

Transforms operation into its string form.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rex | [ReXer](rexer.md) |  Rexer instance for executing function expressions. |

**Returns:** `string`

___

## Object literals

<a id="closure"></a>

###  closure

**closure**: *`object`*

*Defined in operation.ts:29*

Operation's closures.

<a id="closure.close"></a>

####  close

**● close**: *`string`* = ""

*Defined in operation.ts:31*

___
<a id="closure.open"></a>

####  open

**● open**: *`string`* = ""

*Defined in operation.ts:30*

___

___

