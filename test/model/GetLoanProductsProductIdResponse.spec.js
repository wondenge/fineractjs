

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
    instance = new ApacheFineract.GetLoanProductsProductIdResponse();
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

  describe('GetLoanProductsProductIdResponse', function() {
    it('should create an instance of GetLoanProductsProductIdResponse', function() {
      // uncomment below and update the code to test GetLoanProductsProductIdResponse
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoanProductsProductIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property includeInBorrowerCycle (base name: "includeInBorrowerCycle")', function() {
      // uncomment below and update the code to test the property includeInBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property useBorrowerCycle (base name: "useBorrowerCycle")', function() {
      // uncomment below and update the code to test the property useBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minPrincipal (base name: "minPrincipal")', function() {
      // uncomment below and update the code to test the property minPrincipal
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxPrincipal (base name: "maxPrincipal")', function() {
      // uncomment below and update the code to test the property maxPrincipal
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property annualInterestRate (base name: "annualInterestRate")', function() {
      // uncomment below and update the code to test the property annualInterestRate
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyName (base name: "transactionProcessingStrategyName")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyName
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property charges (base name: "charges")', function() {
      // uncomment below and update the code to test the property charges
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property productsPrincipalVariationsForBorrowerCycle (base name: "productsPrincipalVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property productsPrincipalVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateVariationsForBorrowerCycle (base name: "interestRateVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property interestRateVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepaymentVariationsForBorrowerCycle (base name: "numberOfRepaymentVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property numberOfRepaymentVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappings (base name: "accountingMappings")', function() {
      // uncomment below and update the code to test the property accountingMappings
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentChannelToFundSourceMappings (base name: "paymentChannelToFundSourceMappings")', function() {
      // uncomment below and update the code to test the property paymentChannelToFundSourceMappings
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property feeToIncomeAccountMappings (base name: "feeToIncomeAccountMappings")', function() {
      // uncomment below and update the code to test the property feeToIncomeAccountMappings
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property multiDisburseLoan (base name: "multiDisburseLoan")', function() {
      // uncomment below and update the code to test the property multiDisburseLoan
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxTrancheCount (base name: "maxTrancheCount")', function() {
      // uncomment below and update the code to test the property maxTrancheCount
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property outstandingLoanBalance (base name: "outstandingLoanBalance")', function() {
      // uncomment below and update the code to test the property outstandingLoanBalance
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property overdueDaysForNPA (base name: "overdueDaysForNPA")', function() {
      // uncomment below and update the code to test the property overdueDaysForNPA
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property principalThresholdForLastInstalment (base name: "principalThresholdForLastInstalment")', function() {
      // uncomment below and update the code to test the property principalThresholdForLastInstalment
      //var instane = new ApacheFineract.GetLoanProductsProductIdResponse();
      //expect(instance).to.be();
    });

  });

}));
