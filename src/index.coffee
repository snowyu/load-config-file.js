# require('any-promise/register/bluebird')
isArray         = require('util-ex/lib/is/type/array')
isString        = require('util-ex/lib/is/type/string')
isObject        = require('util-ex/lib/is/type/object')
isFunction      = require('util-ex/lib/is/type/function')
defineProperty  = require('util-ex/lib/defineProperty')
# Promise         = require('any-promise')
any             = require('promise-sequence/lib/any')
{callbackify}   = require('./callbackify')

if !Promise::asCallback
  Promise::asCallback = (done) ->
    callbackify(this, done)

getKeys     = Object.keys

stripBom = (str) ->
  if str.charAt(0) == '\ufeff' then str.slice(1) else str

class Config

  configurators: {}
  fs: fs = null
  path: path = require('path.js')#require('path.js/lib/path').path
  readFile: readFile = null

  replaceExt = (aPath, aExt, aRegisteredExts)->
    aRegisteredExts = getKeys Config::configurators unless aRegisteredExts
    result = path.extname aPath
    if result in aRegisteredExts
      result = path.replaceExt aPath, aExt
    else
      result = aPath + aExt
    result

  constructor: (aPath, aOptions, done) ->
    unless @ instanceof Config
      if isFunction(aOptions)
        done = aOptions
        aOptions = null
      if isFunction(done)
        result = Config.load(aPath, aOptions, done)
      else
        result = Config.loadSync(aPath, aOptions)
      return result
    @path = aPath
    @options = aOptions if isObject aOptions

  load: (aPath, aOptions, done)->
    if isObject(aPath)
      done  = aOptions
      aOptions = aPath
      aPath = null
    else if isFunction(aPath)
      done = aPath
      aPath = null
      aOptions = null
    else if isFunction(aOptions)
      done = aOptions
      aOptions = null
    aPath ?= @path
    aOptions ?= @options
    Config.load aPath, aOptions, done
    @

  loadSync: (aPath, aOptions)->
    if isObject(aPath)
      aOptions = aPath
      aPath = null
    aPath ?= @path
    aOptions ?= @options
    Config.loadSync aPath, aOptions

  @load: (aPath, aOptions, done) ->
    aOptions ?= {}
    aOptions.encoding ?= 'utf8'
    if isObject aOptions.configurators
      vConfigurators = aOptions.configurators
    else
      vConfigurators = Config::configurators
    raiseError = aOptions.raiseError
    excludes = aOptions.exclude
    if isString excludes
      excludes = [excludes]
    else if !isArray excludes
      excludes = null

    vRegedExts = getKeys(vConfigurators)
    vFiles = vRegedExts.map (ext)->replaceExt(aPath, ext, vRegedExts)
    if excludes
      vFiles = vFiles.filter (file)->result = !(file in excludes)
    any vFiles, (file)->
      readFile(file, aOptions)
      .then (content)->
        if content
          proc = vConfigurators[path.extname(file)]
          content = proc stripBom(content), aOptions, file
          defineProperty content, '$cfgPath', file if content
        content
      .catch (err)->
        if err.code != 'ENOENT'
          err.name = path.basename(file) + ':' + err.name
          throw err
        return

    .then (content)->
      if raiseError and content is undefined
        throw new TypeError(path.basename(aPath) + ' Nothing Loaded')
      content
    .asCallback done

  @loadSync: (aPath, aOptions) ->
    aOptions ?= {}
    aOptions.encoding ?= 'utf8'
    raiseError = aOptions.raiseError
    if isObject aOptions.configurators
      vConfigurators = aOptions.configurators
    else
      vConfigurators = Config::configurators
    excludes = aOptions.exclude
    if isString excludes
      excludes = [excludes]
    else if !isArray excludes
      excludes = null

    vRegedExts = getKeys(vConfigurators)
    for ext, proc of vConfigurators
      vConfigPath = replaceExt(aPath, ext, vRegedExts)
      continue if excludes and (vConfigPath in excludes)
      try
        result = stripBom(fs.readFileSync(vConfigPath, aOptions))
      catch err
        continue
      try
        result = proc(result, aOptions, vConfigPath)
      catch err
        err.name = path.basename(vConfigPath) + ':' + err.name
        throw err

      if result
        defineProperty result, '$cfgPath', vConfigPath
        break
    if raiseError and result is undefined
      throw new TypeError(path.basename(aPath) + ' Nothing Loaded')
    result

  @register: (aExts, aProcess, aConfigurators) ->
    aConfigurators ?= Config::configurators
    if isFunction(aProcess)
      if isArray(aExts)
        aExts.forEach (ext) ->
          ext = '.' + ext if ext[0] != '.'
          aConfigurators[ext] = aProcess
          return
        result = aConfigurators
      else if isString(aExts)
        aExts = '.' + aExts if aExts[0] != '.'
        aConfigurators[aExts] = aProcess
        result = aConfigurators
    result

  @setFileSystem: (aFileSystem) ->
    if aFileSystem and aFileSystem.readFile
      Config::fs = fs = aFileSystem
      if fs.readFileSync && !fs.readFile
        fs.readFile = fs.readFileSync
      else if fs.readFile
        if !fs.readFile.then
          fs.readFile = ((aReadFile) ->
            (aPath, aOptions) ->
              new Promise (resolve, reject)->
                aReadFile.call fs, aPath, aOptions, (err, content) ->
                  if err then return reject(err)
                  resolve(content)
                  return
          )(fs.readFile)
      Config::path = path = aFileSystem.path if aFileSystem.path
      Config::readFile = readFile = fs.readFile.bind(fs)
      true

Config.setFileSystem require('fs')

module.exports = Config
module.exports.default = Config
