[load-config-file](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / IFileSystem

# Interface: IFileSystem

[index](../modules/index.md).IFileSystem

## Table of contents

### Methods

- [readFile](index.IFileSystem.md#readfile)
- [readFileAsync](index.IFileSystem.md#readfileasync)
- [readFileSync](index.IFileSystem.md#readfilesync)

## Methods

### readFile

▸ **readFile**(`path`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[index.d.ts:21](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L21)

▸ **readFile**(`path`, `options`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `BufferEncoding` \| `IReadFileOptions` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:22](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L22)

▸ **readFile**(`path`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:23](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L23)

___

### readFileAsync

▸ **readFileAsync**(`path`, `options?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[index.d.ts:25](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L25)

___

### readFileSync

▸ **readFileSync**(`path`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `BufferEncoding` \| `IReadFileOptions` |

#### Returns

`string`

#### Defined in

[index.d.ts:24](https://github.com/snowyu/load-config-file.js/blob/2255bc98ee45d0259b0beede3d86b6868359518f/src/index.d.ts#L24)
