

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
    instance = new ApacheFineract.PutAccountNumberFormatschangesSwagger();
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

  describe('PutAccountNumberFormatschangesSwagger', function() {
    it('should create an instance of PutAccountNumberFormatschangesSwagger', function() {
      // uncomment below and update the code to test PutAccountNumberFormatschangesSwagger
      //var instane = new ApacheFineract.PutAccountNumberFormatschangesSwagger();
      //expect(instance).to.be.a(ApacheFineract.PutAccountNumberFormatschangesSwagger);
    });

    it('should have the property prefixType (base name: "prefixType")', function() {
      // uncomment below and update the code to test the property prefixType
      //var instane = new ApacheFineract.PutAccountNumberFormatschangesSwagger();
      //expect(instance).to.be();
    });

  });

}));
