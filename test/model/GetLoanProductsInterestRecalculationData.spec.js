

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
    instance = new ApacheFineract.GetLoanProductsInterestRecalculationData();
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

  describe('GetLoanProductsInterestRecalculationData', function() {
    it('should create an instance of GetLoanProductsInterestRecalculationData', function() {
      // uncomment below and update the code to test GetLoanProductsInterestRecalculationData
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be.a(ApacheFineract.GetLoanProductsInterestRecalculationData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationCompoundingType (base name: "interestRecalculationCompoundingType")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationCompoundingFrequencyType (base name: "interestRecalculationCompoundingFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property rescheduleStrategyType (base name: "rescheduleStrategyType")', function() {
      // uncomment below and update the code to test the property rescheduleStrategyType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property recalculationRestFrequencyType (base name: "recalculationRestFrequencyType")', function() {
      // uncomment below and update the code to test the property recalculationRestFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property preClosureInterestCalculationStrategy (base name: "preClosureInterestCalculationStrategy")', function() {
      // uncomment below and update the code to test the property preClosureInterestCalculationStrategy
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

    it('should have the property isArrearsBasedOnOriginalSchedule (base name: "isArrearsBasedOnOriginalSchedule")', function() {
      // uncomment below and update the code to test the property isArrearsBasedOnOriginalSchedule
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationData();
      //expect(instance).to.be();
    });

  });

}));
