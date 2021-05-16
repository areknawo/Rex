[ReX.js](../README.md) > [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md)

# Interface: EscapedCharactersExtension

RegEx escaped characters matching methods ReX.js extension.

## Hierarchy

**EscapedCharactersExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [carriageReturn](escapedcharactersextension.md#carriagereturn)
* [codeZero](escapedcharactersextension.md#codezero)
* [control](escapedcharactersextension.md#control)
* [enter](escapedcharactersextension.md#enter)
* [formFeed](escapedcharactersextension.md#formfeed)
* [hex](escapedcharactersextension.md#hex)
* [lineFeed](escapedcharactersextension.md#linefeed)
* [octal](escapedcharactersextension.md#octal)
* [tab](escapedcharactersextension.md#tab)
* [unicode](escapedcharactersextension.md#unicode)
* [vTab](escapedcharactersextension.md#vtab)
* [verticalTab](escapedcharactersextension.md#verticaltab)

---

## Methods

<a id="carriagereturn"></a>

###  carriageReturn

▸ **carriageReturn**(): `this`

*Defined in [extensions/escaped.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L11)*

Matches carriage return character ( char code 13 ).

**Returns:** `this`

___
<a id="codezero"></a>

###  codeZero

▸ **codeZero**(): `this`

*Defined in [extensions/escaped.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L15)*

Matches null character ( char code 0 ).

**Returns:** `this`

___
<a id="control"></a>

###  control

▸ **control**(letter: *`string`*): `this`

*Defined in [extensions/escaped.ts:20](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L20)*

Matches given control escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| letter | `string` |  Control letter ( A for char code 1 up to Z for char code 26 ) |

**Returns:** `this`

___
<a id="enter"></a>

###  enter

▸ **enter**(): `this`

*Defined in [extensions/escaped.ts:28](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L28)*

Matches line feed character a.k.a. 'enter' ( char code 10 ).

**Returns:** `this`

___
<a id="formfeed"></a>

###  formFeed

▸ **formFeed**(): `this`

*Defined in [extensions/escaped.ts:32](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L32)*

Matches form feed character ( char code 12 ).

**Returns:** `this`

___
<a id="hex"></a>

###  hex

▸ **hex**(hex: *`string`*): `this`

*Defined in [extensions/escaped.ts:37](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L37)*

Matches given hexadecimal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hex | `string` |  Sting of two hex digits e.g. "ff". |

**Returns:** `this`

___
<a id="linefeed"></a>

###  lineFeed

▸ **lineFeed**(): `this`

*Defined in [extensions/escaped.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L24)*

Matches line feed character a.k.a. 'enter' ( char code 10 ).

**Returns:** `this`

___
<a id="octal"></a>

###  octal

▸ **octal**(oct: *`string`*): `this`

*Defined in [extensions/escaped.ts:42](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L42)*

Matches given octal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| oct | `string` |  Sting of three octal digits e.g. "021" with max being "377". |

**Returns:** `this`

___
<a id="tab"></a>

###  tab

▸ **tab**(): `this`

*Defined in [extensions/escaped.ts:46](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L46)*

Matches tab character ( char code 9 ).

**Returns:** `this`

___
<a id="unicode"></a>

###  unicode

▸ **unicode**(code: *`string`*): `this`

*Defined in [extensions/escaped.ts:51](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L51)*

Matches given unicode escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| code | `string` |  Sting of four ( can be more with extendedUnicodes applied ) hex digits. |

**Returns:** `this`

___
<a id="vtab"></a>

###  vTab

▸ **vTab**(): `this`

*Defined in [extensions/escaped.ts:59](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L59)*

Matches vertical tab character ( char code 11 ).

**Returns:** `this`

___
<a id="verticaltab"></a>

###  verticalTab

▸ **verticalTab**(): `this`

*Defined in [extensions/escaped.ts:55](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L55)*

Matches vertical tab character ( char code 11 ).

**Returns:** `this`

___

