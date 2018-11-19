[ReX.js](../README.md) > [ReplaceExtension](../interfaces/replaceextension.md)

# Interface: ReplaceExtension

RegEx replacement-related methods ReX extension.

## Hierarchy

**ReplaceExtension**

↳  [ReXReplacer](../classes/rexreplacer.md)

## Index

### Methods

* [afterMatched](replaceextension.md#aftermatched)
* [beforeMatched](replaceextension.md#beforematched)
* [captured](replaceextension.md#captured)
* [dollar](replaceextension.md#dollar)
* [matched](replaceextension.md#matched)

---

## Methods

<a id="aftermatched"></a>

###  afterMatched

▸ **afterMatched**(): [ReXReplacer](../classes/rexreplacer.md)

*Defined in extensions/replace.ts:24*

Includes portion of string that follows matched part in replacer.

**Returns:** [ReXReplacer](../classes/rexreplacer.md)

___
<a id="beforematched"></a>

###  beforeMatched

▸ **beforeMatched**(): [ReXReplacer](../classes/rexreplacer.md)

*Defined in extensions/replace.ts:20*

Includes portion of string that precedes matched part in replacer.

**Returns:** [ReXReplacer](../classes/rexreplacer.md)

___
<a id="captured"></a>

###  captured

▸ **captured**(name: *`string`*): [ReXReplacer](../classes/rexreplacer.md)

*Defined in extensions/replace.ts:16*

Includes matched named group in replacer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of the group to be referenced. |

**Returns:** [ReXReplacer](../classes/rexreplacer.md)

___
<a id="dollar"></a>

###  dollar

▸ **dollar**(): [ReXReplacer](../classes/rexreplacer.md)

*Defined in extensions/replace.ts:28*

Includes dollar character in replacer

**Returns:** [ReXReplacer](../classes/rexreplacer.md)

___
<a id="matched"></a>

###  matched

▸ **matched**(): [ReXReplacer](../classes/rexreplacer.md)

*Defined in extensions/replace.ts:11*

Includes matched string in its replacer.

**Returns:** [ReXReplacer](../classes/rexreplacer.md)

___

