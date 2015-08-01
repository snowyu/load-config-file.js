## load-config-file [![npm](https://img.shields.io/npm/v/load-config-file.svg)](https://npmjs.org/package/load-config-file)

[![Build Status](https://img.shields.io/travis/snowyu/load-config-file.js/master.svg)](http://travis-ci.org/snowyu/load-config-file.js)
[![Code Climate](https://codeclimate.com/github/snowyu/load-config-file.js/badges/gpa.svg)](https://codeclimate.com/github/snowyu/load-config-file.js)
[![Test Coverage](https://codeclimate.com/github/snowyu/load-config-file.js/badges/coverage.svg)](https://codeclimate.com/github/snowyu/load-config-file.js/coverage)
[![downloads](https://img.shields.io/npm/dm/load-config-file.svg)](https://npmjs.org/package/load-config-file)
[![license](https://img.shields.io/npm/l/load-config-file.svg)](https://npmjs.org/package/load-config-file)

Load the config file as a plain object. The config file format can be registered.
The registered file format order is the search order.

## Usage

```js
var loadConfig = require('load-config-file');
var yaml  = require('js-yaml');
var cson  = require('cson');

loadConfig.register(['.yaml', '.yml'], yaml.safeLoad);
loadConfig.register('.cson', cson.parseCSONString.bind(cson));
loadConfig.register('.json', JSON.parse);

//Synchronously load config from file.
//it will search config.yaml, config.yml, config.cson, config.json
//the first exist file will be loaded.
//the default encoding is "utf8" if no encoding.
//loadConfig('config', {encoding: 'ascii'})
//the non-enumerable "$cfgPath" property added.
console.log(loadConfig('config'));

//Asynchronously load config from file
loadConfig('config', function(err, result){
  if (err) {
    console.log('error:', err);
  } else {
    console.log(result);
  }
})

```

## API

```js
var config = require('load-config-file');
```

* `config.setFileSystem(fs)`: set your favour file system. defaults to 'fs'.
  * the "file system" must implement `readFile(path[, options], done)` and `readFileSync(path[, options])`
* `load(path, options, done)`: Asynchronously load config from file
  * return the plain object and the `$cfgPath` property added if successful.
* `loadSync(path, options)`: Synchronously load config from file
  * return the plain object and the `$cfgPath` property added if successful.

## Changes

### v0.2

+ add the `$cfgPath`*(String)* non-enumerable property to the result.
+ add object supports:

    ```js
    var cfgObj = new Config(aPath, aOptions)
    result = cfgObj.loadSync()
    ```

## License

MIT

