[ReX.js](../README.md) > [CharactersExtension](../interfaces/charactersextension.md)

# Interface: CharactersExtension

RegEx character matching methods ReX extension.

## Hierarchy

**CharactersExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [any](charactersextension.md#any)
* [char](charactersextension.md#char)
* [whitespace](charactersextension.md#whitespace)

### Methods

* [anyButBreak](charactersextension.md#anybutbreak)
* [anyWhitespace](charactersextension.md#anywhitespace)
* [digit](charactersextension.md#digit)
* [range](charactersextension.md#range)
* [set](charactersextension.md#set)
* [wordChar](charactersextension.md#wordchar)

---

## Properties

<a id="any"></a>

###  any

**● any**: *[anyButBreak](charactersextension.md#anybutbreak)*

*Defined in extensions/characters.ts:13*

___
<a id="char"></a>

###  char

**● char**: *[wordChar](charactersextension.md#wordchar)*

*Defined in extensions/characters.ts:27*

___
<a id="whitespace"></a>

###  whitespace

**● whitespace**: *[anyWhitespace](charactersextension.md#anywhitespace)*

*Defined in extensions/characters.ts:18*

___

## Methods

<a id="anybutbreak"></a>

###  anyButBreak

▸ **anyButBreak**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:12*

Matches any character except line breaks.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="anywhitespace"></a>

###  anyWhitespace

▸ **anyWhitespace**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:17*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="digit"></a>

###  digit

▸ **digit**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:22*

Matches any digit.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="range"></a>

###  range

▸ **range**<`T`>(start: *`T`*, end: *`T`*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:33*

Matches set of chararacters of same type between desired limits.

**Type parameters:**

#### T :   `string` &#124; `number`

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `T` |  Range starting character. |
| end | `T` |  Range ending character of same type e.g. 1,5 or a,f |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="set"></a>

###  set

▸ **set**(set: * `string` &#124; `function`*): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:38*

Matches set of characters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| set |  `string` &#124; `function`|  String of characters to be included in set. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="wordchar"></a>

###  wordChar

▸ **wordChar**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/characters.ts:26*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

