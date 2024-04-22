[load-config-file](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / default

# Class: default

[index](../modules/index.md).default

## Table of contents

### Constructors

- [constructor](index.default.md#constructor)

### Properties

- [configurators](index.default.md#configurators)
- [fs](index.default.md#fs)
- [path](index.default.md#path)
- [readFile](index.default.md#readfile)

### Methods

- [load](index.default.md#load)
- [loadSync](index.default.md#loadsync)
- [load](index.default.md#load-1)
- [loadSync](index.default.md#loadsync-1)
- [register](index.default.md#register)
- [setFileSystem](index.default.md#setfilesystem)

## Constructors

### constructor

• **new default**(`aOptions?`): [`default`](index.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`default`](index.default.md)

#### Defined in

[index.d.ts:42](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L42)

• **new default**(`aPath`, `aOptions?`): [`default`](index.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

[`default`](index.default.md)

#### Defined in

[index.d.ts:43](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L43)

## Properties

### configurators

• **configurators**: [`IConfigurator`](../interfaces/index.IConfigurator.md)

#### Defined in

[index.d.ts:37](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L37)

___

### fs

• **fs**: [`IFileSystem`](../interfaces/index.IFileSystem.md)

#### Defined in

[index.d.ts:38](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L38)

___

### path

• **path**: `any`

#### Defined in

[index.d.ts:39](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L39)

___

### readFile

• **readFile**: `any`

#### Defined in

[index.d.ts:40](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L40)

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

[index.d.ts:44](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L44)

▸ **load**(`done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:45](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L45)

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

[index.d.ts:46](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L46)

▸ **load**(`aPath`, `aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:47](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L47)

▸ **load**(`aOptions?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:48](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L48)

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

[index.d.ts:49](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L49)

▸ **loadSync**(`aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aOptions?` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:50](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L50)

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

[index.d.ts:32](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L32)

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

[index.d.ts:33](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L33)

▸ **load**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:34](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L34)

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

[index.d.ts:35](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L35)

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

[index.d.ts:29](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L29)

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

[index.d.ts:30](https://github.com/snowyu/load-config-file.js/blob/fb8f4e7a409bb557ea8541e7cf8678f7d13947e6/src/index.d.ts#L30)
