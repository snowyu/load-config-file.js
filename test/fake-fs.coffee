isFunction      = require 'util-ex/lib/is/type/function'

module.exports  =
  files: {}
  result:{}
  readFileSync: (aPath, aOptions)->
    @result[aPath] = aOptions
    throw aOptions.error if aOptions.error
    text = @files[aPath] || aOptions.text
  readFile: (aPath, aOptions, done)->
    if isFunction aOptions
      done = aOptions
      aOptions = null
    aOptions ?= {}
    text = @files[aPath] || aOptions.text
    @result[aPath] = aOptions
    done(aOptions.error, text)