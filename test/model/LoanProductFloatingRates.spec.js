

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
    instance = new ApacheFineract.LoanProductFloatingRates();
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

  describe('LoanProductFloatingRates', function() {
    it('should create an instance of LoanProductFloatingRates', function() {
      // uncomment below and update the code to test LoanProductFloatingRates
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be.a(ApacheFineract.LoanProductFloatingRates);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property loanProduct (base name: "loanProduct")', function() {
      // uncomment below and update the code to test the property loanProduct
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property floatingRate (base name: "floatingRate")', function() {
      // uncomment below and update the code to test the property floatingRate
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property interestRateDifferential (base name: "interestRateDifferential")', function() {
      // uncomment below and update the code to test the property interestRateDifferential
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property minDifferentialLendingRate (base name: "minDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property minDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property defaultDifferentialLendingRate (base name: "defaultDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property defaultDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property maxDifferentialLendingRate (base name: "maxDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property maxDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property floatingInterestRateCalculationAllowed (base name: "floatingInterestRateCalculationAllowed")', function() {
      // uncomment below and update the code to test the property floatingInterestRateCalculationAllowed
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanProductFloatingRates();
      //expect(instance).to.be();
    });

  });

}));
