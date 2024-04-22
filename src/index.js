const indexOf = [].indexOf || function(item) { for (let i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

import { isArray, isString, isObject, isFunction, defineProperty } from 'util-ex'
import { any } from 'promise-sequence'
import _path from 'path.js'
import _fs from 'fs'

import { promisify } from './promisify'
import './polyfill-asCallback'

const getKeys = Object.keys;

function stripUtf8Bom(str) {
  if (str.charAt(0) === '\ufeff') {
    return str.slice(1);
  } else {
    return str;
  }
};

Config.prototype.configurators = {};

let fs = Config.prototype.fs = null;
let path = Config.prototype.path = _path;
let readFile = Config.prototype.readFile = null;

function replaceExt(aPath, aExt, aRegisteredExts) {
  let result;
  if (!aRegisteredExts) {
    aRegisteredExts = getKeys(Config.prototype.configurators);
  }
  result = path.extname(aPath);
  if (indexOf.call(aRegisteredExts, result) >= 0) {
    result = path.replaceExt(aPath, aExt);
  } else {
    result = aPath + aExt;
  }
  return result;
};

export function Config(aPath, aOptions, done) {
  let result;
  if (!(this instanceof Config)) {
    if (isFunction(aOptions)) {
      done = aOptions;
      aOptions = null;
    }
    if (isFunction(done)) {
      result = Config.load(aPath, aOptions, done);
    } else {
      result = Config.loadSync(aPath, aOptions);
    }
    return result;
  }
  if (isObject(aPath)) {
    aOptions = aPath;
    aPath = void 0;
  }
  this.path = aPath;
  if (isObject(aOptions)) {
    this.options = aOptions;
  }
}

Config.prototype.load = function(aPath, aOptions, done) {
  if (isObject(aPath)) {
    done = aOptions;
    aOptions = aPath;
    aPath = null;
  } else if (isFunction(aPath)) {
    done = aPath;
    aPath = null;
    aOptions = null;
  } else if (isFunction(aOptions)) {
    done = aOptions;
    aOptions = null;
  }
  if (aPath == null) {
    aPath = this.path;
  }
  if (aOptions == null) {
    aOptions = this.options;
  }
  return Config.load(aPath, aOptions, done);
};

Config.prototype.loadSync = function(aPath, aOptions) {
  if (isObject(aPath)) {
    aOptions = aPath;
    aPath = null;
  }
  if (aPath == null) {
    aPath = this.path;
  }
  if (aOptions == null) {
    aOptions = this.options;
  }
  return Config.loadSync(aPath, aOptions);
};

Config.load = function(aPath, aOptions, done) {
  if (aOptions == null) {
    aOptions = {};
  }
  if (aOptions.encoding == null) {
    aOptions.encoding = 'utf8';
  }
  const vConfigurators = isObject(aOptions.configurators) ? aOptions.configurators : Config.prototype.configurators;
  const raiseError = aOptions.raiseError;
  let excludes = aOptions.exclude;
  if (isString(excludes)) {
    excludes = [excludes];
  } else if (!isArray(excludes)) {
    excludes = null;
  }
  const vRegisteredExts = getKeys(vConfigurators);
  let vFiles = vRegisteredExts.map(function(ext) {
    return replaceExt(aPath, ext, vRegisteredExts);
  });
  if (excludes) {
    vFiles = vFiles.filter(function(file) {
      const result = !(indexOf.call(excludes, file) >= 0);
      return result
    });
  }
  return any(vFiles, function(file) {
    return readFile(file, aOptions).then(function(content) {
      if (content) {
        const proc = vConfigurators[path.extname(file)];
        content = proc(stripUtf8Bom(content), aOptions, file);
        if (content) {
          defineProperty(content, '$cfgPath', file);
        }
      }
      return content;
    }).catch(function(err) {
      if (err.code !== 'ENOENT') {
        err.name = path.basename(file) + ':' + err.name;
        throw err;
      }
    });
  }).then(function(content) {
    if (raiseError && content === void 0) {
      throw new TypeError(path.basename(aPath) + ' Nothing Loaded');
    }
    return content;
  }).asCallback(done);
};

Config.loadSync = function(aPath, aOptions) {
  let result;
  if (aOptions == null) {
    aOptions = {};
  }
  if (aOptions.encoding == null) {
    aOptions.encoding = 'utf8';
  }
  const raiseError = aOptions.raiseError;
  const vConfigurators = isObject(aOptions.configurators) ? aOptions.configurators : Config.prototype.configurators;
  let excludes = aOptions.exclude;
  if (isString(excludes)) {
    excludes = [excludes];
  } else if (!isArray(excludes)) {
    excludes = null;
  }
  const vRegisteredExts = getKeys(vConfigurators);
  for (const ext in vConfigurators) {
    const proc = vConfigurators[ext];
    const vConfigPath = replaceExt(aPath, ext, vRegisteredExts);
    if (excludes && (indexOf.call(excludes, vConfigPath) >= 0)) {
      continue;
    }
    try {
      result = stripUtf8Bom(fs.readFileSync(vConfigPath, aOptions));
    } catch (error) {
      continue;
    }
    try {
      result = proc(result, aOptions, vConfigPath);
    } catch (err) {
      err.name = path.basename(vConfigPath) + ':' + err.name;
      throw err;
    }
    if (result) {
      defineProperty(result, '$cfgPath', vConfigPath);
      break;
    }
  }
  if (raiseError && result === undefined) {
    throw new TypeError(path.basename(aPath) + ' Nothing Loaded');
  }
  return result;
};

Config.register = function(aExts, aProcess, aConfigurators) {
  let result;
  if (aConfigurators == null) {
    aConfigurators = Config.prototype.configurators;
  }
  if (isFunction(aProcess)) {
    if (isArray(aExts)) {
      aExts.forEach(function(ext) {
        if (ext[0] !== '.') {
          ext = '.' + ext;
        }
        aConfigurators[ext] = aProcess;
      });
      result = aConfigurators;
    } else if (isString(aExts)) {
      if (aExts[0] !== '.') {
        aExts = '.' + aExts;
      }
      aConfigurators[aExts] = aProcess;
      result = aConfigurators;
    }
  }
  return result;
};

Config.setFileSystem = function(aFileSystem) {
  if (aFileSystem && (aFileSystem.readFile || aFileSystem.readFileAsync)) {
    Config.prototype.fs = fs = aFileSystem;
    if (fs.readFileSync && !fs.readFile) {
      fs.readFile = fs.readFileSync;
    }
    if (fs.readFile && typeof fs.readFileAsync !== 'function') {
      fs.readFileAsync = promisify(fs.readFile, fs);
    }
    if (aFileSystem.path) {
      Config.prototype.path = path = aFileSystem.path;
    }
    Config.prototype.readFile = readFile = fs.readFileAsync;
    return true;
  } else {
    throw new TypeError('FileSystem must have readFile function');
  }
};

Config.setFileSystem(_fs);

export default Config;
