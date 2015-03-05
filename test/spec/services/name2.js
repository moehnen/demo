'use strict';

describe('Service: name2', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var name2;
  beforeEach(inject(function (_name2_) {
    name2 = _name2_;
  }));

  it('should do something', function () {
    expect(!!name2).toBe(true);
  });

});
