describe('Jasmine', function () {
  it('should able to run', function () {
    expect(true).toEqual(true);
  });

  it('can use spy', function () {
    var foo = jasmine.createSpy();
    foo();
    expect(foo.calls.count()).toEqual(1);
  });

  it('does not call fn when spy', function () {
    var foo = {
      bar: function () {
        this.changed = true;
      }
    };
    spyOn(foo, 'bar');
    foo.bar();
    expect(foo.changed).toEqual(undefined);
  });

  it('calls fn with and.callthrough method of spy', function () {
    var foo = {
      bar: function () {
        this.changed = true;
      }
    };
    spyOn(foo, 'bar');
    foo.bar.and.callThrough();
    foo.bar();
    expect(foo.changed).toEqual(true);
  });

  it('can mock ajax with mock-ajax plugin', function () {
    jasmine.Ajax.install();
    var spy = jasmine.createSpy();
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', spy); 
    xhr.open('GET', 'mock/url', true);
    xhr.send();
    jasmine.Ajax.requests.mostRecent().respondWith({
      status: 200,
      responseText: 'done'
    });
    expect(spy).toHaveBeenCalled();
    jasmine.Ajax.uninstall();
  });

  it('supports done for async behavior', function (done) {
    function createPromise() {
      var defer = Q.defer();
      setTimeout(function () {
        defer.resolve();
      }, 100);
      return defer.promise;
    }

    createPromise().then(function () {
      expect(true).toEqual(true);
      done();
    });
  });
});
