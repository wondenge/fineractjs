

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
    instance = new ApacheFineract.PostSelfLoansRequest();
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

  describe('PostSelfLoansRequest', function() {
    it('should create an instance of PostSelfLoansRequest', function() {
      // uncomment below and update the code to test PostSelfLoansRequest
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be.a(ApacheFineract.PostSelfLoansRequest);
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property principal (base name: "principal")', function() {
      // uncomment below and update the code to test the property principal
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanTermFrequency (base name: "loanTermFrequency")', function() {
      // uncomment below and update the code to test the property loanTermFrequency
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanTermFrequencyType (base name: "loanTermFrequencyType")', function() {
      // uncomment below and update the code to test the property loanTermFrequencyType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanType (base name: "loanType")', function() {
      // uncomment below and update the code to test the property loanType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRepayments (base name: "numberOfRepayments")', function() {
      // uncomment below and update the code to test the property numberOfRepayments
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentEvery (base name: "repaymentEvery")', function() {
      // uncomment below and update the code to test the property repaymentEvery
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentFrequencyType (base name: "repaymentFrequencyType")', function() {
      // uncomment below and update the code to test the property repaymentFrequencyType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestRatePerPeriod (base name: "interestRatePerPeriod")', function() {
      // uncomment below and update the code to test the property interestRatePerPeriod
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property amortizationType (base name: "amortizationType")', function() {
      // uncomment below and update the code to test the property amortizationType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestType (base name: "interestType")', function() {
      // uncomment below and update the code to test the property interestType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationPeriodType (base name: "interestCalculationPeriodType")', function() {
      // uncomment below and update the code to test the property interestCalculationPeriodType
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactionProcessingStrategyId (base name: "transactionProcessingStrategyId")', function() {
      // uncomment below and update the code to test the property transactionProcessingStrategyId
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property expectedDisbursementDate (base name: "expectedDisbursementDate")', function() {
      // uncomment below and update the code to test the property expectedDisbursementDate
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property linkAccountId (base name: "linkAccountId")', function() {
      // uncomment below and update the code to test the property linkAccountId
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property fixedEmiAmount (base name: "fixedEmiAmount")', function() {
      // uncomment below and update the code to test the property fixedEmiAmount
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxOutstandingLoanBalance (base name: "maxOutstandingLoanBalance")', function() {
      // uncomment below and update the code to test the property maxOutstandingLoanBalance
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property disbursementData (base name: "disbursementData")', function() {
      // uncomment below and update the code to test the property disbursementData
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

    it('should have the property datatables (base name: "datatables")', function() {
      // uncomment below and update the code to test the property datatables
      //var instane = new ApacheFineract.PostSelfLoansRequest();
      //expect(instance).to.be();
    });

  });

}));
