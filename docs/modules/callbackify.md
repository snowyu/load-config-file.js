[load-config-file](../README.md) / [Exports](../modules.md) / callbackify

# Module: callbackify

## Table of contents

### Type Aliases

- [CallBackFn](callbackify.md#callbackfn)

### Functions

- [callbackify](callbackify.md#callbackify)

## Type Aliases

### CallBackFn

Ƭ **CallBackFn**: (`error`: `Error`, `result`: `any`) => `void`

#### Type declaration

▸ (`error`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `result` | `any` |

##### Returns

`void`

#### Defined in

[callbackify.d.ts:1](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/callbackify.d.ts#L1)

## Functions

### callbackify

▸ **callbackify**\<`T`\>(`promise`, `done`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`\<`T`\> |
| `done` | [`CallBackFn`](callbackify.md#callbackfn) |

#### Returns

`Promise`\<`T`\>

#### Defined in

[callbackify.d.ts:3](https://github.com/snowyu/load-config-file.js/blob/ea2a6f36a03725ea0b1fce0908a4bd40fa4f15be/src/callbackify.d.ts#L3)
