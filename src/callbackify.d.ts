export type CallBackFn = (error: Error, result: any) => void;

export function callbackify<T = any>(promise: Promise<T>, done: CallBackFn): Promise<T>;
