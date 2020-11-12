

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
    instance = new ApacheFineract.PostLoanProductsRequest();
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

  describe('PostLoanProductsRequest', function() {
    it('should create an instance of PostLoanProductsRequest', function() {
      // uncomment below and update the code to test PostLoanProductsRequest
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostLoanProductsRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property digitsAfterDecimal (base name: "digitsAfterDecimal")', function() {
      // uncomment below and update the code to test the property digitsAfterDecimal
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property inMultiplesOf (base name: "inMultiplesOf")', function() {
      // uncomment below and update the code to test the property inMultiplesOf
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property daysInMonthType (base name: "daysInMonthType")', function() {
      // uncomment below and update the code to test the property daysInMonthType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property daysInYearType (base name: "daysInYearType")', function() {
      // uncomment below and update the code to test the property daysInYearType
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property isInterestRecalculationEnabled (base name: "isInterestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property isInterestRecalculationEnabled
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property fundSourceAccountId (base name: "fundSourceAccountId")', function() {
      // uncomment below and update the code to test the property fundSourceAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanPortfolioAccountId (base name: "loanPortfolioAccountId")', function() {
      // uncomment below and update the code to test the property loanPortfolioAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property receivableInterestAccountId (base name: "receivableInterestAccountId")', function() {
      // uncomment below and update the code to test the property receivableInterestAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property receivableFeeAccountId (base name: "receivableFeeAccountId")', function() {
      // uncomment below and update the code to test the property receivableFeeAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property receivablePenaltyAccountId (base name: "receivablePenaltyAccountId")', function() {
      // uncomment below and update the code to test the property receivablePenaltyAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestOnLoanAccountId (base name: "interestOnLoanAccountId")', function() {
      // uncomment below and update the code to test the property interestOnLoanAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property incomeFromFeeAccountId (base name: "incomeFromFeeAccountId")', function() {
      // uncomment below and update the code to test the property incomeFromFeeAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property incomeFromPenaltyAccountId (base name: "incomeFromPenaltyAccountId")', function() {
      // uncomment below and update the code to test the property incomeFromPenaltyAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property overpaymentLiabilityAccountId (base name: "overpaymentLiabilityAccountId")', function() {
      // uncomment below and update the code to test the property overpaymentLiabilityAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property writeOffAccountId (base name: "writeOffAccountId")', function() {
      // uncomment below and update the code to test the property writeOffAccountId
      //var instane = new ApacheFineract.PostLoanProductsRequest();
      //expect(instance).to.be();
    });

  });

}));
