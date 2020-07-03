var callbackify     = require('./callbackify').callbackify
var isFunction      = require('util-ex/lib/is/type/function')

if (!Promise.prototype.asCallback) {
  Promise.prototype.asCallback = function(done) {
    return (isFunction(done)) ? callbackify(this, done) : this
  }
}
