[load-config-file](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / Config

# Class: Config

[index](../modules/index.md).Config

## Table of contents

### Constructors

- [constructor](index.Config.md#constructor)

### Properties

- [configurators](index.Config.md#configurators)
- [fs](index.Config.md#fs)
- [path](index.Config.md#path)
- [readFile](index.Config.md#readfile)

### Methods

- [exists](index.Config.md#exists)
- [existsSync](index.Config.md#existssync)
- [load](index.Config.md#load)
- [loadSync](index.Config.md#loadsync)
- [exists](index.Config.md#exists-1)
- [existsSync](index.Config.md#existssync-1)
- [load](index.Config.md#load-1)
- [loadSync](index.Config.md#loadsync-1)
- [register](index.Config.md#register)
- [setFileSystem](index.Config.md#setfilesystem)

## Constructors

### constructor

• **new Config**(`aOptions?`): [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`Config`](index.Config.md)

#### Defined in

[index.d.ts:47](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L47)

• **new Config**(`aPath`, `aOptions?`): [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`Config`](index.Config.md)

#### Defined in

[index.d.ts:48](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L48)

## Properties

### configurators

• **configurators**: [`IConfigurator`](../interfaces/index.IConfigurator.md)

#### Defined in

[index.d.ts:42](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L42)

___

### fs

• **fs**: [`IFileSystem`](../interfaces/index.IFileSystem.md)

#### Defined in

[index.d.ts:43](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L43)

___

### path

• **path**: `any`

#### Defined in

[index.d.ts:44](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L44)

___

### readFile

• **readFile**: `any`

#### Defined in

[index.d.ts:45](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L45)

## Methods

### exists

▸ **exists**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:56](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L56)

▸ **exists**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:57](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L57)

▸ **exists**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:58](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L58)

▸ **exists**(`aPath`, `aOptions?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[index.d.ts:59](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L59)

▸ **exists**(`aOptions?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[index.d.ts:60](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L60)

___

### existsSync

▸ **existsSync**(`aPath`, `aOptions?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`boolean`

#### Defined in

[index.d.ts:61](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L61)

___

### load

▸ **load**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:49](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L49)

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:50](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L50)

▸ **load**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:51](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L51)

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:52](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L52)

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:53](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L53)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:54](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L54)

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:55](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L55)

___

### exists

▸ **exists**(`aPath`, `aOptions?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[index.d.ts:37](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L37)

▸ **exists**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`boolean`\>

#### Defined in

[index.d.ts:38](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L38)

▸ **exists**(`aPath`, `done`): `void` \| `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`boolean`\>

#### Defined in

[index.d.ts:39](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L39)

___

### existsSync

▸ **existsSync**(`aPath`, `aOptions?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`boolean`

#### Defined in

[index.d.ts:40](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L40)

___

### load

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:33](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L33)

▸ **load**(`aPath`, `aOptions`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

[index.d.ts:34](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L34)

▸ **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

[index.d.ts:35](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L35)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:36](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L36)

___

### register

▸ **register**(`aExts`, `aProcess`, `aConfigurators?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aExts` | `string` \| `string`[] |
| `aProcess` | [`ConfigAsyncProcessFn`](../modules/index.md#configasyncprocessfn) |
| `aConfigurators?` | [`IConfigurator`](../interfaces/index.IConfigurator.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:30](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L30)

___

### setFileSystem

▸ **setFileSystem**(`aFileSystem`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFileSystem` | [`IFileSystem`](../interfaces/index.IFileSystem.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:31](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L31)
