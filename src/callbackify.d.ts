export type CallBackFn = (error: Error, result: any) => void;

export function callbackify(promise: Promise, done: CallBackFn): Promise<any>;
