[ReX.js](../README.md) > [AnchorsExtension](../interfaces/anchorsextension.md)

# Interface: AnchorsExtension

RegEx anchor-related methods ReX.js extension.

## Hierarchy

**AnchorsExtension**

↳  [Matcher](../classes/matcher.md)

## Index

### Methods

* [begin](anchorsextension.md#begin)
* [boundary](anchorsextension.md#boundary)
* [end](anchorsextension.md#end)
* [wordBoundary](anchorsextension.md#wordboundary)

---

## Methods

<a id="begin"></a>

###  begin

▸ **begin**(): `this`

*Defined in [extensions/anchors.ts:10](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L10)*

Matches beginning of passed string or line ( if multiline is applied ).

**Returns:** `this`

___
<a id="boundary"></a>

###  boundary

▸ **boundary**(): `this`

*Defined in [extensions/anchors.ts:22](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L22)*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** `this`

___
<a id="end"></a>

###  end

▸ **end**(): `this`

*Defined in [extensions/anchors.ts:14](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L14)*

Matches ending of passed string or line ( if multiline is applied ).

**Returns:** `this`

___
<a id="wordboundary"></a>

###  wordBoundary

▸ **wordBoundary**(): `this`

*Defined in [extensions/anchors.ts:18](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/anchors.ts#L18)*

States that match starts with non-word character e.g. space, -, tab etc.

**Returns:** `this`

___

