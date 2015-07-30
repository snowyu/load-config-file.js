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
    result.should.be.deep.equal
      str: 'hello'

  it 'should load config synchronously with Bom', ->
    result = loadConfig(__dirname+'/fixture/con')
    should.exist result
    result.should.be.deep.equal
      test: 123


  it 'should load config asynchronously', (done)->
    loadConfig __dirname+'/fixture/config', (err, result)->
      return done(err) if err
      should.exist result
      result.should.be.deep.equal
        str: 'hello'
      done()

  it 'should load config asynchronously with bom', (done)->
    loadConfig __dirname+'/fixture/con', (err, result)->
      return done(err) if err
      should.exist result
      result.should.be.deep.equal
        test: 123
      done()

  describe 'fake filesystem', ->
    fakeFS = require './fake-fs'
    afterEach ->
      fakeFS.result = {}
    it 'should set FileSystem', ->
      loadConfig.setFileSystem(fakeFS).should.be.true

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

