(function() {
  var isArray = require('util-ex/lib/is/type/array');

  var isString = require('util-ex/lib/is/type/string');

  var isFunction = require('util-ex/lib/is/type/function');

  //the coffee-coverage bug on Promise.reduce, make the total(content) as number increase.
  //so use js instead.
  var Promise = require('bluebird');

  var path = require('path.js/lib/path').path;

  var getKeys = Object.keys;

  var fs = null;

  var readFile = null;

  var gConfigurators = {};

  function stripBom(str) {
    if (str.charAt(0) === '\ufeff') {
      return str.slice(1);
    } else {
      return str;
    }
  }

  var Config = module.exports = function Config(aPath, aOptions, done) {
    var result;
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

  Config.load = function(aPath, aOptions, done) {
    if (aOptions == null) {
      aOptions = {};
    }
    if (aOptions.encoding == null) {
      aOptions.encoding = 'utf8';
    }
    return Promise.reduce(getKeys(gConfigurators), function(content, ext) {
      var proc, vConfigPath;
      vConfigPath = path.replaceExt(aPath, ext);
      if (!content) {
        proc = gConfigurators[ext];
        content = readFile(vConfigPath, aOptions).then(function(data) {
          return proc(stripBom(data), aOptions);
        }).caught(function() {});
      }// else {
      //  return content;
      //}
      return content;
    }, null).nodeify(done);
  };

  Config.loadSync = function(aPath, aOptions) {
    var ext, proc, result, vConfigPath;
    if (aOptions == null) {
      aOptions = {};
    }
    if (aOptions.encoding == null) {
      aOptions.encoding = 'utf8';
    }
    for (ext in gConfigurators) {
      proc = gConfigurators[ext];
      vConfigPath = path.replaceExt(aPath, ext);
      try {
        result = stripBom(fs.readFileSync(vConfigPath, aOptions));
      } catch (_error) {
        continue;
      }
      result = proc(result, aOptions);
      break;
    }
    return result;
  };

  Config.register = function(aExts, aProcess) {
    var result;
    if (isFunction(aProcess)) {
      if (isArray(aExts)) {
        aExts.forEach(function(ext) {
          if (ext[0] !== '.') {
            ext = '.' + ext;
          }
          gConfigurators[ext] = aProcess;
        });
        result = gConfigurators;
      } else if (isString(aExts)) {
        if (aExts[0] !== '.') {
          aExts = '.' + aExts;
        }
        gConfigurators[aExts] = aProcess;
        result = gConfigurators;
      }
    }
    return result;
  };

  Config.setFileSystem = function(aFileSystem) {
    if (aFileSystem && aFileSystem.readFile) {
      fs = aFileSystem;
      readFile = Promise.promisify(fs.readFile, fs);
      return true;
    }
  };


  Config.setFileSystem(require('fs'));

}).call(this);
