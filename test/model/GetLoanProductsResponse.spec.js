

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
    instance = new ApacheFineract.GetLoanProductsResponse();
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

  describe('GetLoanProductsResponse', function() {
    it('should create an instance of GetLoanProductsResponse', function() {
      // uncomment below and update the code to test GetLoanProductsResponse
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoanProductsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property includeInBorrowerCycle (base name: "includeInBorrowerCycle")', function() {
      // uncomment below and update the code to test the property includeInBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property useBorrowerCycle (base name: "useBorrowerCycle")', function() {
      // uncomment below and update the code to test the property useBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minPrincipal (base name: "minPrincipal")', function() {
      // uncomment below and update the code to test the property minPrincipal
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxPrincipal (base name: "maxPrincipal")', function() {
      // uncomment below and update the code to test the property maxPrincipal
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfRepayments (base name: "minNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property minNumberOfRepayments
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfRepayments (base name: "maxNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property maxNumberOfRepayments
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property annualInterestRate (base name: "annualInterestRate")', function() {
      // uncomment below and update the code to test the property annualInterestRate
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyName (base name: "transactionProcessingStrategyName")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyName
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property principalVariationsForBorrowerCycle (base name: "principalVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property principalVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRateVariationsForBorrowerCycle (base name: "interestRateVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property interestRateVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepaymentVariationsForBorrowerCycle (base name: "numberOfRepaymentVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property numberOfRepaymentVariationsForBorrowerCycle
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInMonthType (base name: "daysInMonthType")', function() {
      // uncomment below and update the code to test the property daysInMonthType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property daysInYearType (base name: "daysInYearType")', function() {
      // uncomment below and update the code to test the property daysInYearType
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property isInterestRecalculationEnabled (base name: "isInterestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property isInterestRecalculationEnabled
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationData (base name: "interestRecalculationData")', function() {
      // uncomment below and update the code to test the property interestRecalculationData
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

    it('should have the property principalThresholdForLastInstalment (base name: "principalThresholdForLastInstalment")', function() {
      // uncomment below and update the code to test the property principalThresholdForLastInstalment
      //var instane = new ApacheFineract.GetLoanProductsResponse();
      //expect(instance).to.be();
    });

  });

}));
