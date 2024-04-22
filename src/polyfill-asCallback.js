import {callbackify} from './callbackify'
import {isFunction} from 'util-ex'

if (!Promise.prototype.asCallback) {
  Promise.prototype.asCallback = function(done) {
    return (isFunction(done)) ? callbackify(this, done) : this
  }
}
