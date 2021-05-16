[ReX.js](../README.md) > [Operation](../classes/operation.md)

# Class: Operation

Class representing operation appendable to ReX.js Matcher.

## Type parameters
#### T :  [ReXer](rexer.md)
## Hierarchy

**Operation**

## Index

### Constructors

* [constructor](operation.md#constructor)

### Properties

* [expr](operation.md#expr)
* [negate](operation.md#negate)

### Methods

* [setClosure](operation.md#setclosure)
* [setExpr](operation.md#setexpr)
* [setNegate](operation.md#setnegate)
* [stringify](operation.md#stringify)

### Object literals

* [closure](operation.md#closure)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Operation**(config: *[OperationConfig](../interfaces/operationconfig.md)<`T`> \| `string` \| `T`*): [Operation](operation.md)

*Defined in [operation.ts:36](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L36)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| config | [OperationConfig](../interfaces/operationconfig.md)<`T`> \| `string` \| `T` |  Operation object or string. |

**Returns:** [Operation](operation.md)

___

## Properties

<a id="expr"></a>

###  expr

**● expr**: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`T`> \| [ReXer](rexer.md)* = ""

*Defined in [operation.ts:25](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L25)*

RegEx part as operation body.

___
<a id="negate"></a>

### `<Optional>` negate

**● negate**: *`undefined` \| `function`*

*Defined in [operation.ts:36](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L36)*

Operation's negate function.

___

## Methods

<a id="setclosure"></a>

###  setClosure

▸ **setClosure**(closure: *`object`*): `void`

*Defined in [operation.ts:61](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L61)*

Sets operation's closures.

**Parameters:**

**closure: `object`**

Object specifying closures.

| Name | Type |
| ------ | ------ |
| `Optional` close | `undefined` \| `string` |
| `Optional` open | `undefined` \| `string` |

**Returns:** `void`

___
<a id="setexpr"></a>

###  setExpr

▸ **setExpr**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`T`> \| [ReXer](rexer.md)*): `void`

*Defined in [operation.ts:54](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L54)*

Sets body of operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`T`> \| [ReXer](rexer.md) |  Expression to set as body. |

**Returns:** `void`

___
<a id="setnegate"></a>

###  setNegate

▸ **setNegate**(negate: *`function`*): `void`

*Defined in [operation.ts:69](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L69)*

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

*Defined in [operation.ts:76](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L76)*

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

*Defined in [operation.ts:29](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L29)*

Operation's closures.

<a id="closure.close"></a>

####  close

**● close**: *`string`* = ""

*Defined in [operation.ts:31](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L31)*

___
<a id="closure.open"></a>

####  open

**● open**: *`string`* = ""

*Defined in [operation.ts:30](https://github.com/areknawo/Rex/blob/04d02e1/src/operation.ts#L30)*

___

___

