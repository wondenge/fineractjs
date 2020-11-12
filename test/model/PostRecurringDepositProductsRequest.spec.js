

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
    instance = new ApacheFineract.PostRecurringDepositProductsRequest();
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

  describe('PostRecurringDepositProductsRequest', function() {
    it('should create an instance of PostRecurringDepositProductsRequest', function() {
      // uncomment below and update the code to test PostRecurringDepositProductsRequest
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostRecurringDepositProductsRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property digitsAfterDecimal (base name: "digitsAfterDecimal")', function() {
      // uncomment below and update the code to test the property digitsAfterDecimal
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property inMultiplesOf (base name: "inMultiplesOf")', function() {
      // uncomment below and update the code to test the property inMultiplesOf
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequency (base name: "recurringDepositFrequency")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequency
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurringDepositFrequencyTypeId (base name: "recurringDepositFrequencyTypeId")', function() {
      // uncomment below and update the code to test the property recurringDepositFrequencyTypeId
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalApplicable (base name: "preClosurePenalApplicable")', function() {
      // uncomment below and update the code to test the property preClosurePenalApplicable
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalInterest (base name: "preClosurePenalInterest")', function() {
      // uncomment below and update the code to test the property preClosurePenalInterest
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalInterestOnTypeId (base name: "preClosurePenalInterestOnTypeId")', function() {
      // uncomment below and update the code to test the property preClosurePenalInterestOnTypeId
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTerm (base name: "minDepositTerm")', function() {
      // uncomment below and update the code to test the property minDepositTerm
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTermTypeId (base name: "minDepositTermTypeId")', function() {
      // uncomment below and update the code to test the property minDepositTermTypeId
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTerm (base name: "maxDepositTerm")', function() {
      // uncomment below and update the code to test the property maxDepositTerm
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTermTypeId (base name: "maxDepositTermTypeId")', function() {
      // uncomment below and update the code to test the property maxDepositTermTypeId
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDepositAmount (base name: "minDepositAmount")', function() {
      // uncomment below and update the code to test the property minDepositAmount
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositAmount (base name: "maxDepositAmount")', function() {
      // uncomment below and update the code to test the property maxDepositAmount
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property charts (base name: "charts")', function() {
      // uncomment below and update the code to test the property charts
      //var instane = new ApacheFineract.PostRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

  });

}));
