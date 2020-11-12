

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
    instance = new ApacheFineract.GetRecurringDepositProductsResponse();
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

  describe('GetRecurringDepositProductsResponse', function() {
    it('should create an instance of GetRecurringDepositProductsResponse', function() {
      // uncomment below and update the code to test GetRecurringDepositProductsResponse
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetRecurringDepositProductsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequency (base name: "recurringDepositFrequency")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequency
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequencyType (base name: "recurringDepositFrequencyType")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequencyType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalApplicable (base name: "preClosurePenalApplicable")', function() {
      // uncomment below and update the code to test the property preClosurePenalApplicable
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTerm (base name: "minDepositTerm")', function() {
      // uncomment below and update the code to test the property minDepositTerm
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTerm (base name: "maxDepositTerm")', function() {
      // uncomment below and update the code to test the property maxDepositTerm
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTermType (base name: "minDepositTermType")', function() {
      // uncomment below and update the code to test the property minDepositTermType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTermType (base name: "maxDepositTermType")', function() {
      // uncomment below and update the code to test the property maxDepositTermType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominalAnnualInterestRate (base name: "nominalAnnualInterestRate")', function() {
      // uncomment below and update the code to test the property nominalAnnualInterestRate
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetRecurringDepositProductsResponse();
      //expect(instance).to.be();
    });

  });

}));
