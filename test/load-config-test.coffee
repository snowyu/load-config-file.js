chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)


loadConfig      = require '../src/'
cfgs            = null

describe 'loadConfig', ->
  before 'register', ->
    loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse

  it 'should register a config format', ->
    cfgs = loadConfig.register 'json', JSON.parse
    should.exist cfgs
    cfgs.should.have.property '.json', JSON.parse
    delete cfgs['.json']

  it 'should register a config format with multi extnames', ->
    cfgs = loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse
    should.exist cfgs
    cfgs.should.be.deep.equal
      '.jsn': JSON.parse
      '.jon': JSON.parse
      '.json': JSON.parse

  describe 'synchronously', ->

    it 'should load config synchronously', ->
      result = loadConfig(__dirname+'/fixture/config', raiseError:true)
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'

    it 'should load config.part synchronously', ->
      result = loadConfig(__dirname+'/fixture/config.part', raiseError:true)
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.part.json'
      result.should.be.deep.equal
        part: 'hello'

    it 'should load wrong config file synchronously failed', ->
      loadConfig.bind(null, __dirname+'/fixture/err').should.throw('Unexpected token')

    it 'should raise error if raiseError is true and no config loaded', ->
      loadConfig.bind(null, __dirname+'/fixture/xxy', raiseError: true).should.throw('xxy Nothing Loaded')

    it 'should exclude itself synchronously', ->
      file = __dirname+'/fixture/config.json'
      result = loadConfig(file, exclude:file)
      should.not.exist result

    it 'should load config synchronously with Bom', ->
      result = loadConfig(__dirname+'/fixture/con')
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
      result.should.be.deep.equal
        test: 123

  describe 'asynchronously', ->
    it 'should exclude itself asynchronously', (done)->
      file = __dirname+'/fixture/config.json'
      loadConfig file, exclude:file, (err, result)->
        should.not.exist result
        done(err, result)
      return

    it 'should load config asynchronously', (done)->
      loadConfig __dirname+'/fixture/config', raiseError:true, (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return

    it 'should raise error if raiseError is true and no config loaded', (done)->
      loadConfig __dirname+'/fixture/xxy', raiseError: true, (err, result)->
        should.exist err
        err.should.have.property 'message', 'xxy Nothing Loaded'
        done()
      return

    it 'should load wrong config file asynchronously failed', (done)->
      loadConfig __dirname+'/fixture/err', (err, result)->
        should.exist err
        err.should.have.property 'name', 'err.json:SyntaxError'
        done()
      return

    it 'should load config asynchronously with bom', (done)->
      loadConfig __dirname+'/fixture/con', (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
        result.should.be.deep.equal
          test: 123
        done()
      return

  describe 'object usage', ->
    it 'should create a new Config object', ->
      result = new loadConfig 'path1', {hi:112}
      result.should.have.property 'path', 'path1'
      result.should.have.ownProperty 'options'
      result.options.should.be.deep.equal {hi:112}

    it 'should load config synchronously', ->
      result = new loadConfig(__dirname+'/fixture/config')
      result = result.loadSync()
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'

    it 'should load config.part synchronously', ->
      result = new loadConfig(__dirname+'/fixture/config.part')
      result = result.loadSync()
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.part.json'
      result.should.be.deep.equal
        part: 'hello'

    it 'should load config synchronously overwrite path', ->
      result = new loadConfig(__dirname+'/fixture/con')
      result = result.loadSync(__dirname+'/fixture/config')
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'


    it 'should load config synchronously with Bom', ->
      result = new loadConfig(__dirname+'/fixture/con')
      result = result.loadSync(encoding:'utf8')
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
      result.should.be.deep.equal
        test: 123


    it 'should load config asynchronously', (done)->
      result = new loadConfig __dirname+'/fixture/config'
      result.load (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return

    it 'should load config.part asynchronously', (done)->
      result = new loadConfig __dirname+'/fixture/config.part'
      result.load (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.part.json'
        result.should.be.deep.equal
          part: 'hello'
        done()
      return

    it 'should load config asynchronously with raiseError if nothing loaded.', (done)->
      result = new loadConfig __dirname+'/fixture/xxx', raiseError: true
      result.load (err, result)->
        should.exist err
        err.should.have.property 'message', 'xxx Nothing Loaded'
        should.not.exist result
        done()
      return

    it 'should load config asynchronously overwrite path', (done)->
      result = new loadConfig __dirname+'/fixture/con'
      result.load __dirname+'/fixture/config', (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return

    it 'should load config asynchronously with bom', (done)->
      result = new loadConfig __dirname+'/fixture/con'
      result.load {encoding:'utf8'}, (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
        result.should.be.deep.equal
          test: 123
        done()
      return

  describe 'external configurators', ->
    configs = {}
    oldConfigs = null
    before ->
      oldConfigs = loadConfig::configurators
      loadConfig::configurators = null
    after ->
      loadConfig::configurators = oldConfigs
    it 'should register a config format', ->
      cfgs = loadConfig.register 'json', JSON.parse, configs
      should.exist cfgs
      cfgs.should.have.property '.json', JSON.parse, configs
      cfgs.should.be.equal configs
      delete cfgs['.json']

    it 'should register a config format with multi extnames', ->
      cfgs = loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse, configs
      should.exist cfgs
      cfgs.should.be.equal configs
      cfgs.should.be.deep.equal
        '.jsn': JSON.parse
        '.jon': JSON.parse
        '.json': JSON.parse

    it 'should load config synchronously', ->
      result = loadConfig(__dirname+'/fixture/config', configurators:configs)
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'

    it 'should load config asynchronously', (done)->
      loadConfig __dirname+'/fixture/config', configurators:configs, (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()
      return


  describe 'fake filesystem', ->
    fakeFS = require './fake-fs'
    cfgs = {}
    before ->
      loadConfig.setFileSystem(fakeFS).should.be.true
      cfgs = loadConfig.register ['.jsn', 'jon', '.json'], JSON.parse, cfgs
    afterEach ->
      fakeFS.result = {}
      return
    it 'should set FileSystem', ->
      loadConfig::fs.should.be.equal fakeFS

    it 'should load config synchronously', ->
      result = loadConfig('config', encoding:'ascii', configurators:cfgs)
      should.not.exist result
      expectedResult = {}
      for k of cfgs
        expectedResult['config'+k] = configurators:cfgs, encoding: 'ascii'
      fakeFS.result.should.be.deep.equal expectedResult

    it 'should load config asynchronously', (done)->
      loadConfig 'config', encoding:'ascii', configurators:cfgs, (err, result)->
        should.not.exist result
        expectedResult = {}
        for k of cfgs
          expectedResult['config'+k] = configurators:cfgs, encoding: 'ascii'
        expect(fakeFS.result, 'fakeFS result').to.be.deep.equal expectedResult
        done()
      return

