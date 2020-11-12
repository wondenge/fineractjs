

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
    instance = new ApacheFineract.LoanProductConfigurableAttributes();
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

  describe('LoanProductConfigurableAttributes', function() {
    it('should create an instance of LoanProductConfigurableAttributes', function() {
      // uncomment below and update the code to test LoanProductConfigurableAttributes
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be.a(ApacheFineract.LoanProductConfigurableAttributes);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property loanProduct (base name: "loanProduct")', function() {
      // uncomment below and update the code to test the property loanProduct
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property inArrearsTolerance (base name: "inArrearsTolerance")', function() {
      // uncomment below and update the code to test the property inArrearsTolerance
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property graceOnPrincipalAndInterestPayment (base name: "graceOnPrincipalAndInterestPayment")', function() {
      // uncomment below and update the code to test the property graceOnPrincipalAndInterestPayment
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property graceOnArrearsAgeing (base name: "graceOnArrearsAgeing")', function() {
      // uncomment below and update the code to test the property graceOnArrearsAgeing
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property amortizationBoolean (base name: "amortizationBoolean")', function() {
      // uncomment below and update the code to test the property amortizationBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property interestMethodBoolean (base name: "interestMethodBoolean")', function() {
      // uncomment below and update the code to test the property interestMethodBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyBoolean (base name: "transactionProcessingStrategyBoolean")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property interestCalcPeriodBoolean (base name: "interestCalcPeriodBoolean")', function() {
      // uncomment below and update the code to test the property interestCalcPeriodBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property arrearsToleranceBoolean (base name: "arrearsToleranceBoolean")', function() {
      // uncomment below and update the code to test the property arrearsToleranceBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEveryBoolean (base name: "repaymentEveryBoolean")', function() {
      // uncomment below and update the code to test the property repaymentEveryBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property graceOnPrincipalAndInterestPaymentBoolean (base name: "graceOnPrincipalAndInterestPaymentBoolean")', function() {
      // uncomment below and update the code to test the property graceOnPrincipalAndInterestPaymentBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property graceOnArrearsAgingBoolean (base name: "graceOnArrearsAgingBoolean")', function() {
      // uncomment below and update the code to test the property graceOnArrearsAgingBoolean
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.LoanProductConfigurableAttributes();
      //expect(instance).to.be();
    });

  });

}));
