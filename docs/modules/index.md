[load-config-file](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [default](../classes/index.default.md)

### Interfaces

- [IConfigOptions](../interfaces/index.IConfigOptions.md)
- [IConfigurator](../interfaces/index.IConfigurator.md)
- [IFileSystem](../interfaces/index.IFileSystem.md)
- [IReadFileOptions](../interfaces/index.IReadFileOptions.md)

### Type Aliases

- [BufferEncoding](index.md#bufferencoding)
- [ConfigAsyncProcessFn](index.md#configasyncprocessfn)
- [ConfigCallBackFn](index.md#configcallbackfn)
- [ConfigProcessFn](index.md#configprocessfn)

## Type Aliases

### BufferEncoding

Ƭ **BufferEncoding**: ``"utf8"`` \| ``"ascii"`` \| ``"utf-8"`` \| ``"utf16le"`` \| ``"utf-16le"`` \| ``"ucs2"`` \| ``"ucs-2"`` \| ``"base64"`` \| ``"base64url"`` \| ``"latin1"`` \| ``"binary"`` \| ``"hex"``

#### Defined in

[index.d.ts:1](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.d.ts#L1)

___

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

[index.d.ts:5](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.d.ts#L5)

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

[index.d.ts:3](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.d.ts#L3)

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

[index.d.ts:4](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.d.ts#L4)
