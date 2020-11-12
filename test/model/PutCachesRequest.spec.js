

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
    instance = new ApacheFineract.PutCachesRequest();
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

  describe('PutCachesRequest', function() {
    it('should create an instance of PutCachesRequest', function() {
      // uncomment below and update the code to test PutCachesRequest
      //var instane = new ApacheFineract.PutCachesRequest();
      //expect(instance).to.be.a(ApacheFineract.PutCachesRequest);
    });

    it('should have the property cacheType (base name: "cacheType")', function() {
      // uncomment below and update the code to test the property cacheType
      //var instane = new ApacheFineract.PutCachesRequest();
      //expect(instance).to.be();
    });

  });

}));
