

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
    instance = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
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

  describe('PutFloatingRatesFloatingRateIdRequest', function() {
    it('should create an instance of PutFloatingRatesFloatingRateIdRequest', function() {
      // uncomment below and update the code to test PutFloatingRatesFloatingRateIdRequest
      //var instane = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
      //expect(instance).to.be.a(ApacheFineract.PutFloatingRatesFloatingRateIdRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property isBaseLendingRate (base name: "isBaseLendingRate")', function() {
      // uncomment below and update the code to test the property isBaseLendingRate
      //var instane = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
      //expect(instance).to.be();
    });

    it('should have the property ratePeriods (base name: "ratePeriods")', function() {
      // uncomment below and update the code to test the property ratePeriods
      //var instane = new ApacheFineract.PutFloatingRatesFloatingRateIdRequest();
      //expect(instance).to.be();
    });

  });

}));
