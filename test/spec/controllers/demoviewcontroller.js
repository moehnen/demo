'use strict';

describe('Controller: DemoviewcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var DemoviewcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DemoviewcontrollerCtrl = $controller('DemoviewcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
