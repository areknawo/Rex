[ReX.js](../README.md) > [Matcher](../classes/matcher.md)

# Class: Matcher

Class for constructing matching expressions.

## Hierarchy

 [ReXer](rexer.md)

 [AnchorsExtension](../interfaces/anchorsextension.md)

 [CharactersExtension](../interfaces/charactersextension.md)

 [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md)

 [FlagsExtension](../interfaces/flagsextension.md)

 [GroupExtension](../interfaces/groupextension.md)

 [LookAroundExtension](../interfaces/lookaroundextension.md)

 [QuantifiersExtension](../interfaces/quantifiersextension.md)

**↳ Matcher**

## Index

### Constructors

* [constructor](matcher.md#constructor)

### Properties

* [lastOperation](matcher.md#lastoperation)
* [AnchorsExtension](matcher.md#anchorsextension)
* [CharactersExtension](matcher.md#charactersextension)
* [EscapedCharactersExtension](matcher.md#escapedcharactersextension)
* [FlagsExtension](matcher.md#flagsextension)
* [GroupExtension](matcher.md#groupextension)
* [LookAroundExtension](matcher.md#lookaroundextension)
* [QuantifiersExtension](matcher.md#quantifiersextension)

### Methods

* [add](matcher.md#add)
* [addFlag](matcher.md#addflag)
* [additional](matcher.md#additional)
* [after](matcher.md#after)
* [alternative](matcher.md#alternative)
* [any](matcher.md#any)
* [anyButBreak](matcher.md#anybutbreak)
* [anyWhitespace](matcher.md#anywhitespace)
* [as](matcher.md#as)
* [before](matcher.md#before)
* [begin](matcher.md#begin)
* [boundary](matcher.md#boundary)
* [capture](matcher.md#capture)
* [carriageReturn](matcher.md#carriagereturn)
* [char](matcher.md#char)
* [codeZero](matcher.md#codezero)
* [containsFlag](matcher.md#containsflag)
* [control](matcher.md#control)
* [createChannel](matcher.md#createchannel)
* [createSnippet](matcher.md#createsnippet)
* [digit](matcher.md#digit)
* [end](matcher.md#end)
* [enter](matcher.md#enter)
* [extendedUnicodes](matcher.md#extendedunicodes)
* [find](matcher.md#find)
* [follow](matcher.md#follow)
* [formFeed](matcher.md#formfeed)
* [g](matcher.md#g)
* [getExpr](matcher.md#getexpr)
* [global](matcher.md#global)
* [globalize](matcher.md#globalize)
* [group](matcher.md#group)
* [hex](matcher.md#hex)
* [i](matcher.md#i)
* [ignoreCase](matcher.md#ignorecase)
* [insertSnippet](matcher.md#insertsnippet)
* [lazy](matcher.md#lazy)
* [lineFeed](matcher.md#linefeed)
* [m](matcher.md#m)
* [match](matcher.md#match)
* [matchAll](matcher.md#matchall)
* [minimum](matcher.md#minimum)
* [more](matcher.md#more)
* [moreOrNot](matcher.md#moreornot)
* [multiline](matcher.md#multiline)
* [negate](matcher.md#negate)
* [octal](matcher.md#octal)
* [optional](matcher.md#optional)
* [or](matcher.md#or)
* [plus](matcher.md#plus)
* [precede](matcher.md#precede)
* [quantify](matcher.md#quantify)
* [range](matcher.md#range)
* [ref](matcher.md#ref)
* [reference](matcher.md#reference)
* [removeFlag](matcher.md#removeflag)
* [repeat](matcher.md#repeat)
* [search](matcher.md#search)
* [set](matcher.md#set)
* [setChannel](matcher.md#setchannel)
* [setLastIndex](matcher.md#setlastindex)
* [singleByIndex](matcher.md#singlebyindex)
* [split](matcher.md#split)
* [star](matcher.md#star)
* [sticky](matcher.md#sticky)
* [stringifyChannel](matcher.md#stringifychannel)
* [stringifyExpression](matcher.md#stringifyexpression)
* [tab](matcher.md#tab)
* [test](matcher.md#test)
* [u](matcher.md#u)
* [unicode](matcher.md#unicode)
* [unnecessary](matcher.md#unnecessary)
* [useExtension](matcher.md#useextension)
* [useMethod](matcher.md#usemethod)
* [vTab](matcher.md#vtab)
* [verticalTab](matcher.md#verticaltab)
* [whitespace](matcher.md#whitespace)
* [withLimits](matcher.md#withlimits)
* [wordBoundary](matcher.md#wordboundary)
* [wordChar](matcher.md#wordchar)
* [y](matcher.md#y)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Matcher**(): [Matcher](matcher.md)

*Defined in [matcher.ts:22](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L22)*

**Returns:** [Matcher](matcher.md)

___

## Properties

<a id="lastoperation"></a>

###  lastOperation

**● lastOperation**: *[Operation](operation.md)<`this`> \| `null`* =  null

*Inherited from [ReXer](rexer.md).[lastOperation](rexer.md#lastoperation)*

*Defined in [rexer.ts:21](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L21)*

Last added operation to main channel.

___
<a id="anchorsextension"></a>

### `<Static>` AnchorsExtension

**● AnchorsExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: 'begin',
    func() {
      this.add('^')

      return this
    },
  },
  {
    name: 'end',
    func() {
      this.add('$')

      return this
    },
  },
  {
    name: ['wordBoundary', 'boundary'],
    func() {
      this.add({
        expr: '\\b',
        negate() {
          this.setExpr('\\B')
        },
      })

      return this
    },
  },
]

*Defined in [extensions/anchors.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L27)*

RegEx anchor-related methods ReX.js extension.

___
<a id="charactersextension"></a>

### `<Static>` CharactersExtension

**● CharactersExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: 'set',
    func(set: string | FuncExpr<ReXer>) {
      let expr
      if (typeof set === 'string') {
        expr = set.replace(/\\|]|-/g, '\\$&')
      } else {
        expr = set
      }
      this.add({
        expr,
        closure: {
          close: ']',
          open: '[',
        },
        negate() {
          this.setClosure({
            close: ']',
            open: '[^',
          })
        },
      })

      return this
    },
  },
  {
    name: 'range',
    func(start: string | number, end: string | number, ...more: (string | number)[]) {
      let expr = `${start}-${end}`
      const length = more ? more.length : 0
      if (length > 0 && length % 2 === 0) {
        for (let i = 0; i < length; i += 2) {
          expr += `${more[i]}-${more[i + 1]}`
        }
      } else if (length % 2 !== 0) {
        console.warn('Invalid range - omitted!')
      }
      this.add({
        expr,
        closure: {
          close: ']',
          open: '[',
        },
        negate() {
          this.setClosure({
            close: ']',
            open: '[^',
          })
        },
      })

      return this
    },
  },
  {
    name: ['any', 'anyButBreak'],
    func() {
      this.add('.')

      return this
    },
  },
  {
    name: ['char', 'wordChar'],
    func() {
      this.add({
        expr: '\\w',
        negate() {
          this.setExpr('\\W')
        },
      })

      return this
    },
  },
  {
    name: 'digit',
    func() {
      this.add({
        expr: '\\d',
        negate() {
          this.setExpr('\\D')
        },
      })

      return this
    },
  },
  {
    name: ['whitespace', 'anyWhitespace'],
    func() {
      this.add({
        expr: '\\s',
        negate() {
          this.setExpr('\\S')
        },
      })

      return this
    },
  },
]

*Defined in [extensions/characters.ts:53](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L53)*

RegEx character matching methods ReX.js extension.

___
<a id="escapedcharactersextension"></a>

### `<Static>` EscapedCharactersExtension

**● EscapedCharactersExtension**: *[Method](../interfaces/method.md)<[Matcher](matcher.md)>[]* =  [
  {
    name: 'octal',
    func(oct: string) {
      const maxOctDigits: number = 3
      const maxOctNumber: number = 377
      if (oct.length === maxOctDigits && Number(oct) <= maxOctNumber) {
        this.add(`\\${oct}`)
      } else {
        console.warn('Too big octal number - omitted!')
      }

      return this
    },
  },
  {
    name: 'hex',
    func(hex: string) {
      const maxHexDigits: number = 2
      if (hex.length === maxHexDigits) {
        this.add(`\\x${hex}`)
      } else {
        console.warn('Not enough characters supplied - omitted!')
      }

      return this
    },
  },
  {
    name: 'unicode',
    func(code: string) {
      const maxHexDigits: number = 4
      const containsUFlag = this.containsFlag('u')
      if (code.length <= maxHexDigits && !containsUFlag) {
        this.add(`\\u${code}`)
      } else if (containsUFlag) {
        this.add(`\\u{${code}}`)
      } else {
        console.warn('Too many characters supplied without `u` flag applied - omitted!')
      }

      return this
    },
  },
  {
    name: 'control',
    func(letter: string) {
      if (letter.length === 1) {
        this.add(`\\c${letter}`)
      } else {
        console.warn('Character was not supplied correctly - omitted!')
      }

      return this
    },
  },
  {
    name: 'tab',
    func() {
      this.add('\\t')

      return this
    },
  },
  {
    name: ['enter', 'lineFeed'],
    func() {
      this.add('\\n')

      return this
    },
  },
  {
    name: ['vTab', 'verticalTab'],
    func() {
      this.add('\\v')

      return this
    },
  },
  {
    name: 'formFeed',
    /**
     * Matches form feed character ( char code 12 ).
     */
    func() {
      this.add('\\f')

      return this
    },
  },
  {
    name: 'carriageReturn',
    func() {
      this.add('\\r')

      return this
    },
  },
  {
    name: 'codeZero',
    func() {
      this.add('\\0')

      return this
    },
  },
]

*Defined in [extensions/escaped.ts:65](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L65)*

RegEx escaped characters matching methods ReX.js extension.

___
<a id="flagsextension"></a>

### `<Static>` FlagsExtension

**● FlagsExtension**: *[Method](../interfaces/method.md)<[Matcher](matcher.md)>[]* =  [
  {
    name: ['ignoreCase', 'i'],
    func() {
      this.addFlag('i')

      return this
    },
  },
  {
    name: ['globalize', 'g', 'global'],
    func() {
      this.addFlag('g')

      return this
    },
  },
  {
    name: ['extendedUnicodes', 'u'],
    func() {
      this.addFlag('u')

      return this
    },
  },
  {
    name: ['multiline', 'm'],
    func() {
      this.addFlag('m')

      return this
    },
  },
  {
    name: ['singleByIndex', 'y', 'sticky'],
    func() {
      this.addFlag('y')

      return this
    },
  },
]

*Defined in [extensions/flags.ts:73](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L73)*

RegEx flags-related methods ReX.js extension.

___
<a id="groupextension"></a>

### `<Static>` GroupExtension

**● GroupExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: ['capture', 'group'],
    func(expr: string | FuncExpr<ReXer> | ReXer) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(',
        },
        negate() {
          this.setClosure({
            close: ')',
            open: '(?:',
          })
        },
      })

      return this
    },
  },
  {
    name: ['ref', 'reference'],
    func(name: string) {
      this.add(`\\k<${name}>`)

      return this
    },
  },
  {
    name: 'as',
    func(name: string) {
      const { open, close } = this.lastOperation
        ? this.lastOperation.closure
        : { open: '', close: '' }
      if (this.lastOperation && open === '(' && close === ')') {
        this.lastOperation.setClosure({
          open: `(?<${name}>`,
        })
      } else {
        if (this.lastOperation) {
          this.lastOperation.setClosure({
            open: `(?<${name}>${open}`,
            close: `${close})`,
          })
        } else {
          console.warn('No operation to be referenced - omitted!')
        }
      }

      return this
    },
  },
]

*Defined in [extensions/group.ts:40](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L40)*

RegEx grouping-related methods ReX.js extension.

___
<a id="lookaroundextension"></a>

### `<Static>` LookAroundExtension

**● LookAroundExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: ['follow', 'after'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(?=',
        },
        negate() {
          this.setClosure({ open: '(?!' })
        },
      })

      return this
    },
  },
  {
    name: ['precede', 'before'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add({
        expr,
        closure: {
          close: ')',
          open: '(?<=',
        },
        negate() {
          this.setClosure({ open: '(?<!' })
        },
      })

      return this
    },
  },
]

*Defined in [extensions/look.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L35)*

RegEx look around methods ReX.js extension.

___
<a id="quantifiersextension"></a>

### `<Static>` QuantifiersExtension

**● QuantifiersExtension**: *[Method](../interfaces/method.md)<[ReXer](rexer.md)>[]* =  [
  {
    name: ['or', 'alternative'],
    func(expr: string | FuncExpr<ReXer>) {
      this.add('|')
      this.add({
        expr,
      })

      return this
    },
  },
  {
    name: ['lazy', 'minimum'],
    func() {
      this.add('?')

      return this
    },
  },
  {
    name: ['optional', 'unnecessary', 'additional'],
    func() {
      this.add('?')

      return this
    },
  },
  {
    name: ['withLimits', 'quantify'],
    func(lowerLimit: number, upperLimit?: number) {
      if (upperLimit) {
        this.add(`{${lowerLimit},${upperLimit}}`)
      } else {
        this.add(`{${lowerLimit}}`)
      }

      return this
    },
  },
  {
    name: ['moreOrNot', 'star'],
    func() {
      this.add('*')

      return this
    },
  },
  {
    name: ['more', 'plus'],
    func() {
      this.add('+')

      return this
    },
  },
]

*Defined in [extensions/quantifiers.ts:70](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L70)*

RegEx quantifiers methods ReX.js extension.

___

## Methods

<a id="add"></a>

###  add

▸ **add**(operationConfig: *[OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this`*): `this`

*Inherited from [ReXer](rexer.md).[add](rexer.md#add)*

*Defined in [rexer.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L39)*

Appends operation to current channel.

**Parameters:**

| Name | Type |
| ------ | ------ |
| operationConfig | [OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this` |

**Returns:** `this`

___
<a id="addflag"></a>

###  addFlag

▸ **addFlag**(flag: *`string`*): `this`

*Defined in [matcher.ts:117](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L117)*

Appends given flag to regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| flag | `string` |  Flag to append. |

**Returns:** `this`

___
<a id="additional"></a>

###  additional

▸ **additional**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[additional](../interfaces/quantifiersextension.md#additional)*

*Defined in [extensions/quantifiers.ts:43](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L43)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="after"></a>

###  after

▸ **after**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [LookAroundExtension](../interfaces/lookaroundextension.md).[after](../interfaces/lookaroundextension.md#after)*

*Defined in [extensions/look.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L19)*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |

**Returns:** `this`

___
<a id="alternative"></a>

###  alternative

▸ **alternative**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[alternative](../interfaces/quantifiersextension.md#alternative)*

*Defined in [extensions/quantifiers.ts:53](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L53)*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |  *   as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="any"></a>

###  any

▸ **any**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[any](../interfaces/charactersextension.md#any)*

*Defined in [extensions/characters.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L15)*

Matches any character except line breaks and special unicodes.

**Returns:** `this`

___
<a id="anybutbreak"></a>

###  anyButBreak

▸ **anyButBreak**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[anyButBreak](../interfaces/charactersextension.md#anybutbreak)*

*Defined in [extensions/characters.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L11)*

Matches any character except line breaks and special unicodes.

**Returns:** `this`

___
<a id="anywhitespace"></a>

###  anyWhitespace

▸ **anyWhitespace**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[anyWhitespace](../interfaces/charactersextension.md#anywhitespace)*

*Defined in [extensions/characters.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L19)*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** `this`

___
<a id="as"></a>

###  as

▸ **as**(name: *`string`*): `this`

*Inherited from [GroupExtension](../interfaces/groupextension.md).[as](../interfaces/groupextension.md#as)*

*Defined in [extensions/group.ts:12](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L12)*

Sets name of preceding expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name for the previously applied expression. |

**Returns:** `this`

___
<a id="before"></a>

###  before

▸ **before**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [LookAroundExtension](../interfaces/lookaroundextension.md).[before](../interfaces/lookaroundextension.md#before)*

*Defined in [extensions/look.ts:29](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L29)*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** `this`

___
<a id="begin"></a>

###  begin

▸ **begin**(): `this`

*Inherited from [AnchorsExtension](../interfaces/anchorsextension.md).[begin](../interfaces/anchorsextension.md#begin)*

*Defined in [extensions/anchors.ts:10](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L10)*

Matches beginning of passed string or line ( if multiline is applied ).

**Returns:** `this`

___
<a id="boundary"></a>

###  boundary

▸ **boundary**(): `this`

*Inherited from [AnchorsExtension](../interfaces/anchorsextension.md).[boundary](../interfaces/anchorsextension.md#boundary)*

*Defined in [extensions/anchors.ts:22](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L22)*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** `this`

___
<a id="capture"></a>

###  capture

▸ **capture**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> \| `this`*): `this`

*Inherited from [GroupExtension](../interfaces/groupextension.md).[capture](../interfaces/groupextension.md#capture)*

*Defined in [extensions/group.ts:18](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L18)*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> \| `this` |  Set's body as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="carriagereturn"></a>

###  carriageReturn

▸ **carriageReturn**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[carriageReturn](../interfaces/escapedcharactersextension.md#carriagereturn)*

*Defined in [extensions/escaped.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L11)*

Matches carriage return character ( char code 13 ).

**Returns:** `this`

___
<a id="char"></a>

###  char

▸ **char**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[char](../interfaces/charactersextension.md#char)*

*Defined in [extensions/characters.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L35)*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** `this`

___
<a id="codezero"></a>

###  codeZero

▸ **codeZero**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[codeZero](../interfaces/escapedcharactersextension.md#codezero)*

*Defined in [extensions/escaped.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L15)*

Matches null character ( char code 0 ).

**Returns:** `this`

___
<a id="containsflag"></a>

###  containsFlag

▸ **containsFlag**(flag: *`string`*): `boolean`

*Defined in [matcher.ts:144](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L144)*

Checks if expression contains given flag.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| flag | `string` |  Flag to check. |

**Returns:** `boolean`
If expression contains flag.

___
<a id="control"></a>

###  control

▸ **control**(letter: *`string`*): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[control](../interfaces/escapedcharactersextension.md#control)*

*Defined in [extensions/escaped.ts:20](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L20)*

Matches given control escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| letter | `string` |  Control letter ( A for char code 1 up to Z for char code 26 ) |

**Returns:** `this`

___
<a id="createchannel"></a>

###  createChannel

▸ **createChannel**(): `number`

*Inherited from [ReXer](rexer.md).[createChannel](rexer.md#createchannel)*

*Defined in [rexer.ts:136](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L136)*

Creates new operations channel.

**Returns:** `number`
New channel's index.

___
<a id="createsnippet"></a>

###  createSnippet

▸ **createSnippet**(name: *`string`*, snippet: *[OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this`*): `this`

*Inherited from [ReXer](rexer.md).[createSnippet](rexer.md#createsnippet)*

*Defined in [rexer.ts:92](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L92)*

Creates snippet for given operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |
| snippet | [OperationConfig](../interfaces/operationconfig.md)<`this`> \| `string` \| `this` |  Operation's snippet. |

**Returns:** `this`

___
<a id="digit"></a>

###  digit

▸ **digit**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[digit](../interfaces/charactersextension.md#digit)*

*Defined in [extensions/characters.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L27)*

Matches any digit.

**Returns:** `this`

___
<a id="end"></a>

###  end

▸ **end**(): `this`

*Inherited from [AnchorsExtension](../interfaces/anchorsextension.md).[end](../interfaces/anchorsextension.md#end)*

*Defined in [extensions/anchors.ts:14](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L14)*

Matches ending of passed string or line ( if multiline is applied ).

**Returns:** `this`

___
<a id="enter"></a>

###  enter

▸ **enter**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[enter](../interfaces/escapedcharactersextension.md#enter)*

*Defined in [extensions/escaped.ts:28](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L28)*

Matches line feed character a.k.a. 'enter' ( char code 10 ).

**Returns:** `this`

___
<a id="extendedunicodes"></a>

###  extendedUnicodes

▸ **extendedUnicodes**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[extendedUnicodes](../interfaces/flagsextension.md#extendedunicodes)*

*Defined in [extensions/flags.ts:12](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L12)*

Allows extended use of unicodes. See browser support!

**Returns:** `this`

___
<a id="find"></a>

###  find

▸ **find**(str: *`string`*): `this`

*Defined in [matcher.ts:95](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L95)*

Inserts given texts to regEx (standard strings only - no regex). Standard string characters are automatically escaped.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  RegEx string to append. |

**Returns:** `this`

___
<a id="follow"></a>

###  follow

▸ **follow**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [LookAroundExtension](../interfaces/lookaroundextension.md).[follow](../interfaces/lookaroundextension.md#follow)*

*Defined in [extensions/look.ts:14](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L14)*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |

**Returns:** `this`

___
<a id="formfeed"></a>

###  formFeed

▸ **formFeed**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[formFeed](../interfaces/escapedcharactersextension.md#formfeed)*

*Defined in [extensions/escaped.ts:32](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L32)*

Matches form feed character ( char code 12 ).

**Returns:** `this`

___
<a id="g"></a>

###  g

▸ **g**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[g](../interfaces/flagsextension.md#g)*

*Defined in [extensions/flags.ts:30](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L30)*

Allows to regiser more than 1 matches.

**Returns:** `this`

___
<a id="getexpr"></a>

###  getExpr

▸ **getExpr**(): `string`

*Inherited from [ReXer](rexer.md).[getExpr](rexer.md#getexpr)*

*Defined in [rexer.ts:61](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L61)*

Returns constructed matching expression.

**Returns:** `string`

___
<a id="global"></a>

###  global

▸ **global**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[global](../interfaces/flagsextension.md#global)*

*Defined in [extensions/flags.ts:26](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L26)*

Allows to regiser more than 1 matches.

**Returns:** `this`

___
<a id="globalize"></a>

###  globalize

▸ **globalize**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[globalize](../interfaces/flagsextension.md#globalize)*

*Defined in [extensions/flags.ts:22](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L22)*

Allows to regiser more than 1 matches.

**Returns:** `this`

___
<a id="group"></a>

###  group

▸ **group**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> \| `this`*): `this`

*Inherited from [GroupExtension](../interfaces/groupextension.md).[group](../interfaces/groupextension.md#group)*

*Defined in [extensions/group.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L24)*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> \| `this` |  Set's body as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="hex"></a>

###  hex

▸ **hex**(hex: *`string`*): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[hex](../interfaces/escapedcharactersextension.md#hex)*

*Defined in [extensions/escaped.ts:37](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L37)*

Matches given hexadecimal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hex | `string` |  Sting of two hex digits e.g. "ff". |

**Returns:** `this`

___
<a id="i"></a>

###  i

▸ **i**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[i](../interfaces/flagsextension.md#i)*

*Defined in [extensions/flags.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L39)*

Disables case sensitivity.

**Returns:** `this`

___
<a id="ignorecase"></a>

###  ignoreCase

▸ **ignoreCase**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[ignoreCase](../interfaces/flagsextension.md#ignorecase)*

*Defined in [extensions/flags.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L35)*

Disables case sensitivity.

**Returns:** `this`

___
<a id="insertsnippet"></a>

###  insertSnippet

▸ **insertSnippet**(name: *`string`*): `this`

*Inherited from [ReXer](rexer.md).[insertSnippet](rexer.md#insertsnippet)*

*Defined in [rexer.ts:101](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L101)*

Inserts specified snippet in expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |

**Returns:** `this`

___
<a id="lazy"></a>

###  lazy

▸ **lazy**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[lazy](../interfaces/quantifiersextension.md#lazy)*

*Defined in [extensions/quantifiers.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L27)*

Makes quantifiers match as little characters as possible.

**Returns:** `this`

___
<a id="linefeed"></a>

###  lineFeed

▸ **lineFeed**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[lineFeed](../interfaces/escapedcharactersextension.md#linefeed)*

*Defined in [extensions/escaped.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L24)*

Matches line feed character a.k.a. 'enter' ( char code 10 ).

**Returns:** `this`

___
<a id="m"></a>

###  m

▸ **m**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[m](../interfaces/flagsextension.md#m)*

*Defined in [extensions/flags.ts:48](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L48)*

Takes into account new lines.

**Returns:** `this`

___
<a id="match"></a>

###  match

▸ **match**(str: *`string`*): `null` \| [Result](../interfaces/result.md)

*Defined in [matcher.ts:48](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L48)*

Matches string against regEx and returns result as array. Similar to 'RegExp.exec()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `null` \| [Result](../interfaces/result.md)

___
<a id="matchall"></a>

###  matchAll

▸ **matchAll**(str: *`string`*): `null` \| [Result](../interfaces/result.md)[]

*Defined in [matcher.ts:57](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L57)*

Matches all matches in string for regEx and returns array of result arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `null` \| [Result](../interfaces/result.md)[]

___
<a id="minimum"></a>

###  minimum

▸ **minimum**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[minimum](../interfaces/quantifiersextension.md#minimum)*

*Defined in [extensions/quantifiers.ts:31](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L31)*

Makes quantifiers match as little characters as possible.

**Returns:** `this`

___
<a id="more"></a>

###  more

▸ **more**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[more](../interfaces/quantifiersextension.md#more)*

*Defined in [extensions/quantifiers.ts:11](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L11)*

Matches 1 or more of preceding tokens.

**Returns:** `this`

___
<a id="moreornot"></a>

###  moreOrNot

▸ **moreOrNot**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[moreOrNot](../interfaces/quantifiersextension.md#moreornot)*

*Defined in [extensions/quantifiers.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L19)*

Matches 0 or more of preceding tokens.

**Returns:** `this`

___
<a id="multiline"></a>

###  multiline

▸ **multiline**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[multiline](../interfaces/flagsextension.md#multiline)*

*Defined in [extensions/flags.ts:44](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L44)*

Takes into account new lines.

**Returns:** `this`

___
<a id="negate"></a>

###  negate

▸ **negate**(): `this`

*Defined in [matcher.ts:104](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L104)*

Negates last appended operation.

**Returns:** `this`

___
<a id="octal"></a>

###  octal

▸ **octal**(oct: *`string`*): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[octal](../interfaces/escapedcharactersextension.md#octal)*

*Defined in [extensions/escaped.ts:42](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L42)*

Matches given octal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| oct | `string` |  Sting of three octal digits e.g. "021" with max being "377". |

**Returns:** `this`

___
<a id="optional"></a>

###  optional

▸ **optional**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[optional](../interfaces/quantifiersextension.md#optional)*

*Defined in [extensions/quantifiers.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L35)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="or"></a>

###  or

▸ **or**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[or](../interfaces/quantifiersextension.md#or)*

*Defined in [extensions/quantifiers.ts:48](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L48)*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |  *   as string of characters or expression body ( function ). |

**Returns:** `this`

___
<a id="plus"></a>

###  plus

▸ **plus**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[plus](../interfaces/quantifiersextension.md#plus)*

*Defined in [extensions/quantifiers.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L15)*

Matches 1 or more of preceding tokens.

**Returns:** `this`

___
<a id="precede"></a>

###  precede

▸ **precede**(expr: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [LookAroundExtension](../interfaces/lookaroundextension.md).[precede](../interfaces/lookaroundextension.md#precede)*

*Defined in [extensions/look.ts:24](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/look.ts#L24)*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** `this`

___
<a id="quantify"></a>

###  quantify

▸ **quantify**(lowerLimit: *`number`*, upperLimit?: *`undefined` \| `number`*): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[quantify](../interfaces/quantifiersextension.md#quantify)*

*Defined in [extensions/quantifiers.ts:65](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L65)*

Matches more of preceding tokens within given limits or for specific number.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest or specific number of tokens to match. |
| `Optional` upperLimit | `undefined` \| `number` |  Highest number of tokens to match - optional for creating range. |

**Returns:** `this`

___
<a id="range"></a>

###  range

▸ **range**<`T`>(start: *`T`*, end: *`T`*, ...more: *(`string` \| `number`)[]*): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[range](../interfaces/charactersextension.md#range)*

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
<a id="ref"></a>

###  ref

▸ **ref**(name: *`string`*): `this`

*Inherited from [GroupExtension](../interfaces/groupextension.md).[ref](../interfaces/groupextension.md#ref)*

*Defined in [extensions/group.ts:30](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L30)*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** `this`

___
<a id="reference"></a>

###  reference

▸ **reference**(name: *`string`*): `this`

*Inherited from [GroupExtension](../interfaces/groupextension.md).[reference](../interfaces/groupextension.md#reference)*

*Defined in [extensions/group.ts:35](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/group.ts#L35)*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** `this`

___
<a id="removeflag"></a>

###  removeFlag

▸ **removeFlag**(flag: *`string`*): `this`

*Defined in [matcher.ts:127](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L127)*

Removes given flag from regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| flag | `string` |  Flag to remove. |

**Returns:** `this`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(): `this`

*Inherited from [ReXer](rexer.md).[repeat](rexer.md#repeat)*

*Defined in [rexer.ts:49](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L49)*

Repeats last appended operation.

**Returns:** `this`

___
<a id="search"></a>

###  search

▸ **search**(str: *`string`*): `number`

*Defined in [matcher.ts:66](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L66)*

Search for match in given string. Returns beginning index of match or -1 if not found.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `number`

___
<a id="set"></a>

###  set

▸ **set**(set: *`string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`>*): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[set](../interfaces/charactersextension.md#set)*

*Defined in [extensions/characters.ts:47](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L47)*

Matches set of characters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| set | `string` \| [FuncExpr](../interfaces/funcexpr.md)<`this`> |  String of characters to be included in set. |

**Returns:** `this`

___
<a id="setchannel"></a>

###  setChannel

▸ **setChannel**(channelIndex: *`number`*): `number`

*Inherited from [ReXer](rexer.md).[setChannel](rexer.md#setchannel)*

*Defined in [rexer.ts:146](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L146)*

Sets current operations channel.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channelIndex | `number` |  Channel index. |

**Returns:** `number`
Passed channel index.

___
<a id="setlastindex"></a>

###  setLastIndex

▸ **setLastIndex**(index: *`number`*): `this`

*Defined in [matcher.ts:85](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L85)*

Sets beginning index to start parsing from.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  Index to start parsing from. |

**Returns:** `this`

___
<a id="singlebyindex"></a>

###  singleByIndex

▸ **singleByIndex**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[singleByIndex](../interfaces/flagsextension.md#singlebyindex)*

*Defined in [extensions/flags.ts:55](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L55)*

Register only one match, starting from selected index. Automatically ignores 'globalize()' function See browser support!

**Returns:** `this`

___
<a id="split"></a>

###  split

▸ **split**(str: *`string`*, n?: *`undefined` \| `number`*): `string`[]

*Defined in [matcher.ts:76](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L76)*

Splits the string in places that match regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |
| `Optional` n | `undefined` \| `number` |  How many times to split the string - minimum 1 |

**Returns:** `string`[]

___
<a id="star"></a>

###  star

▸ **star**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[star](../interfaces/quantifiersextension.md#star)*

*Defined in [extensions/quantifiers.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L23)*

Matches 0 or more of preceding tokens.

**Returns:** `this`

___
<a id="sticky"></a>

###  sticky

▸ **sticky**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[sticky](../interfaces/flagsextension.md#sticky)*

*Defined in [extensions/flags.ts:61](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L61)*

Register only one match, starting from selected index. Automatically ignores 'globalize()' function See browser support!

**Returns:** `this`

___
<a id="stringifychannel"></a>

###  stringifyChannel

▸ **stringifyChannel**(channelIndex: *`number`*): `string`

*Inherited from [ReXer](rexer.md).[stringifyChannel](rexer.md#stringifychannel)*

*Defined in [rexer.ts:123](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L123)*

Creates string from channel's operations.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channelIndex | `number` |  Channel index. |

**Returns:** `string`
All operation in given channel in form of string.

___
<a id="stringifyexpression"></a>

###  stringifyExpression

▸ **stringifyExpression**(expr: *[FuncExpr](../interfaces/funcexpr.md)<`this`>*): `string`

*Inherited from [ReXer](rexer.md).[stringifyExpression](rexer.md#stringifyexpression)*

*Defined in [rexer.ts:110](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L110)*

Creates string from function expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | [FuncExpr](../interfaces/funcexpr.md)<`this`> |  Function expression. |

**Returns:** `string`

___
<a id="tab"></a>

###  tab

▸ **tab**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[tab](../interfaces/escapedcharactersextension.md#tab)*

*Defined in [extensions/escaped.ts:46](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L46)*

Matches tab character ( char code 9 ).

**Returns:** `this`

___
<a id="test"></a>

###  test

▸ **test**(str: *`string`*): `boolean`

*Defined in [matcher.ts:38](https://github.com/areknawo/Rex/blob/04d02e1/src/matcher.ts#L38)*

Tests string against regEx and returns boolean if matched. Similar to 'RegExp.test()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `boolean`

___
<a id="u"></a>

###  u

▸ **u**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[u](../interfaces/flagsextension.md#u)*

*Defined in [extensions/flags.ts:17](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L17)*

Allows extended use of unicodes. See browser support!

**Returns:** `this`

___
<a id="unicode"></a>

###  unicode

▸ **unicode**(code: *`string`*): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[unicode](../interfaces/escapedcharactersextension.md#unicode)*

*Defined in [extensions/escaped.ts:51](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L51)*

Matches given unicode escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| code | `string` |  Sting of four ( can be more with extendedUnicodes applied ) hex digits. |

**Returns:** `this`

___
<a id="unnecessary"></a>

###  unnecessary

▸ **unnecessary**(): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[unnecessary](../interfaces/quantifiersextension.md#unnecessary)*

*Defined in [extensions/quantifiers.ts:39](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L39)*

Makes preceding token optional.

**Returns:** `this`

___
<a id="useextension"></a>

###  useExtension

▸ **useExtension**<`T`>(ext: *[Method](../interfaces/method.md)<`T`>[]*): `void`

*Inherited from [ReXer](rexer.md).[useExtension](rexer.md#useextension)*

*Defined in [rexer.ts:82](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L82)*

Appends array of extension method to ReXer for their later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| ext | [Method](../interfaces/method.md)<`T`>[] |

**Returns:** `void`

___
<a id="usemethod"></a>

###  useMethod

▸ **useMethod**<`T`>(method: *[Method](../interfaces/method.md)<`T`>*): `void`

*Inherited from [ReXer](rexer.md).[useMethod](rexer.md#usemethod)*

*Defined in [rexer.ts:68](https://github.com/areknawo/Rex/blob/04d02e1/src/rexer.ts#L68)*

Appends extension method to ReXer for its later reuse.

**Type parameters:**

#### T :  [ReXer](rexer.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | [Method](../interfaces/method.md)<`T`> |  Extension method. |

**Returns:** `void`

___
<a id="vtab"></a>

###  vTab

▸ **vTab**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[vTab](../interfaces/escapedcharactersextension.md#vtab)*

*Defined in [extensions/escaped.ts:59](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L59)*

Matches vertical tab character ( char code 11 ).

**Returns:** `this`

___
<a id="verticaltab"></a>

###  verticalTab

▸ **verticalTab**(): `this`

*Inherited from [EscapedCharactersExtension](../interfaces/escapedcharactersextension.md).[verticalTab](../interfaces/escapedcharactersextension.md#verticaltab)*

*Defined in [extensions/escaped.ts:55](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/escaped.ts#L55)*

Matches vertical tab character ( char code 11 ).

**Returns:** `this`

___
<a id="whitespace"></a>

###  whitespace

▸ **whitespace**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[whitespace](../interfaces/charactersextension.md#whitespace)*

*Defined in [extensions/characters.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L23)*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** `this`

___
<a id="withlimits"></a>

###  withLimits

▸ **withLimits**(lowerLimit: *`number`*, upperLimit: *`number`*): `this`

*Inherited from [QuantifiersExtension](../interfaces/quantifiersextension.md).[withLimits](../interfaces/quantifiersextension.md#withlimits)*

*Defined in [extensions/quantifiers.ts:59](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/quantifiers.ts#L59)*

Matches more of preceding tokens within given limits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest number of tokens to match. |
| upperLimit | `number` |  Highest number of tokens to match. |

**Returns:** `this`

___
<a id="wordboundary"></a>

###  wordBoundary

▸ **wordBoundary**(): `this`

*Inherited from [AnchorsExtension](../interfaces/anchorsextension.md).[wordBoundary](../interfaces/anchorsextension.md#wordboundary)*

*Defined in [extensions/anchors.ts:18](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L18)*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** `this`

___
<a id="wordchar"></a>

###  wordChar

▸ **wordChar**(): `this`

*Inherited from [CharactersExtension](../interfaces/charactersextension.md).[wordChar](../interfaces/charactersextension.md#wordchar)*

*Defined in [extensions/characters.ts:31](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/characters.ts#L31)*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** `this`

___
<a id="y"></a>

###  y

▸ **y**(): `this`

*Inherited from [FlagsExtension](../interfaces/flagsextension.md).[y](../interfaces/flagsextension.md#y)*

*Defined in [extensions/flags.ts:67](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/flags.ts#L67)*

Register only one match, starting from selected index. Automatically ignores 'globalize()' function See browser support!

**Returns:** `this`

___

