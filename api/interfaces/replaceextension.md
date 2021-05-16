[ReX.js](../README.md) > [ReplaceExtension](../interfaces/replaceextension.md)

# Interface: ReplaceExtension

RegEx replacement-related methods ReX.js extension.

## Hierarchy

**ReplaceExtension**

↳  [Replacer](../classes/replacer.md)

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

▸ **afterMatched**(): `this`

*Defined in [extensions/replace.ts:23](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L23)*

Includes portion of string that follows matched part.

**Returns:** `this`

___
<a id="beforematched"></a>

###  beforeMatched

▸ **beforeMatched**(): `this`

*Defined in [extensions/replace.ts:19](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L19)*

Includes portion of string that precedes matched part.

**Returns:** `this`

___
<a id="captured"></a>

###  captured

▸ **captured**(name: *`string`*): `this`

*Defined in [extensions/replace.ts:15](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L15)*

Includes matched named group.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of the group to be referenced. |

**Returns:** `this`

___
<a id="dollar"></a>

###  dollar

▸ **dollar**(): `this`

*Defined in [extensions/replace.ts:27](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L27)*

Includes dollar character.

**Returns:** `this`

___
<a id="matched"></a>

###  matched

▸ **matched**(): `this`

*Defined in [extensions/replace.ts:10](https://github.com/areknawo/Rex/blob/04d02e1/src/extensions/replace.ts#L10)*

Includes matched string.

**Returns:** `this`

___

