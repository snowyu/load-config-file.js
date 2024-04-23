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

- [load](index.Config.md#load)
- [loadSync](index.Config.md#loadsync)
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

[index.d.ts:42](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L42)

• **new Config**(`aPath`, `aOptions?`): [`Config`](index.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`Config`](index.Config.md)

#### Defined in

[index.d.ts:43](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L43)

## Properties

### configurators

• **configurators**: [`IConfigurator`](../interfaces/index.IConfigurator.md)

#### Defined in

[index.d.ts:37](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L37)

___

### fs

• **fs**: [`IFileSystem`](../interfaces/index.IFileSystem.md)

#### Defined in

[index.d.ts:38](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L38)

___

### path

• **path**: `any`

#### Defined in

[index.d.ts:39](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L39)

___

### readFile

• **readFile**: `any`

#### Defined in

[index.d.ts:40](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L40)

## Methods

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

[index.d.ts:44](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L44)

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:45](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L45)

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

[index.d.ts:46](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L46)

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:47](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L47)

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:48](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L48)

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

[index.d.ts:49](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L49)

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:50](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L50)

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

[index.d.ts:32](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L32)

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

[index.d.ts:33](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L33)

▸ **load**(`aPath`, `done`): `void` \| `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | ``true`` \| [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void` \| `Promise`\<`any`\>

#### Defined in

[index.d.ts:34](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L34)

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

[index.d.ts:35](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L35)

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

[index.d.ts:29](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L29)

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

[index.d.ts:30](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L30)
