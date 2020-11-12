

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
    instance = new ApacheFineract.GetGlobalConfigurationsResponse();
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

  describe('GetGlobalConfigurationsResponse', function() {
    it('should create an instance of GetGlobalConfigurationsResponse', function() {
      // uncomment below and update the code to test GetGlobalConfigurationsResponse
      //var instane = new ApacheFineract.GetGlobalConfigurationsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetGlobalConfigurationsResponse);
    });

    it('should have the property globalConfiguration (base name: "globalConfiguration")', function() {
      // uncomment below and update the code to test the property globalConfiguration
      //var instane = new ApacheFineract.GetGlobalConfigurationsResponse();
      //expect(instance).to.be();
    });

  });

}));
