

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
    instance = new ApacheFineract.GetLoanProductsTemplateResponse();
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

  describe('GetLoanProductsTemplateResponse', function() {
    it('should create an instance of GetLoanProductsTemplateResponse', function() {
      // uncomment below and update the code to test GetLoanProductsTemplateResponse
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoanProductsTemplateResponse);
    });

    it('should have the property includeInBorrowerCycle (base name: "includeInBorrowerCycle")', function() {
      // uncomment below and update the code to test the property includeInBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property useBorrowerCycle (base name: "useBorrowerCycle")', function() {
      // uncomment below and update the code to test the property useBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property principalVariationsForBorrowerCycle (base name: "principalVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property principalVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateVariationsForBorrowerCycle (base name: "interestRateVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property interestRateVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepaymentVariationsForBorrowerCycle (base name: "numberOfRepaymentVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property numberOfRepaymentVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInMonthType (base name: "daysInMonthType")', function() {
      // uncomment below and update the code to test the property daysInMonthType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInYearType (base name: "daysInYearType")', function() {
      // uncomment below and update the code to test the property daysInYearType
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property isInterestRecalculationEnabled (base name: "isInterestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property isInterestRecalculationEnabled
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationData (base name: "interestRecalculationData")', function() {
      // uncomment below and update the code to test the property interestRecalculationData
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentTypeOptions (base name: "paymentTypeOptions")', function() {
      // uncomment below and update the code to test the property paymentTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOptions (base name: "currencyOptions")', function() {
      // uncomment below and update the code to test the property currencyOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyTypeOptions (base name: "repaymentFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosureInterestCalculationStrategyOptions (base name: "preClosureInterestCalculationStrategyOptions")', function() {
      // uncomment below and update the code to test the property preClosureInterestCalculationStrategyOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyTypeOptions (base name: "interestRateFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property amortizationTypeOptions (base name: "amortizationTypeOptions")', function() {
      // uncomment below and update the code to test the property amortizationTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestTypeOptions (base name: "interestTypeOptions")', function() {
      // uncomment below and update the code to test the property interestTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodTypeOptions (base name: "interestCalculationPeriodTypeOptions")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyOptions (base name: "transactionProcessingStrategyOptions")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeOptions (base name: "chargeOptions")', function() {
      // uncomment below and update the code to test the property chargeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRuleOptions (base name: "accountingRuleOptions")', function() {
      // uncomment below and update the code to test the property accountingRuleOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappingOptions (base name: "accountingMappingOptions")', function() {
      // uncomment below and update the code to test the property accountingMappingOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property valueConditionTypeOptions (base name: "valueConditionTypeOptions")', function() {
      // uncomment below and update the code to test the property valueConditionTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInMonthTypeOptions (base name: "daysInMonthTypeOptions")', function() {
      // uncomment below and update the code to test the property daysInMonthTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInYearTypeOptions (base name: "daysInYearTypeOptions")', function() {
      // uncomment below and update the code to test the property daysInYearTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationCompoundingTypeOptions (base name: "interestRecalculationCompoundingTypeOptions")', function() {
      // uncomment below and update the code to test the property interestRecalculationCompoundingTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property rescheduleStrategyTypeOptions (base name: "rescheduleStrategyTypeOptions")', function() {
      // uncomment below and update the code to test the property rescheduleStrategyTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationFrequencyTypeOptions (base name: "interestRecalculationFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property interestRecalculationFrequencyTypeOptions
      //var instane = new ApacheFineract.GetLoanProductsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
