

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
    instance = new ApacheFineract.LoanProductData();
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

  describe('LoanProductData', function() {
    it('should create an instance of LoanProductData', function() {
      // uncomment below and update the code to test LoanProductData
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be.a(ApacheFineract.LoanProductData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property fundId (base name: "fundId")', function() {
      // uncomment below and update the code to test the property fundId
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property fundName (base name: "fundName")', function() {
      // uncomment below and update the code to test the property fundName
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property closeDate (base name: "closeDate")', function() {
      // uncomment below and update the code to test the property closeDate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property minPrincipal (base name: "minPrincipal")', function() {
      // uncomment below and update the code to test the property minPrincipal
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property maxPrincipal (base name: "maxPrincipal")', function() {
      // uncomment below and update the code to test the property maxPrincipal
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfRepayments (base name: "minNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property minNumberOfRepayments
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfRepayments (base name: "maxNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property maxNumberOfRepayments
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property minInterestRatePerPeriod (base name: "minInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property minInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property maxInterestRatePerPeriod (base name: "maxInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property maxInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyType (base name: "interestRateFrequencyType")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property annualInterestRate (base name: "annualInterestRate")', function() {
      // uncomment below and update the code to test the property annualInterestRate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRateDifferential (base name: "interestRateDifferential")', function() {
      // uncomment below and update the code to test the property interestRateDifferential
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property minDifferentialLendingRate (base name: "minDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property minDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property defaultDifferentialLendingRate (base name: "defaultDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property defaultDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property maxDifferentialLendingRate (base name: "maxDifferentialLendingRate")', function() {
      // uncomment below and update the code to test the property maxDifferentialLendingRate
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property allowPartialPeriodInterestCalcualtion (base name: "allowPartialPeriodInterestCalcualtion")', function() {
      // uncomment below and update the code to test the property allowPartialPeriodInterestCalcualtion
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property inArrearsTolerance (base name: "inArrearsTolerance")', function() {
      // uncomment below and update the code to test the property inArrearsTolerance
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyName (base name: "transactionProcessingStrategyName")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyName
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property graceOnPrincipalPayment (base name: "graceOnPrincipalPayment")', function() {
      // uncomment below and update the code to test the property graceOnPrincipalPayment
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property recurringMoratoriumOnPrincipalPeriods (base name: "recurringMoratoriumOnPrincipalPeriods")', function() {
      // uncomment below and update the code to test the property recurringMoratoriumOnPrincipalPeriods
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property graceOnInterestPayment (base name: "graceOnInterestPayment")', function() {
      // uncomment below and update the code to test the property graceOnInterestPayment
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property graceOnInterestCharged (base name: "graceOnInterestCharged")', function() {
      // uncomment below and update the code to test the property graceOnInterestCharged
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property graceOnArrearsAgeing (base name: "graceOnArrearsAgeing")', function() {
      // uncomment below and update the code to test the property graceOnArrearsAgeing
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property daysInMonthType (base name: "daysInMonthType")', function() {
      // uncomment below and update the code to test the property daysInMonthType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property daysInYearType (base name: "daysInYearType")', function() {
      // uncomment below and update the code to test the property daysInYearType
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationData (base name: "interestRecalculationData")', function() {
      // uncomment below and update the code to test the property interestRecalculationData
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property principalVariationsForBorrowerCycle (base name: "principalVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property principalVariationsForBorrowerCycle
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRateVariationsForBorrowerCycle (base name: "interestRateVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property interestRateVariationsForBorrowerCycle
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepaymentVariationsForBorrowerCycle (base name: "numberOfRepaymentVariationsForBorrowerCycle")', function() {
      // uncomment below and update the code to test the property numberOfRepaymentVariationsForBorrowerCycle
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property fundOptions (base name: "fundOptions")', function() {
      // uncomment below and update the code to test the property fundOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyTypeOptions (base name: "repaymentFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyTypeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRateFrequencyTypeOptions (base name: "interestRateFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property interestRateFrequencyTypeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property amortizationTypeOptions (base name: "amortizationTypeOptions")', function() {
      // uncomment below and update the code to test the property amortizationTypeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestTypeOptions (base name: "interestTypeOptions")', function() {
      // uncomment below and update the code to test the property interestTypeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodTypeOptions (base name: "interestCalculationPeriodTypeOptions")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodTypeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property chargeOptions (base name: "chargeOptions")', function() {
      // uncomment below and update the code to test the property chargeOptions
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property multiDisburseLoan (base name: "multiDisburseLoan")', function() {
      // uncomment below and update the code to test the property multiDisburseLoan
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property outstandingLoanBalance (base name: "outstandingLoanBalance")', function() {
      // uncomment below and update the code to test the property outstandingLoanBalance
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property getloanProductConfigurableAttributes (base name: "getloanProductConfigurableAttributes")', function() {
      // uncomment below and update the code to test the property getloanProductConfigurableAttributes
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property minimumGapBetweenInstallments (base name: "minimumGapBetweenInstallments")', function() {
      // uncomment below and update the code to test the property minimumGapBetweenInstallments
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property maximumGapBetweenInstallments (base name: "maximumGapBetweenInstallments")', function() {
      // uncomment below and update the code to test the property maximumGapBetweenInstallments
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property equalAmortization (base name: "equalAmortization")', function() {
      // uncomment below and update the code to test the property equalAmortization
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property linkedToFloatingInterestRates (base name: "linkedToFloatingInterestRates")', function() {
      // uncomment below and update the code to test the property linkedToFloatingInterestRates
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property variableInstallmentsAllowed (base name: "variableInstallmentsAllowed")', function() {
      // uncomment below and update the code to test the property variableInstallmentsAllowed
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationEnabled (base name: "interestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property interestRecalculationEnabled
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property floatingInterestRateCalculationAllowed (base name: "floatingInterestRateCalculationAllowed")', function() {
      // uncomment below and update the code to test the property floatingInterestRateCalculationAllowed
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

    it('should have the property compoundingToBePostedAsTransaction (base name: "compoundingToBePostedAsTransaction")', function() {
      // uncomment below and update the code to test the property compoundingToBePostedAsTransaction
      //var instane = new ApacheFineract.LoanProductData();
      //expect(instance).to.be();
    });

  });

}));
