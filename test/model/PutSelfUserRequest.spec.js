

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApacheFineract);
  }
}(this, function(expect, ApacheFineract) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApacheFineract.PutSelfUserRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PutSelfUserRequest', function() {
    it('should create an instance of PutSelfUserRequest', function() {
      // uncomment below and update the code to test PutSelfUserRequest
      //var instane = new ApacheFineract.PutSelfUserRequest();
      //expect(instance).to.be.a(ApacheFineract.PutSelfUserRequest);
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ApacheFineract.PutSelfUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property repeatPassword (base name: "repeatPassword")', function() {
      // uncomment below and update the code to test the property repeatPassword
      //var instane = new ApacheFineract.PutSelfUserRequest();
      //expect(instance).to.be();
    });

  });

}));
