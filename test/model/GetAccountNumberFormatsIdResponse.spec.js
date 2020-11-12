

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
    instance = new ApacheFineract.GetAccountNumberFormatsIdResponse();
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

  describe('GetAccountNumberFormatsIdResponse', function() {
    it('should create an instance of GetAccountNumberFormatsIdResponse', function() {
      // uncomment below and update the code to test GetAccountNumberFormatsIdResponse
      //var instane = new ApacheFineract.GetAccountNumberFormatsIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountNumberFormatsIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountNumberFormatsIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instane = new ApacheFineract.GetAccountNumberFormatsIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property prefixType (base name: "prefixType")', function() {
      // uncomment below and update the code to test the property prefixType
      //var instane = new ApacheFineract.GetAccountNumberFormatsIdResponse();
      //expect(instance).to.be();
    });

  });

}));
