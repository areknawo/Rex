[ReX.js](../README.md) > [ReXQuantifier](../interfaces/rexquantifier.md)

# Interface: ReXQuantifier

## Hierarchy

↳  [ReXMatcher](../classes/rexmatcher.md)

**↳ ReXQuantifier**

## Index

### Constructors

* [constructor](rexquantifier.md#constructor)

### Properties

* [additional](rexquantifier.md#additional)
* [after](rexquantifier.md#after)
* [alternative](rexquantifier.md#alternative)
* [any](rexquantifier.md#any)
* [before](rexquantifier.md#before)
* [boundary](rexquantifier.md#boundary)
* [char](rexquantifier.md#char)
* [enter](rexquantifier.md#enter)
* [g](rexquantifier.md#g)
* [global](rexquantifier.md#global)
* [group](rexquantifier.md#group)
* [i](rexquantifier.md#i)
* [lastOperation](rexquantifier.md#lastoperation)
* [m](rexquantifier.md#m)
* [minimum](rexquantifier.md#minimum)
* [plus](rexquantifier.md#plus)
* [quantify](rexquantifier.md#quantify)
* [reference](rexquantifier.md#reference)
* [star](rexquantifier.md#star)
* [sticky](rexquantifier.md#sticky)
* [u](rexquantifier.md#u)
* [unnecessary](rexquantifier.md#unnecessary)
* [vTab](rexquantifier.md#vtab)
* [whitespace](rexquantifier.md#whitespace)
* [y](rexquantifier.md#y)

### Methods

* [add](rexquantifier.md#add)
* [addFlag](rexquantifier.md#addflag)
* [anyButBreak](rexquantifier.md#anybutbreak)
* [anyWhitespace](rexquantifier.md#anywhitespace)
* [as](rexquantifier.md#as)
* [begin](rexquantifier.md#begin)
* [capture](rexquantifier.md#capture)
* [carriageReturn](rexquantifier.md#carriagereturn)
* [codeZero](rexquantifier.md#codezero)
* [containsFlag](rexquantifier.md#containsflag)
* [control](rexquantifier.md#control)
* [createChannel](rexquantifier.md#createchannel)
* [createSnippet](rexquantifier.md#createsnippet)
* [digit](rexquantifier.md#digit)
* [end](rexquantifier.md#end)
* [extendedUnicodes](rexquantifier.md#extendedunicodes)
* [find](rexquantifier.md#find)
* [follow](rexquantifier.md#follow)
* [formFeed](rexquantifier.md#formfeed)
* [getExpr](rexquantifier.md#getexpr)
* [globalize](rexquantifier.md#globalize)
* [hex](rexquantifier.md#hex)
* [ignoreCase](rexquantifier.md#ignorecase)
* [insertSnippet](rexquantifier.md#insertsnippet)
* [lazy](rexquantifier.md#lazy)
* [lineFeed](rexquantifier.md#linefeed)
* [match](rexquantifier.md#match)
* [matchAll](rexquantifier.md#matchall)
* [more](rexquantifier.md#more)
* [moreOrNot](rexquantifier.md#moreornot)
* [multiline](rexquantifier.md#multiline)
* [negate](rexquantifier.md#negate)
* [octal](rexquantifier.md#octal)
* [optional](rexquantifier.md#optional)
* [or](rexquantifier.md#or)
* [precede](rexquantifier.md#precede)
* [range](rexquantifier.md#range)
* [ref](rexquantifier.md#ref)
* [removeFlag](rexquantifier.md#removeflag)
* [repeat](rexquantifier.md#repeat)
* [search](rexquantifier.md#search)
* [set](rexquantifier.md#set)
* [setChannel](rexquantifier.md#setchannel)
* [singleByIndex](rexquantifier.md#singlebyindex)
* [split](rexquantifier.md#split)
* [stringifyChannel](rexquantifier.md#stringifychannel)
* [stringifyExpression](rexquantifier.md#stringifyexpression)
* [tab](rexquantifier.md#tab)
* [test](rexquantifier.md#test)
* [unicode](rexquantifier.md#unicode)
* [useExtension](rexquantifier.md#useextension)
* [useMethod](rexquantifier.md#usemethod)
* [verticalTab](rexquantifier.md#verticaltab)
* [withLimits](rexquantifier.md#withlimits)
* [wordBoundary](rexquantifier.md#wordboundary)
* [wordChar](rexquantifier.md#wordchar)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ReXQuantifier**(): [ReXQuantifier](rexquantifier.md)

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[constructor](../classes/rexmatcher.md#constructor)*

*Defined in matcher.ts:22*

**Returns:** [ReXQuantifier](rexquantifier.md)

___

## Properties

<a id="additional"></a>

###  additional

**● additional**: *[optional](quantifiersextension.md#optional)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[additional](quantifiersextension.md#additional)*

*Defined in extensions/quantifiers.ts:31*

___
<a id="after"></a>

###  after

**● after**: *[follow](lookaroundextension.md#follow)*

*Inherited from [LookAroundExtension](lookaroundextension.md).[after](lookaroundextension.md#after)*

*Defined in extensions/look.ts:16*

___
<a id="alternative"></a>

###  alternative

**● alternative**: *[or](quantifiersextension.md#or)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[alternative](quantifiersextension.md#alternative)*

*Defined in extensions/quantifiers.ts:38*

___
<a id="any"></a>

###  any

**● any**: *[anyButBreak](charactersextension.md#anybutbreak)*

*Inherited from [CharactersExtension](charactersextension.md).[any](charactersextension.md#any)*

*Defined in extensions/characters.ts:13*

___
<a id="before"></a>

###  before

**● before**: *[precede](lookaroundextension.md#precede)*

*Inherited from [LookAroundExtension](lookaroundextension.md).[before](lookaroundextension.md#before)*

*Defined in extensions/look.ts:22*

___
<a id="boundary"></a>

###  boundary

**● boundary**: *[wordBoundary](anchorsextension.md#wordboundary)*

*Inherited from [AnchorsExtension](anchorsextension.md).[boundary](anchorsextension.md#boundary)*

*Defined in extensions/anchors.ts:20*

___
<a id="char"></a>

###  char

**● char**: *[wordChar](charactersextension.md#wordchar)*

*Inherited from [CharactersExtension](charactersextension.md).[char](charactersextension.md#char)*

*Defined in extensions/characters.ts:27*

___
<a id="enter"></a>

###  enter

**● enter**: *[lineFeed](escapedcharactersextension.md#linefeed)*

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[enter](escapedcharactersextension.md#enter)*

*Defined in extensions/escaped.ts:25*

___
<a id="g"></a>

###  g

**● g**: *[globalize](flagsextension.md#globalize)*

*Inherited from [FlagsExtension](flagsextension.md).[g](flagsextension.md#g)*

*Defined in extensions/flags.ts:18*

___
<a id="global"></a>

###  global

**● global**: *[globalize](flagsextension.md#globalize)*

*Inherited from [FlagsExtension](flagsextension.md).[global](flagsextension.md#global)*

*Defined in extensions/flags.ts:19*

___
<a id="group"></a>

###  group

**● group**: *[capture](groupextension.md#capture)*

*Inherited from [GroupExtension](groupextension.md).[group](groupextension.md#group)*

*Defined in extensions/group.ts:20*

___
<a id="i"></a>

###  i

**● i**: *[ignoreCase](flagsextension.md#ignorecase)*

*Inherited from [FlagsExtension](flagsextension.md).[i](flagsextension.md#i)*

*Defined in extensions/flags.ts:24*

___
<a id="lastoperation"></a>

###  lastOperation

**● lastOperation**: * [ReXOperation](../classes/rexoperation.md)<`this`> &#124; `null`
* =  null

*Inherited from [ReXer](../classes/rexer.md).[lastOperation](../classes/rexer.md#lastoperation)*

*Defined in rexer.ts:21*

Last added operation to main channel.

___
<a id="m"></a>

###  m

**● m**: *[multiline](flagsextension.md#multiline)*

*Inherited from [FlagsExtension](flagsextension.md).[m](flagsextension.md#m)*

*Defined in extensions/flags.ts:29*

___
<a id="minimum"></a>

###  minimum

**● minimum**: *[lazy](rexquantifier.md#lazy)*

*Defined in extensions/quantifiers.ts:13*

___
<a id="plus"></a>

###  plus

**● plus**: *[more](quantifiersextension.md#more)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[plus](quantifiersextension.md#plus)*

*Defined in extensions/quantifiers.ts:20*

___
<a id="quantify"></a>

###  quantify

**● quantify**: *[withLimits](quantifiersextension.md#withlimits)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[quantify](quantifiersextension.md#quantify)*

*Defined in extensions/quantifiers.ts:45*

___
<a id="reference"></a>

###  reference

**● reference**: *[ref](groupextension.md#ref)*

*Inherited from [GroupExtension](groupextension.md).[reference](groupextension.md#reference)*

*Defined in extensions/group.ts:27*

___
<a id="star"></a>

###  star

**● star**: *[moreOrNot](quantifiersextension.md#moreornot)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[star](quantifiersextension.md#star)*

*Defined in extensions/quantifiers.ts:25*

___
<a id="sticky"></a>

###  sticky

**● sticky**: *[singleByIndex](flagsextension.md#singlebyindex)*

*Inherited from [FlagsExtension](flagsextension.md).[sticky](flagsextension.md#sticky)*

*Defined in extensions/flags.ts:37*

___
<a id="u"></a>

###  u

**● u**: *[extendedUnicodes](flagsextension.md#extendedunicodes)*

*Inherited from [FlagsExtension](flagsextension.md).[u](flagsextension.md#u)*

*Defined in extensions/flags.ts:13*

___
<a id="unnecessary"></a>

###  unnecessary

**● unnecessary**: *[optional](quantifiersextension.md#optional)*

*Inherited from [QuantifiersExtension](quantifiersextension.md).[unnecessary](quantifiersextension.md#unnecessary)*

*Defined in extensions/quantifiers.ts:30*

___
<a id="vtab"></a>

###  vTab

**● vTab**: *[verticalTab](escapedcharactersextension.md#verticaltab)*

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[vTab](escapedcharactersextension.md#vtab)*

*Defined in extensions/escaped.ts:53*

___
<a id="whitespace"></a>

###  whitespace

**● whitespace**: *[anyWhitespace](charactersextension.md#anywhitespace)*

*Inherited from [CharactersExtension](charactersextension.md).[whitespace](charactersextension.md#whitespace)*

*Defined in extensions/characters.ts:18*

___
<a id="y"></a>

###  y

**● y**: *[singleByIndex](flagsextension.md#singlebyindex)*

*Inherited from [FlagsExtension](flagsextension.md).[y](flagsextension.md#y)*

*Defined in extensions/flags.ts:36*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(operationConfig: * [ReXOperationConfig](rexoperationconfig.md)<`this`> &#124; `string`*): `this`

*Inherited from [ReXer](../classes/rexer.md).[add](../classes/rexer.md#add)*

*Defined in rexer.ts:38*

Appends operation to current channel.

**Parameters:**

| Name | Type |
| ------ | ------ |
| operationConfig |  [ReXOperationConfig](rexoperationconfig.md)<`this`> &#124; `string`|

**Returns:** `this`

___
<a id="addflag"></a>

###  addFlag

▸ **addFlag**(flag: *`string`*): `this`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[addFlag](../classes/rexmatcher.md#addflag)*

*Defined in matcher.ts:114*

Appends given flag to regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| flag | `string` |  Flag to append. |

**Returns:** `this`

___
<a id="anybutbreak"></a>

###  anyButBreak

▸ **anyButBreak**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[anyButBreak](charactersextension.md#anybutbreak)*

*Defined in extensions/characters.ts:12*

Matches any character except line breaks.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="anywhitespace"></a>

###  anyWhitespace

▸ **anyWhitespace**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[anyWhitespace](charactersextension.md#anywhitespace)*

*Defined in extensions/characters.ts:17*

Matches any whitespace character - spaces, tabs, line breaks.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="as"></a>

###  as

▸ **as**(name: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [GroupExtension](groupextension.md).[as](groupextension.md#as)*

*Defined in extensions/group.ts:13*

Sets name of preceding expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name for the previously applied expression. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="begin"></a>

###  begin

▸ **begin**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [AnchorsExtension](anchorsextension.md).[begin](anchorsextension.md#begin)*

*Defined in extensions/anchors.ts:11*

Matches beginning of passed string or line ( if multiline is applied ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="capture"></a>

###  capture

▸ **capture**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [GroupExtension](groupextension.md).[capture](groupextension.md#capture)*

*Defined in extensions/group.ts:19*

Captures multiple characters together. Negate creates group of characters but doesn't capture them.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  Set's body as string of characters or expression body ( function ). |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="carriagereturn"></a>

###  carriageReturn

▸ **carriageReturn**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[carriageReturn](escapedcharactersextension.md#carriagereturn)*

*Defined in extensions/escaped.ts:11*

Matches carriage return character ( char code 13 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="codezero"></a>

###  codeZero

▸ **codeZero**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[codeZero](escapedcharactersextension.md#codezero)*

*Defined in extensions/escaped.ts:15*

Matches null character ( char code 0 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="containsflag"></a>

###  containsFlag

▸ **containsFlag**(flag: *`string`*): `boolean`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[containsFlag](../classes/rexmatcher.md#containsflag)*

*Defined in matcher.ts:139*

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

▸ **control**(letter: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[control](escapedcharactersextension.md#control)*

*Defined in extensions/escaped.ts:20*

Matches given control escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| letter | `string` |  Control letter ( A for char code 1 up to Z for char code 26 ) |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="createchannel"></a>

###  createChannel

▸ **createChannel**(): `number`

*Inherited from [ReXer](../classes/rexer.md).[createChannel](../classes/rexer.md#createchannel)*

*Defined in rexer.ts:129*

Creates new operations channel.

**Returns:** `number`
New channel's index.

___
<a id="createsnippet"></a>

###  createSnippet

▸ **createSnippet**(name: *`string`*, snippet: * [ReXOperationConfig](rexoperationconfig.md)<`this`> &#124; "string"*): `this`

*Inherited from [ReXer](../classes/rexer.md).[createSnippet](../classes/rexer.md#createsnippet)*

*Defined in rexer.ts:85*

Creates snippet for given operation.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |
| snippet |  [ReXOperationConfig](rexoperationconfig.md)<`this`> &#124; "string"|  Operation's snippet. |

**Returns:** `this`

___
<a id="digit"></a>

###  digit

▸ **digit**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[digit](charactersextension.md#digit)*

*Defined in extensions/characters.ts:22*

Matches any digit.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="end"></a>

###  end

▸ **end**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [AnchorsExtension](anchorsextension.md).[end](anchorsextension.md#end)*

*Defined in extensions/anchors.ts:15*

Matches ending of passed string or line ( if multiline is applied ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="extendedunicodes"></a>

###  extendedUnicodes

▸ **extendedUnicodes**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [FlagsExtension](flagsextension.md).[extendedUnicodes](flagsextension.md#extendedunicodes)*

*Defined in extensions/flags.ts:12*

Allows extended use of unicodes. See browser support!

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="find"></a>

###  find

▸ **find**(str: *`string`*): `this`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[find](../classes/rexmatcher.md#find)*

*Defined in matcher.ts:92*

Inserts given expression to regEx. Standard string characters are automatically escaped.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  RegEx string to append. |

**Returns:** `this`

___
<a id="follow"></a>

###  follow

▸ **follow**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [LookAroundExtension](lookaroundextension.md).[follow](lookaroundextension.md#follow)*

*Defined in extensions/look.ts:15*

Matches group after last expression without including it in the result.

**Parameters:**

| Name | Type |
| ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="formfeed"></a>

###  formFeed

▸ **formFeed**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[formFeed](escapedcharactersextension.md#formfeed)*

*Defined in extensions/escaped.ts:29*

Matches form feed character ( char code 12 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="getexpr"></a>

###  getExpr

▸ **getExpr**(): `string`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[getExpr](../classes/rexmatcher.md#getexpr)*

*Defined in matcher.ts:84*

Returns constructed matching expression.

**Returns:** `string`

___
<a id="globalize"></a>

###  globalize

▸ **globalize**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [FlagsExtension](flagsextension.md).[globalize](flagsextension.md#globalize)*

*Defined in extensions/flags.ts:17*

Allows to regiser more than 1 matches.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="hex"></a>

###  hex

▸ **hex**(hex: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[hex](escapedcharactersextension.md#hex)*

*Defined in extensions/escaped.ts:34*

Matches given hexadecimal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hex | `string` |  Sting of two hex digits e.g. "ff". |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="ignorecase"></a>

###  ignoreCase

▸ **ignoreCase**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [FlagsExtension](flagsextension.md).[ignoreCase](flagsextension.md#ignorecase)*

*Defined in extensions/flags.ts:23*

Disables case sensitivity.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="insertsnippet"></a>

###  insertSnippet

▸ **insertSnippet**(name: *`string`*): `this`

*Inherited from [ReXer](../classes/rexer.md).[insertSnippet](../classes/rexer.md#insertsnippet)*

*Defined in rexer.ts:94*

Inserts specified snippet in expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Snippet's name. |

**Returns:** `this`

___
<a id="lazy"></a>

###  lazy

▸ **lazy**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/quantifiers.ts:12*

Makes quantifiers match as little characters as possible.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="linefeed"></a>

###  lineFeed

▸ **lineFeed**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[lineFeed](escapedcharactersextension.md#linefeed)*

*Defined in extensions/escaped.ts:24*

Matches line feed character a.k.a. 'enter' ( char code 10 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="match"></a>

###  match

▸ **match**(str: *`string`*):  `null` &#124; [ReXResult](rexresult.md)

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[match](../classes/rexmatcher.md#match)*

*Defined in matcher.ts:48*

Matches string against regEx and returns result as array. Similar to 'RegExp.exec()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:**  `null` &#124; [ReXResult](rexresult.md)

___
<a id="matchall"></a>

###  matchAll

▸ **matchAll**(str: *`string`*):  `null` &#124; [ReXResult](rexresult.md)[]

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[matchAll](../classes/rexmatcher.md#matchall)*

*Defined in matcher.ts:57*

Matches all matches in string for regEx and returns array of result arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:**  `null` &#124; [ReXResult](rexresult.md)[]

___
<a id="more"></a>

###  more

▸ **more**(): [ReXQuantifier](rexquantifier.md)

*Inherited from [QuantifiersExtension](quantifiersextension.md).[more](quantifiersextension.md#more)*

*Defined in extensions/quantifiers.ts:19*

Matches 1 or more of preceding tokens.

**Returns:** [ReXQuantifier](rexquantifier.md)

___
<a id="moreornot"></a>

###  moreOrNot

▸ **moreOrNot**(): [ReXQuantifier](rexquantifier.md)

*Inherited from [QuantifiersExtension](quantifiersextension.md).[moreOrNot](quantifiersextension.md#moreornot)*

*Defined in extensions/quantifiers.ts:24*

Matches 0 or more of preceding tokens.

**Returns:** [ReXQuantifier](rexquantifier.md)

___
<a id="multiline"></a>

###  multiline

▸ **multiline**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [FlagsExtension](flagsextension.md).[multiline](flagsextension.md#multiline)*

*Defined in extensions/flags.ts:28*

Takes into account new lines.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="negate"></a>

###  negate

▸ **negate**(): `this`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[negate](../classes/rexmatcher.md#negate)*

*Defined in matcher.ts:101*

Negates last appended operation.

**Returns:** `this`

___
<a id="octal"></a>

###  octal

▸ **octal**(oct: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[octal](escapedcharactersextension.md#octal)*

*Defined in extensions/escaped.ts:39*

Matches given octal escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| oct | `string` |  Sting of three octal digits e.g. "021" with max being "377". |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="optional"></a>

###  optional

▸ **optional**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [QuantifiersExtension](quantifiersextension.md).[optional](quantifiersextension.md#optional)*

*Defined in extensions/quantifiers.ts:29*

Makes preceding token optional.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="or"></a>

###  or

▸ **or**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [QuantifiersExtension](quantifiersextension.md).[or](quantifiersextension.md#or)*

*Defined in extensions/quantifiers.ts:37*

Matches the expression before or QuantifiersExtension currently provided.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  *   as string of characters or expression body ( function ). |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="precede"></a>

###  precede

▸ **precede**(expr: * `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [LookAroundExtension](lookaroundextension.md).[precede](lookaroundextension.md#precede)*

*Defined in extensions/look.ts:21*

Matches group before last expression without including it in the result.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr |  `string` &#124; [ReXFuncExpr](rexfuncexpr.md)<[ReXMatcher](../classes/rexmatcher.md)>|  Lookbehind body as string of characters or expression body ( function ) |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="range"></a>

###  range

▸ **range**<`T`>(start: *`T`*, end: *`T`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[range](charactersextension.md#range)*

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
<a id="ref"></a>

###  ref

▸ **ref**(name: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [GroupExtension](groupextension.md).[ref](groupextension.md#ref)*

*Defined in extensions/group.ts:26*

Matches result of previous group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of expression to be referenced. Previously set by 'as()' method. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="removeflag"></a>

###  removeFlag

▸ **removeFlag**(flag: *`string`*): `this`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[removeFlag](../classes/rexmatcher.md#removeflag)*

*Defined in matcher.ts:124*

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

*Inherited from [ReXer](../classes/rexer.md).[repeat](../classes/rexer.md#repeat)*

*Defined in rexer.ts:48*

Repeats last appended operation.

**Returns:** `this`

___
<a id="search"></a>

###  search

▸ **search**(str: *`string`*): `number`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[search](../classes/rexmatcher.md#search)*

*Defined in matcher.ts:66*

Search for match in given string. Returns beginning index of match or -1 if not found.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `number`

___
<a id="set"></a>

###  set

▸ **set**(set: * `string` &#124; `function`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[set](charactersextension.md#set)*

*Defined in extensions/characters.ts:38*

Matches set of characters.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| set |  `string` &#124; `function`|  String of characters to be included in set. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="setchannel"></a>

###  setChannel

▸ **setChannel**(channelIndex: *`number`*): `number`

*Inherited from [ReXer](../classes/rexer.md).[setChannel](../classes/rexer.md#setchannel)*

*Defined in rexer.ts:139*

Sets current operations channel.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channelIndex | `number` |  Channel index. |

**Returns:** `number`
Passed channel index.

___
<a id="singlebyindex"></a>

###  singleByIndex

▸ **singleByIndex**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [FlagsExtension](flagsextension.md).[singleByIndex](flagsextension.md#singlebyindex)*

*Defined in extensions/flags.ts:35*

Register only one match, starting from selected index. Automatically ignores 'globalize()' function See browser support!

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="split"></a>

###  split

▸ **split**(str: *`string`*, n?: * `undefined` &#124; `number`*): `string`[]

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[split](../classes/rexmatcher.md#split)*

*Defined in matcher.ts:76*

Splits the string in places that match regEx.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |
| `Optional` n |  `undefined` &#124; `number`|  How many times to split the string - minimum 1 |

**Returns:** `string`[]

___
<a id="stringifychannel"></a>

###  stringifyChannel

▸ **stringifyChannel**(channelIndex: *`number`*): `string`

*Inherited from [ReXer](../classes/rexer.md).[stringifyChannel](../classes/rexer.md#stringifychannel)*

*Defined in rexer.ts:116*

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

▸ **stringifyExpression**(expr: *[ReXFuncExpr](rexfuncexpr.md)<`this`>*): `string`

*Inherited from [ReXer](../classes/rexer.md).[stringifyExpression](../classes/rexer.md#stringifyexpression)*

*Defined in rexer.ts:103*

Creates string from function expression.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| expr | [ReXFuncExpr](rexfuncexpr.md)<`this`> |  Function expression. |

**Returns:** `string`

___
<a id="tab"></a>

###  tab

▸ **tab**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[tab](escapedcharactersextension.md#tab)*

*Defined in extensions/escaped.ts:43*

Matches tab character ( char code 9 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="test"></a>

###  test

▸ **test**(str: *`string`*): `boolean`

*Inherited from [ReXMatcher](../classes/rexmatcher.md).[test](../classes/rexmatcher.md#test)*

*Defined in matcher.ts:38*

Tests string against regEx and returns boolean if matched. Similar to 'RegExp.test()' method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  String to run operation against. |

**Returns:** `boolean`

___
<a id="unicode"></a>

###  unicode

▸ **unicode**(code: *`string`*): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[unicode](escapedcharactersextension.md#unicode)*

*Defined in extensions/escaped.ts:48*

Matches given unicode escaped character.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| code | `string` |  Sting of four ( can be more with extendedUnicodes applied ) hex digits. |

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="useextension"></a>

###  useExtension

▸ **useExtension**<`T`>(ext: *[ReXMethod](rexmethod.md)<`T`>[]*): `void`

*Inherited from [ReXer](../classes/rexer.md).[useExtension](../classes/rexer.md#useextension)*

*Defined in rexer.ts:75*

Appends array of extension method to ReXer for their later reuse.

**Type parameters:**

#### T :  [ReXer](../classes/rexer.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| ext | [ReXMethod](rexmethod.md)<`T`>[] |

**Returns:** `void`

___
<a id="usemethod"></a>

###  useMethod

▸ **useMethod**<`T`>(method: *[ReXMethod](rexmethod.md)<`T`>*): `void`

*Inherited from [ReXer](../classes/rexer.md).[useMethod](../classes/rexer.md#usemethod)*

*Defined in rexer.ts:61*

Appends extension method to ReXer for its later reuse.

**Type parameters:**

#### T :  [ReXer](../classes/rexer.md)
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | [ReXMethod](rexmethod.md)<`T`> |  Extension method. |

**Returns:** `void`

___
<a id="verticaltab"></a>

###  verticalTab

▸ **verticalTab**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [EscapedCharactersExtension](escapedcharactersextension.md).[verticalTab](escapedcharactersextension.md#verticaltab)*

*Defined in extensions/escaped.ts:52*

Matches vertical tab character ( char code 11 ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="withlimits"></a>

###  withLimits

▸ **withLimits**(lowerLimit: *`number`*, upperLimit: *`number`*): [ReXQuantifier](rexquantifier.md)

*Inherited from [QuantifiersExtension](quantifiersextension.md).[withLimits](quantifiersextension.md#withlimits)*

*Defined in extensions/quantifiers.ts:44*

Matches more of preceding tokens within given limits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lowerLimit | `number` |  Lowest number of tokens to match. |
| upperLimit | `number` |  Highest number of tokens to match. |

**Returns:** [ReXQuantifier](rexquantifier.md)

___
<a id="wordboundary"></a>

###  wordBoundary

▸ **wordBoundary**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [AnchorsExtension](anchorsextension.md).[wordBoundary](anchorsextension.md#wordboundary)*

*Defined in extensions/anchors.ts:19*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="wordchar"></a>

###  wordChar

▸ **wordChar**(): [ReXMatcher](../classes/rexmatcher.md)

*Inherited from [CharactersExtension](charactersextension.md).[wordChar](charactersextension.md#wordchar)*

*Defined in extensions/characters.ts:26*

Matches any word character - upper & lower case letters, numbers and underscores.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

