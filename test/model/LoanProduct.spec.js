

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
    instance = new ApacheFineract.LoanProduct();
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

  describe('LoanProduct', function() {
    it('should create an instance of LoanProduct', function() {
      // uncomment below and update the code to test LoanProduct
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be.a(ApacheFineract.LoanProduct);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property rates (base name: "rates")', function() {
      // uncomment below and update the code to test the property rates
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property loanProductRelatedDetail (base name: "loanProductRelatedDetail")', function() {
      // uncomment below and update the code to test the property loanProductRelatedDetail
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property includeInBorrowerCycle (base name: "includeInBorrowerCycle")', function() {
      // uncomment below and update the code to test the property includeInBorrowerCycle
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property closeDate (base name: "closeDate")', function() {
      // uncomment below and update the code to test the property closeDate
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property minimumDaysBetweenDisbursalAndFirstRepayment (base name: "minimumDaysBetweenDisbursalAndFirstRepayment")', function() {
      // uncomment below and update the code to test the property minimumDaysBetweenDisbursalAndFirstRepayment
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property productInterestRecalculationDetails (base name: "productInterestRecalculationDetails")', function() {
      // uncomment below and update the code to test the property productInterestRecalculationDetails
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property loanProductGuaranteeDetails (base name: "loanProductGuaranteeDetails")', function() {
      // uncomment below and update the code to test the property loanProductGuaranteeDetails
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property principalThresholdForLastInstallment (base name: "principalThresholdForLastInstallment")', function() {
      // uncomment below and update the code to test the property principalThresholdForLastInstallment
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property installmentAmountInMultiplesOf (base name: "installmentAmountInMultiplesOf")', function() {
      // uncomment below and update the code to test the property installmentAmountInMultiplesOf
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property floatingRates (base name: "floatingRates")', function() {
      // uncomment below and update the code to test the property floatingRates
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property syncExpectedWithDisbursementDate (base name: "syncExpectedWithDisbursementDate")', function() {
      // uncomment below and update the code to test the property syncExpectedWithDisbursementDate
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property linkedToFloatingInterestRate (base name: "linkedToFloatingInterestRate")', function() {
      // uncomment below and update the code to test the property linkedToFloatingInterestRate
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property equalAmortization (base name: "equalAmortization")', function() {
      // uncomment below and update the code to test the property equalAmortization
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationEnabled (base name: "interestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property interestRecalculationEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property minNominalInterestRatePerPeriod (base name: "minNominalInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property minNominalInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property maxNominalInterestRatePerPeriod (base name: "maxNominalInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property maxNominalInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property minNumberOfRepayments (base name: "minNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property minNumberOfRepayments
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property maxNumberOfRepayments (base name: "maxNumberOfRepayments")', function() {
      // uncomment below and update the code to test the property maxNumberOfRepayments
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property multiDisburseLoan (base name: "multiDisburseLoan")', function() {
      // uncomment below and update the code to test the property multiDisburseLoan
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property repaymentStrategy (base name: "repaymentStrategy")', function() {
      // uncomment below and update the code to test the property repaymentStrategy
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property accountingType (base name: "accountingType")', function() {
      // uncomment below and update the code to test the property accountingType
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property loanProductCharges (base name: "loanProductCharges")', function() {
      // uncomment below and update the code to test the property loanProductCharges
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property loanProductConfigurableAttributes (base name: "loanProductConfigurableAttributes")', function() {
      // uncomment below and update the code to test the property loanProductConfigurableAttributes
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property accountingDisabled (base name: "accountingDisabled")', function() {
      // uncomment below and update the code to test the property accountingDisabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property cashBasedAccountingEnabled (base name: "cashBasedAccountingEnabled")', function() {
      // uncomment below and update the code to test the property cashBasedAccountingEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property accrualBasedAccountingEnabled (base name: "accrualBasedAccountingEnabled")', function() {
      // uncomment below and update the code to test the property accrualBasedAccountingEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property upfrontAccrualAccountingEnabled (base name: "upfrontAccrualAccountingEnabled")', function() {
      // uncomment below and update the code to test the property upfrontAccrualAccountingEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property periodicAccrualAccountingEnabled (base name: "periodicAccrualAccountingEnabled")', function() {
      // uncomment below and update the code to test the property periodicAccrualAccountingEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property principalAmount (base name: "principalAmount")', function() {
      // uncomment below and update the code to test the property principalAmount
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property minPrincipalAmount (base name: "minPrincipalAmount")', function() {
      // uncomment below and update the code to test the property minPrincipalAmount
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property maxPrincipalAmount (base name: "maxPrincipalAmount")', function() {
      // uncomment below and update the code to test the property maxPrincipalAmount
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property nominalInterestRatePerPeriod (base name: "nominalInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property nominalInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property interestPeriodFrequencyType (base name: "interestPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property interestPeriodFrequencyType
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property holdGuaranteeFundsEnabled (base name: "holdGuaranteeFundsEnabled")', function() {
      // uncomment below and update the code to test the property holdGuaranteeFundsEnabled
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property arrearsBasedOnOriginalSchedule (base name: "arrearsBasedOnOriginalSchedule")', function() {
      // uncomment below and update the code to test the property arrearsBasedOnOriginalSchedule
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanProduct();
      //expect(instance).to.be();
    });

  });

}));
