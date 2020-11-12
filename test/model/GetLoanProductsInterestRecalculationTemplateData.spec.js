

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
    instance = new ApacheFineract.GetLoanProductsInterestRecalculationTemplateData();
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

  describe('GetLoanProductsInterestRecalculationTemplateData', function() {
    it('should create an instance of GetLoanProductsInterestRecalculationTemplateData', function() {
      // uncomment below and update the code to test GetLoanProductsInterestRecalculationTemplateData
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationTemplateData();
      //expect(instance).to.be.a(ApacheFineract.GetLoanProductsInterestRecalculationTemplateData);
    });

    it('should have the property interestRecalculationCompoundingType (base name: "interestRecalculationCompoundingType")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property rescheduleStrategyType (base name: "rescheduleStrategyType")', function() {
      // uncomment below and update the code to test the property rescheduleStrategyType
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationTemplateData();
      //expect(instance).to.be();
    });

    it('should have the property preClosureInterestCalculationStrategy (base name: "preClosureInterestCalculationStrategy")', function() {
      // uncomment below and update the code to test the property preClosureInterestCalculationStrategy
      //var instane = new ApacheFineract.GetLoanProductsInterestRecalculationTemplateData();
      //expect(instance).to.be();
    });

  });

}));
