[load-config-file](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [Config](../classes/index.Config.md)

### Interfaces

- [IConfigOptions](../interfaces/index.IConfigOptions.md)
- [IConfigurator](../interfaces/index.IConfigurator.md)
- [IFileSystem](../interfaces/index.IFileSystem.md)

### Type Aliases

- [ConfigAsyncProcessFn](index.md#configasyncprocessfn)
- [ConfigCallBackFn](index.md#configcallbackfn)
- [ConfigProcessFn](index.md#configprocessfn)

### Functions

- [default](index.md#default)

## Type Aliases

### ConfigAsyncProcessFn

Ƭ **ConfigAsyncProcessFn**: (`content`: `string`, `aOptions`: [`IConfigOptions`](../interfaces/index.IConfigOptions.md), `aCfgPath`: `string`) => `any` \| `Promise`\<`any`\>

#### Type declaration

▸ (`content`, `aOptions`, `aCfgPath`): `any` \| `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `aCfgPath` | `string` |

##### Returns

`any` \| `Promise`\<`any`\>

#### Defined in

[index.d.ts:5](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L5)

___

### ConfigCallBackFn

Ƭ **ConfigCallBackFn**: (`error`: `Error`, `content`: `any`) => `void`

#### Type declaration

▸ (`error`, `content`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `content` | `any` |

##### Returns

`void`

#### Defined in

[index.d.ts:3](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L3)

___

### ConfigProcessFn

Ƭ **ConfigProcessFn**: (`content`: `string`, `aOptions`: [`IConfigOptions`](../interfaces/index.IConfigOptions.md), `aCfgPath`: `string`) => `any`

#### Type declaration

▸ (`content`, `aOptions`, `aCfgPath`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `aCfgPath` | `string` |

##### Returns

`any`

#### Defined in

[index.d.ts:4](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L4)

## Functions

### default

▸ **default**(`aPath`, `aOptions`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `done` | [`ConfigCallBackFn`](index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:64](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L64)

▸ **default**(`aPath`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `done` | [`ConfigCallBackFn`](index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:65](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L65)

▸ **default**(`aPath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |

#### Returns

`any`

#### Defined in

[index.d.ts:66](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L66)

▸ **default**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |

#### Returns

`any`

#### Defined in

[index.d.ts:67](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L67)

▸ **default**(`aPath`, `aOptions`, `isAsync`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `aOptions` | [`IConfigOptions`](../interfaces/index.IConfigOptions.md) |
| `isAsync` | ``true`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:68](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L68)

▸ **default**(`aPath`, `isAsync`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `isAsync` | ``true`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[index.d.ts:69](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L69)
