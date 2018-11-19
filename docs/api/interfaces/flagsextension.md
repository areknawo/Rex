[ReX.js](../README.md) > [FlagsExtension](../interfaces/flagsextension.md)

# Interface: FlagsExtension

RegEx flags-related methods ReX extension.

## Hierarchy

**FlagsExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [g](flagsextension.md#g)
* [global](flagsextension.md#global)
* [i](flagsextension.md#i)
* [m](flagsextension.md#m)
* [sticky](flagsextension.md#sticky)
* [u](flagsextension.md#u)
* [y](flagsextension.md#y)

### Methods

* [extendedUnicodes](flagsextension.md#extendedunicodes)
* [globalize](flagsextension.md#globalize)
* [ignoreCase](flagsextension.md#ignorecase)
* [multiline](flagsextension.md#multiline)
* [singleByIndex](flagsextension.md#singlebyindex)

---

## Properties

<a id="g"></a>

###  g

**● g**: *[globalize](flagsextension.md#globalize)*

*Defined in extensions/flags.ts:18*

___
<a id="global"></a>

###  global

**● global**: *[globalize](flagsextension.md#globalize)*

*Defined in extensions/flags.ts:19*

___
<a id="i"></a>

###  i

**● i**: *[ignoreCase](flagsextension.md#ignorecase)*

*Defined in extensions/flags.ts:24*

___
<a id="m"></a>

###  m

**● m**: *[multiline](flagsextension.md#multiline)*

*Defined in extensions/flags.ts:29*

___
<a id="sticky"></a>

###  sticky

**● sticky**: *[singleByIndex](flagsextension.md#singlebyindex)*

*Defined in extensions/flags.ts:37*

___
<a id="u"></a>

###  u

**● u**: *[extendedUnicodes](flagsextension.md#extendedunicodes)*

*Defined in extensions/flags.ts:13*

___
<a id="y"></a>

###  y

**● y**: *[singleByIndex](flagsextension.md#singlebyindex)*

*Defined in extensions/flags.ts:36*

___

## Methods

<a id="extendedunicodes"></a>

###  extendedUnicodes

▸ **extendedUnicodes**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/flags.ts:12*

Allows extended use of unicodes. See browser support!

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="globalize"></a>

###  globalize

▸ **globalize**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/flags.ts:17*

Allows to regiser more than 1 matches.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="ignorecase"></a>

###  ignoreCase

▸ **ignoreCase**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/flags.ts:23*

Disables case sensitivity.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="multiline"></a>

###  multiline

▸ **multiline**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/flags.ts:28*

Takes into account new lines.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="singlebyindex"></a>

###  singleByIndex

▸ **singleByIndex**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/flags.ts:35*

Register only one match, starting from selected index. Automatically ignores 'globalize()' function See browser support!

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

