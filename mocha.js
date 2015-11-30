var isServerSide = false;
if (typeof require !== 'undefined') {
  if (typeof chai === 'undefined') {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
  }
  if (typeof mocha === 'undefined') {
    var mocha = require('mocha');
  }
  if (typeof sinon === 'undefined') {
    var sinon = require('sinon');
  }
  if (typeof q === 'undefined') {
    var Q = require('q');
  }
  isServerSide = true;
}

var assert = chai.assert;
var expect = chai.expect;

describe('Mocha, Chai and Sinon', function () {
  it('should able to run', function () {
    assert.typeOf('foo', 'string')
  });

  it('can spy with sinon', function () {
    var foo = sinon.spy();
    foo();
    expect(foo.callCount).to.equal(1);
  });

  it('actally calls fn with spy', function () {
    var foo = {
      bar: function () {
        this.changed = true;
      }
    };
    sinon.spy(foo, 'bar');
    foo.bar();
    expect(foo.changed).to.equal(true);
  });

  it('does not calls fn with stub', function () {
    var foo = {
      bar: function () {
        this.changed = true;
      }
    };
    sinon.stub(foo, 'bar');
    foo.bar();
    expect(foo.changed).to.equal(undefined);
  });

  it('has mock feature', function () {
    var foo = {
      bar: function () {
        this.changed = true;
      }
    };
    var mock = sinon.mock(foo);
    sinon.mock(foo).expects('bar').once();
    foo.bar();
    expect(foo.changed).to.equal(undefined);
    mock.verify();
  });

  // nodejs doesn't have XMLHttpRequest
  if (!isServerSide) {
    it('mock ajax with sinon', function () {
      var spy = sinon.spy();
      var fakeXhr = sinon.useFakeXMLHttpRequest();
      fakeXhr.onCreate = function (req) {
        requests.push(req);
      }
      var requests = [];
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', spy); 
      xhr.open('GET', 'mock/url', true);
      xhr.send();
      requests[0].respond(200, {}, 'done');
      expect(spy.calledOnce).to.equal(true);
      fakeXhr.restore();
    });
  }

  it('supports done for async behavior', function (done) {
    function createPromise() {
      var defer = Q.defer();
      setTimeout(function () {
        defer.resolve();
      }, 100);
      return defer.promise;
    }

    createPromise().then(function () {
      expect(true).to.equal(true);
      done();
    });
  });

  // you have to actually call chai.should()
  // and it apply extnsion on Object.prototype
  it('has a should assertion (for me is not practical and confusing)', function () {
    var obj = {};
    var err = null;
    var should = chai.should();
    should.not.exist(err);
    obj.should.be.an('object');
  });

  it('has a syntax for promise with chai-as-promised', function () {
    chai.should();

    function createPromise() {
      var defer = Q.defer();
      setTimeout(function () {
        defer.resolve('mockResponse');
      }, 100);
      return defer.promise;
    }

    return createPromise().should.eventually.equal('mockResponse');
  });
});
console.log(assert.typeOf('foo', 'string'));
