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
  readFile?(path: string, options?: IReadFileOptions|BufferEncoding): Promise<string>
  readFile?(path: string, options: IReadFileOptions|BufferEncoding, done: ConfigCallBackFn): void
  readFile?(path: string, done: ConfigCallBackFn): void
  readFileSync: (path: string, options?: IReadFileOptions|BufferEncoding)=>string;
}

export default class Config {
  static register(aExts: string|string[], aProcess: ConfigAsyncProcessFn, aConfigurators?: IConfigurator)
  static setFileSystem(aFileSystem: IFileSystem)

  static load(aPath: string, aOptions?: IConfigOptions): Promise<any>
  static load(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn): void
  static load(aPath: string, done: ConfigCallBackFn): void
  static loadSync(aPath: string, aOptions?: IConfigOptions): any

  configurators: IConfigurator
  fs: IFileSystem
  path: any
  readFile: any

  constructor(aPath: string, aOptions: IConfigOptions);
  load(aPath: string, done: ConfigCallBackFn): void
  load(aPath: string, aOptions: IConfigOptions, done: ConfigCallBackFn): void
  load(aPath: string, aOptions?: IConfigOptions): Promise<any>
  loadSync(aPath: string, aOptions: IConfigOptions): any
}
