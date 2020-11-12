

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
    instance = new ApacheFineract.IdDocument();
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

  describe('IdDocument', function() {
    it('should create an instance of IdDocument', function() {
      // uncomment below and update the code to test IdDocument
      //var instane = new ApacheFineract.IdDocument();
      //expect(instance).to.be.a(ApacheFineract.IdDocument);
    });

    it('should have the property idType (base name: "idType")', function() {
      // uncomment below and update the code to test the property idType
      //var instane = new ApacheFineract.IdDocument();
      //expect(instance).to.be();
    });

    it('should have the property idNumber (base name: "idNumber")', function() {
      // uncomment below and update the code to test the property idNumber
      //var instane = new ApacheFineract.IdDocument();
      //expect(instance).to.be();
    });

    it('should have the property issuerCountry (base name: "issuerCountry")', function() {
      // uncomment below and update the code to test the property issuerCountry
      //var instane = new ApacheFineract.IdDocument();
      //expect(instance).to.be();
    });

    it('should have the property otherIdDescription (base name: "otherIdDescription")', function() {
      // uncomment below and update the code to test the property otherIdDescription
      //var instane = new ApacheFineract.IdDocument();
      //expect(instance).to.be();
    });

  });

}));
