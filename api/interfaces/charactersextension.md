[ReX.js](../README.md) > [CharactersExtension](../interfaces/charactersextension.md)

# Interface: CharactersExtension

RegEx character matching methods ReX.js extension.

## Hierarchy

**CharactersExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [any](charactersextension.md#any)
* [anyButBreak](charactersextension.md#anybutbreak)
* [anyWhitespace](charactersextension.md#anywhitespace)
* [char](charactersextension.md#char)
* [digit](charactersextension.md#digit)
* [range](charactersextension.md#range)
* [set](charactersextension.md#set)
* [whitespace](charactersextension.md#whitespace)
* [wordChar](charactersextension.md#wordchar)

---

## Methods

<a id="any"></a>

###  any

▸ **any**(): `this`

*Defined in [extensions/characters.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L15)*

Matches any character except line breaks and special unicodes.

**Returns:** `this`

___
<a id="anybutbreak"></a>

###  anyButBreak

▸ **anyButBreak**(): `this`

*Defined in [extensions/characters.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L11)*

Matches any character except line breaks and special unicodes.

**Returns:** `this`

___
<a id="anywhitespace"></a>

###  anyWhitespace

▸ **anyWhitespace**(): `this`

*Defined in [extensions/characters.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L19)*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** `this`

___
<a id="char"></a>

###  char

▸ **char**(): `this`

*Defined in [extensions/characters.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L35)*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** `this`

___
<a id="digit"></a>

###  digit

▸ **digit**(): `this`

*Defined in [extensions/characters.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L27)*

Matches any digit.

**Returns:** `this`

___
<a id="range"></a>

###  range

▸ **range**<`T`>(start: *`T`*, end: *`T`*, ...more: *(`string` \| `number`)[]*): `this`

*Defined in [extensions/characters.ts:42](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L42)*

Matches set of chararacters of same type between desired limits.

**Type parameters:**

#### T :  `string` \| `number`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `T` |  Range starting character. |
| end | `T` |  Range ending character of same type e.g. 1,5 or a,f |
| `Rest` more | (`string` \| `number`)[] |  Pass more ranges in form of two arguments pairs. |

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(set: *`string` \| [FuncExpr](funcexpr.md)<`this`>*): `this`

*Defined in [extensions/characters.ts:47](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L47)*

Matches set of characters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| set | `string` \| [FuncExpr](funcexpr.md)<`this`> |  String of characters to be included in set. |

**Returns:** `this`

___
<a id="whitespace"></a>

###  whitespace

▸ **whitespace**(): `this`

*Defined in [extensions/characters.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L23)*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** `this`

___
<a id="wordchar"></a>

###  wordChar

▸ **wordChar**(): `this`

*Defined in [extensions/characters.ts:31](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L31)*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** `this`

___

