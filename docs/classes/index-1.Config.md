[load-config-file](../README.md) / [Exports](../modules.md) / [index](../modules/index-1.md) / Config

# Class: Config

[index](../modules/index-1.md).Config

## Table of contents

### Constructors

- [constructor](index-1.Config.md#constructor)

### Properties

- [configurators](index-1.Config.md#configurators)
- [fs](index-1.Config.md#fs)
- [options](index-1.Config.md#options)
- [path](index-1.Config.md#path)
- [readFile](index-1.Config.md#readfile)

### Methods

- [load](index-1.Config.md#load)
- [loadSync](index-1.Config.md#loadsync)
- [load](index-1.Config.md#load-1)
- [loadSync](index-1.Config.md#loadsync-1)
- [register](index-1.Config.md#register)
- [setFileSystem](index-1.Config.md#setfilesystem)

## Constructors

### constructor

• **new Config**(`aPath`, `aOptions`, `done`): [`Config`](index-1.Config.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

[`Config`](index-1.Config.md)

#### Defined in

[index.js:41](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L41)

## Properties

### configurators

• **configurators**: `Object`

#### Defined in

[index.js:21](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L21)

___

### fs

• **fs**: `any`

#### Defined in

[index.js:23](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L23)

___

### options

• **options**: `any`

#### Defined in

[index.js:61](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L61)

___

### path

• **path**: `any`

#### Defined in

[index.js:59](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L59)

[index.js:24](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L24)

___

### readFile

• **readFile**: `any`

#### Defined in

[index.js:25](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L25)

## Methods

### load

▸ **load**(`aPath`, `aOptions`, `done`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

`any`

#### Defined in

[index.js:65](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L65)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |

#### Returns

`any`

#### Defined in

[index.js:87](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L87)

___

### load

▸ **load**(`aPath`, `aOptions`, `done`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |
| `done` | `any` |

#### Returns

`any`

#### Defined in

[index.js:101](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L101)

___

### loadSync

▸ **loadSync**(`aPath`, `aOptions`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `any` |
| `aOptions` | `any` |

#### Returns

`any`

#### Defined in

[index.js:150](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L150)

___

### register

▸ **register**(`aExts`, `aProcess`, `aConfigurators`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aExts` | `any` |
| `aProcess` | `any` |
| `aConfigurators` | `any` |

#### Returns

`any`

#### Defined in

[index.js:195](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L195)

___

### setFileSystem

▸ **setFileSystem**(`aFileSystem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aFileSystem` | `any` |

#### Returns

`boolean`

#### Defined in

[index.js:220](https://github.com/snowyu/load-config-file.js/blob/aa42dd2d608206dc3f9827f500d335f02d320e5e/src/index.js#L220)
