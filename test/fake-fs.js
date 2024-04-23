module.exports = {
  files: {},
  result: {},
  path: require('path.js/lib/path').path,
  readFileSync: function(aPath, aOptions) {
    var text;
    this.result[aPath] = aOptions;
    if (aOptions.error) {
      throw aOptions.error;
    }
    return text = this.files[aPath] || aOptions.text;
  },
  readFile: function(aPath, aOptions, done) {
    var text;
    if (typeof aOptions === 'function') {
      done = aOptions;
      aOptions = null;
    }
    if (aOptions == null) {
      aOptions = {};
    }
    text = this.files[aPath] || aOptions.text;
    this.result[aPath] = aOptions;
    return done(aOptions.error, text);
  }
};
