[load-config-file](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / IFileSystem

# Interface: IFileSystem

[index](../modules/index.md).IFileSystem

## Table of contents

### Methods

- [existsSync](index.IFileSystem.md#existssync)
- [readFile](index.IFileSystem.md#readfile)
- [readFileAsync](index.IFileSystem.md#readfileasync)
- [readFileSync](index.IFileSystem.md#readfilesync)

## Methods

### existsSync

▸ **existsSync**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

[index.d.ts:26](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L26)

___

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

[index.d.ts:21](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L21)

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

[index.d.ts:22](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L22)

▸ **readFile**(`path`, `done`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `done` | [`ConfigCallBackFn`](../modules/index.md#configcallbackfn) |

#### Returns

`void`

#### Defined in

[index.d.ts:23](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L23)

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

[index.d.ts:25](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L25)

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

[index.d.ts:24](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/index.d.ts#L24)
