import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
chai.use(sinonChai);

import loadConfig from '../src/';
import fakeFS from './fake-fs';

let cfgs = null;

describe('loadConfig', function() {
  before('register', function() {
    loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
  });
  it('should register a config format', function() {
    cfgs = loadConfig.register('json', JSON.parse);
    should.exist(cfgs);
    cfgs.should.have.property('.json', JSON.parse);
    delete cfgs['.json'];
  });
  it('should register a config format with multi extnames', function() {
    cfgs = loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse);
    should.exist(cfgs);
    cfgs.should.be.deep.equal({
      '.jsn': JSON.parse,
      '.jon': JSON.parse,
      '.json': JSON.parse
    });
  });
  describe('synchronously', function() {
    it('should load config synchronously', function() {
      var result;
      result = loadConfig(__dirname + '/fixture/config', {
        raiseError: true
      });
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config.part synchronously', function() {
      var result;
      result = loadConfig(__dirname + '/fixture/config.part', {
        raiseError: true
      });
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.part.json');
      result.should.be.deep.equal({
        part: 'hello'
      });
    });
    it('should load wrong config file synchronously failed', function() {
      loadConfig.bind(null, __dirname + '/fixture/err').should["throw"]('Unexpected token');
    });
    it('should raise error if raiseError is true and no config loaded', function() {
      loadConfig.bind(null, __dirname + '/fixture/xxy', {
        raiseError: true
      }).should["throw"]('xxy Nothing Loaded');
    });
    it('should exclude itself synchronously', function() {
      var file, result;
      file = __dirname + '/fixture/config.json';
      result = loadConfig(file, {
        exclude: file
      });
      should.not.exist(result);
    });
    it('should load config synchronously with Bom', function() {
      var result;
      result = loadConfig(__dirname + '/fixture/conf');
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/conf.json');
      result.should.be.deep.equal({
        test: 123
      });
    });
  });
  describe('asynchronously', function() {
    it('should exclude itself asynchronously', function(done) {
      var file;
      file = __dirname + '/fixture/config.json';
      loadConfig(file, {
        exclude: file
      }, function(err, result) {
        should.not.exist(result);
        done(err, result);
      });
    });
    it('should load config asynchronously', function(done) {
      loadConfig(__dirname + '/fixture/config', {
        raiseError: true
      }, function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
        done();
      });
    });
    it('should raise error if raiseError is true and no config loaded', function(done) {
      loadConfig(__dirname + '/fixture/xxy', {
        raiseError: true
      }, function(err, result) {
        should.exist(err);
        err.should.have.property('message', 'xxy Nothing Loaded');
        done();
      });
    });
    it('should load wrong config file asynchronously failed', function(done) {
      loadConfig(__dirname + '/fixture/err', function(err, result) {
        should.exist(err);
        err.should.have.property('name', 'err.json:SyntaxError');
        done();
      });
    });
    it('should load config asynchronously with bom', async function() {
      const result = await loadConfig.load(__dirname + '/fixture/conf');
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/conf.json');
      result.should.be.deep.equal({
        test: 123
      });
  });
  });
  describe('object usage', function() {
    it('should create a new Config object', function() {
      var result;
      result = new loadConfig('path1', {
        hi: 112
      });
      result.should.have.property('path', 'path1');
      result.should.have.ownProperty('options');
      result.options.should.be.deep.equal({
        hi: 112
      });
    });
    it('should create a new Config object without path', function() {
      var result;
      result = new loadConfig({
        hi: 112
      });
      result.should.have.property('path', void 0);
      result.should.have.ownProperty('options');
      result.options.should.be.deep.equal({
        hi: 112
      });
    });
    it('should load config synchronously', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/config');
      result = result.loadSync();
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config.part synchronously', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/config.part');
      result = result.loadSync();
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.part.json');
      result.should.be.deep.equal({
        part: 'hello'
      });
    });
    it('should load config synchronously overwrite path', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/con');
      result = result.loadSync(__dirname + '/fixture/config');
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    it('should load config synchronously with Bom', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/conf');
      result = result.loadSync({
        encoding: 'utf8'
      });
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/conf.json');
      result.should.be.deep.equal({
        test: 123
      });
    });
    it('should load config asynchronously', function() {
      var result;
      result = new loadConfig(__dirname + '/fixture/config');
      result.load().then(function(result) {
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
      });
    });
    it('should load config.part asynchronously', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/config.part');
      result.load(function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.part.json');
        result.should.be.deep.equal({
          part: 'hello'
        });
        done();
      });
    });
    it('should load config asynchronously with raiseError if nothing loaded.', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/xxx', {
        raiseError: true
      });
      result.load(function(err, result) {
        should.exist(err);
        err.should.have.property('message', 'xxx Nothing Loaded');
        should.not.exist(result);
        done();
      });
    });
    it('should load config asynchronously overwrite path', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/con');
      result.load(__dirname + '/fixture/config', function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
        done();
      });
    });
    it('should load config asynchronously with bom', function(done) {
      var result;
      result = new loadConfig(__dirname + '/fixture/conf');
      result.load({
        encoding: 'utf8'
      }, function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/conf.json');
        result.should.be.deep.equal({
          test: 123
        });
        done();
      });
    });
  });
  describe('external configurators', function() {
    var configs, oldConfigs;
    configs = {};
    oldConfigs = null;
    before(function() {
      oldConfigs = loadConfig.prototype.configurators;
      loadConfig.prototype.configurators = null;
    });
    after(function() {
      loadConfig.prototype.configurators = oldConfigs;
    });
    it('should register a config format', function() {
      cfgs = loadConfig.register('json', JSON.parse, configs);
      should.exist(cfgs);
      cfgs.should.have.property('.json', JSON.parse, configs);
      cfgs.should.be.equal(configs);
      delete cfgs['.json'];
    });
    it('should register a config format with multi extnames', function() {
      cfgs = loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse, configs);
      should.exist(cfgs);
      cfgs.should.be.equal(configs);
      cfgs.should.be.deep.equal({
        '.jsn': JSON.parse,
        '.jon': JSON.parse,
        '.json': JSON.parse
      });
    });
    it('should load config synchronously', function() {
      var result;
      result = loadConfig(__dirname + '/fixture/config', {
        configurators: configs
      });
      should.exist(result);
      result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
      result.should.be.deep.equal({
        str: 'hello'
      });
    });
    return it('should load config asynchronously', function(done) {
      loadConfig(__dirname + '/fixture/config', {
        configurators: configs
      }, function(err, result) {
        if (err) {
          return done(err);
        }
        should.exist(result);
        result.should.have.property('$cfgPath', __dirname + '/fixture/config.json');
        result.should.be.deep.equal({
          str: 'hello'
        });
        done();
      });
    });
  });
  describe('fake filesystem', function() {
    cfgs = {};
    before(function() {
      expect(loadConfig.setFileSystem(fakeFS)).to.be.true
      cfgs = loadConfig.register(['.jsn', 'jon', '.json'], JSON.parse, cfgs);
    });
    afterEach(function() {
      fakeFS.result = {};
    });
    it('should set FileSystem', function() {
      loadConfig.prototype.fs.should.be.equal(fakeFS);
    });
    it('should load config synchronously', function() {
      var expectedResult, k, result;
      result = loadConfig('config', {
        encoding: 'ascii',
        configurators: cfgs
      });
      should.not.exist(result);
      expectedResult = {};
      for (k in cfgs) {
        expectedResult['config' + k] = {
          configurators: cfgs,
          encoding: 'ascii'
        };
      }
      fakeFS.result.should.be.deep.equal(expectedResult);
    });
    it('should load config asynchronously', function(done) {
      loadConfig('config', {
        encoding: 'ascii',
        configurators: cfgs
      }, function(err, result) {
        var expectedResult, k;
        should.not.exist(result);
        expectedResult = {};
        for (k in cfgs) {
          expectedResult['config' + k] = {
            configurators: cfgs,
            encoding: 'ascii'
          };
        }
        expect(fakeFS.result, 'fakeFS result').to.be.deep.equal(expectedResult);
        done();
      });
    });
    it('should raise error setFileSystem without readFile', function() {
      let err
      try {
        loadConfig.setFileSystem({})
      } catch(e) {err = e}
      expect(err).to.be.an.instanceof(Error)
      expect(err.message).to.be.equal('FileSystem must have readFile function')
    });
  });
});
