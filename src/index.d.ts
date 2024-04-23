type BufferEncoding = "utf8" | "ascii" | "utf-8" | "utf16le" | "utf-16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex"

export type ConfigCallBackFn = (error: Error, content: any) => void;
export type ConfigProcessFn = (content: string, aOptions: IConfigOptions, aCfgPath: string) => any
export type ConfigAsyncProcessFn = (content: string, aOptions: IConfigOptions, aCfgPath: string) => any|Promise<any>
export interface IConfigurator {
  [name: string]: ConfigAsyncProcessFn
}
export interface IConfigOptions {
  encoding? : BufferEncoding
  raiseError?: boolean
  exclude?: string|string[]
  configurators?: IConfigurator
  [name: string]: any
}
interface IReadFileOptions {
  encoding?: BufferEncoding|null;
  flag?: string;
}
export interface IFileSystem {
  readFile(path: string, options?: IReadFileOptions|BufferEncoding): Promise<string>
  readFile(path: string, options: IReadFileOptions|BufferEncoding, done: ConfigCallBackFn): void
  readFile(path: string, done: ConfigCallBackFn): void
  readFileSync?(path: string, options?: IReadFileOptions|BufferEncoding): string;
  readFileAsync?(path: string, options?: IReadFileOptions|BufferEncoding): Promise<string>;
}

export class Config {
  static register(aExts: string|string[], aProcess: ConfigAsyncProcessFn, aConfigurators?: IConfigurator)
  static setFileSystem(aFileSystem: IFileSystem)

  static load(aPath: string, aOptions?: IConfigOptions): Promise<any>
  static load(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn|true): void|Promise<any>
  static load(aPath: string, done: ConfigCallBackFn|true): void|Promise<any>
  static loadSync(aPath: string, aOptions?: IConfigOptions): any

  configurators: IConfigurator
  fs: IFileSystem
  path: any
  readFile: any

  constructor(aOptions?: IConfigOptions);
  constructor(aPath: string, aOptions?: IConfigOptions);
  load(aPath: string, done: ConfigCallBackFn): void
  load(done: ConfigCallBackFn): void
  load(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn): void
  load(aPath: string, aOptions?: IConfigOptions): Promise<any>
  load(aOptions?: IConfigOptions): Promise<any>
  loadSync(aPath: string, aOptions?: IConfigOptions): any
  loadSync(aOptions?: IConfigOptions): any
}

declare function loadConfig(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn):void
declare function loadConfig(aPath: string, done: ConfigCallBackFn):void
declare function loadConfig(aPath: string): any
declare function loadConfig(aPath: string, aOptions: IConfigOptions): any
declare function loadConfig(aPath: string, aOptions: IConfigOptions, isAsync: true):Promise<any>
declare function loadConfig(aPath: string, isAsync: true):Promise<any>

export default loadConfig
