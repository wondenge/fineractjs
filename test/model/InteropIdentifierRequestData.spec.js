

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
    instance = new ApacheFineract.InteropIdentifierRequestData();
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

  describe('InteropIdentifierRequestData', function() {
    it('should create an instance of InteropIdentifierRequestData', function() {
      // uncomment below and update the code to test InteropIdentifierRequestData
      //var instane = new ApacheFineract.InteropIdentifierRequestData();
      //expect(instance).to.be.a(ApacheFineract.InteropIdentifierRequestData);
    });

    it('should have the property idType (base name: "idType")', function() {
      // uncomment below and update the code to test the property idType
      //var instane = new ApacheFineract.InteropIdentifierRequestData();
      //expect(instance).to.be();
    });

    it('should have the property idValue (base name: "idValue")', function() {
      // uncomment below and update the code to test the property idValue
      //var instane = new ApacheFineract.InteropIdentifierRequestData();
      //expect(instance).to.be();
    });

    it('should have the property subIdOrType (base name: "subIdOrType")', function() {
      // uncomment below and update the code to test the property subIdOrType
      //var instane = new ApacheFineract.InteropIdentifierRequestData();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new ApacheFineract.InteropIdentifierRequestData();
      //expect(instance).to.be();
    });

  });

}));
