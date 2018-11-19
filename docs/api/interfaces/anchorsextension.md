[ReX.js](../README.md) > [AnchorsExtension](../interfaces/anchorsextension.md)

# Interface: AnchorsExtension

RegEx anchor-related methods ReX extension.

## Hierarchy

**AnchorsExtension**

↳  [ReXMatcher](../classes/rexmatcher.md)

## Index

### Properties

* [boundary](anchorsextension.md#boundary)

### Methods

* [begin](anchorsextension.md#begin)
* [end](anchorsextension.md#end)
* [wordBoundary](anchorsextension.md#wordboundary)

---

## Properties

<a id="boundary"></a>

###  boundary

**● boundary**: *[wordBoundary](anchorsextension.md#wordboundary)*

*Defined in extensions/anchors.ts:20*

___

## Methods

<a id="begin"></a>

###  begin

▸ **begin**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/anchors.ts:11*

Matches beginning of passed string or line ( if multiline is applied ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="end"></a>

###  end

▸ **end**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/anchors.ts:15*

Matches ending of passed string or line ( if multiline is applied ).

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___
<a id="wordboundary"></a>

###  wordBoundary

▸ **wordBoundary**(): [ReXMatcher](../classes/rexmatcher.md)

*Defined in extensions/anchors.ts:19*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** [ReXMatcher](../classes/rexmatcher.md)

___

