

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
    instance = new ApacheFineract.LoanProductRelatedDetail();
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

  describe('LoanProductRelatedDetail', function() {
    it('should create an instance of LoanProductRelatedDetail', function() {
      // uncomment below and update the code to test LoanProductRelatedDetail
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be.a(ApacheFineract.LoanProductRelatedDetail);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property nominalInterestRatePerPeriod (base name: "nominalInterestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property nominalInterestRatePerPeriod
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property interestPeriodFrequencyType (base name: "interestPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property interestPeriodFrequencyType
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property annualNominalInterestRate (base name: "annualNominalInterestRate")', function() {
      // uncomment below and update the code to test the property annualNominalInterestRate
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property interestMethod (base name: "interestMethod")', function() {
      // uncomment below and update the code to test the property interestMethod
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodMethod (base name: "interestCalculationPeriodMethod")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodMethod
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property allowPartialPeriodInterestCalcualtion (base name: "allowPartialPeriodInterestCalcualtion")', function() {
      // uncomment below and update the code to test the property allowPartialPeriodInterestCalcualtion
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property repayEvery (base name: "repayEvery")', function() {
      // uncomment below and update the code to test the property repayEvery
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property repaymentPeriodFrequencyType (base name: "repaymentPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentPeriodFrequencyType
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property graceOnPrincipalPayment (base name: "graceOnPrincipalPayment")', function() {
      // uncomment below and update the code to test the property graceOnPrincipalPayment
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property graceOnInterestPayment (base name: "graceOnInterestPayment")', function() {
      // uncomment below and update the code to test the property graceOnInterestPayment
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property amortizationMethod (base name: "amortizationMethod")', function() {
      // uncomment below and update the code to test the property amortizationMethod
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property inArrearsTolerance (base name: "inArrearsTolerance")', function() {
      // uncomment below and update the code to test the property inArrearsTolerance
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property graceOnArrearsAgeing (base name: "graceOnArrearsAgeing")', function() {
      // uncomment below and update the code to test the property graceOnArrearsAgeing
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property equalAmortization (base name: "equalAmortization")', function() {
      // uncomment below and update the code to test the property equalAmortization
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property interestRecalculationEnabled (base name: "interestRecalculationEnabled")', function() {
      // uncomment below and update the code to test the property interestRecalculationEnabled
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property graceOnDueDate (base name: "graceOnDueDate")', function() {
      // uncomment below and update the code to test the property graceOnDueDate
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

    it('should have the property arrearsTolerance (base name: "arrearsTolerance")', function() {
      // uncomment below and update the code to test the property arrearsTolerance
      //var instane = new ApacheFineract.LoanProductRelatedDetail();
      //expect(instance).to.be();
    });

  });

}));
