

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
    instance = new ApacheFineract.FloatingRatePeriod();
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

  describe('FloatingRatePeriod', function() {
    it('should create an instance of FloatingRatePeriod', function() {
      // uncomment below and update the code to test FloatingRatePeriod
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be.a(ApacheFineract.FloatingRatePeriod);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property interestRate (base name: "interestRate")', function() {
      // uncomment below and update the code to test the property interestRate
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property differentialToBaseLendingRate (base name: "differentialToBaseLendingRate")', function() {
      // uncomment below and update the code to test the property differentialToBaseLendingRate
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property floatingRatesId (base name: "floatingRatesId")', function() {
      // uncomment below and update the code to test the property floatingRatesId
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.FloatingRatePeriod();
      //expect(instance).to.be();
    });

  });

}));
