isArray         = require('util-ex/lib/is/type/array')
isString        = require('util-ex/lib/is/type/string')
isObject        = require('util-ex/lib/is/type/object')
isFunction      = require('util-ex/lib/is/type/function')
defineProperty  = require('util-ex/lib/defineProperty')
Promise         = require('bluebird')
any             = require('promise-sequence/lib/any')
path            = require('path.js/lib/path').path

getKeys     = Object.keys

stripBom = (str) ->
  if str.charAt(0) == '\ufeff' then str.slice(1) else str

module.exports = class Config

  configurators: {}
  fs: fs = null
  readFile: readFile = null

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

    vFiles = getKeys(vConfigurators).map (ext)->path.replaceExt(aPath, ext)
    any vFiles, (file)->
      readFile(file, aOptions)
      .then (content)->
        proc = vConfigurators[path.extname(file)]
        result = proc stripBom(content), aOptions
        defineProperty result, '$cfgPath', file if result
        result
      .catch ->undefined #TODO: this is a workaround bug on coffee-coverage,
      #it will inject codes to the empty function and return calls count.
    .then (content)->
      if raiseError and content is undefined
        throw new TypeError('Nothing Loaded')
      content
    .nodeify done

  @loadSync: (aPath, aOptions) ->
    aOptions ?= {}
    aOptions.encoding ?= 'utf8'
    if isObject aOptions.configurators
      vConfigurators = aOptions.configurators
    else
      vConfigurators = Config::configurators

    for ext, proc of vConfigurators
      vConfigPath = path.replaceExt(aPath, ext)
      try
        result = stripBom(fs.readFileSync(vConfigPath, aOptions))
      catch
        continue
      result = proc(result, aOptions)
      if result
        defineProperty result, '$cfgPath', vConfigPath if result
        break
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
      Config::readFile = readFile = Promise.promisify(fs.readFile, fs)
      true

Config.setFileSystem require('fs')

