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

  it 'should load config synchronously', ->
    result = loadConfig(__dirname+'/fixture/config')
    should.exist result
    result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
    result.should.be.deep.equal
      str: 'hello'

  it 'should load config synchronously with Bom', ->
    result = loadConfig(__dirname+'/fixture/con')
    should.exist result
    result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
    result.should.be.deep.equal
      test: 123


  it 'should load config asynchronously', (done)->
    loadConfig __dirname+'/fixture/config', (err, result)->
      return done(err) if err
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
      result.should.be.deep.equal
        str: 'hello'
      done()

  it 'should load config asynchronously with bom', (done)->
    loadConfig __dirname+'/fixture/con', (err, result)->
      return done(err) if err
      should.exist result
      result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
      result.should.be.deep.equal
        test: 123
      done()

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

    it 'should load config asynchronously overwrite path', (done)->
      result = new loadConfig __dirname+'/fixture/con'
      result.load __dirname+'/fixture/config', (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/config.json'
        result.should.be.deep.equal
          str: 'hello'
        done()

    it 'should load config asynchronously with bom', (done)->
      result = new loadConfig __dirname+'/fixture/con'
      result.load {encoding:'utf8'}, (err, result)->
        return done(err) if err
        should.exist result
        result.should.have.property '$cfgPath', __dirname+'/fixture/con.jon'
        result.should.be.deep.equal
          test: 123
        done()

  describe 'fake filesystem', ->
    fakeFS = require './fake-fs'
    afterEach ->
      fakeFS.result = {}
    it 'should set FileSystem', ->
      loadConfig.setFileSystem(fakeFS).should.be.true
      loadConfig::fs.should.be.equal fakeFS

    it 'should load config synchronously', ->
      result = loadConfig('config', encoding:'ascii')
      should.not.exist result
      expectedResult = {}
      for k of cfgs
        expectedResult['config'+k] = encoding: 'ascii'
      fakeFS.result.should.be.deep.equal expectedResult

    it 'should load config asynchronously', ()->
      loadConfig 'config', encoding:'ascii', (err, result)->
        should.not.exist result
        expectedResult = {}
        for k of cfgs
          expectedResult['config'+k] = encoding: 'ascii'
        fakeFS.result.should.be.deep.equal expectedResult

