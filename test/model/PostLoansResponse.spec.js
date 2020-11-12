

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
    instance = new ApacheFineract.PostLoansResponse();
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

  describe('PostLoansResponse', function() {
    it('should create an instance of PostLoansResponse', function() {
      // uncomment below and update the code to test PostLoansResponse
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be.a(ApacheFineract.PostLoansResponse);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanTermInDays (base name: "loanTermInDays")', function() {
      // uncomment below and update the code to test the property loanTermInDays
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPrincipalDisbursed (base name: "totalPrincipalDisbursed")', function() {
      // uncomment below and update the code to test the property totalPrincipalDisbursed
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPrincipalExpected (base name: "totalPrincipalExpected")', function() {
      // uncomment below and update the code to test the property totalPrincipalExpected
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPrincipalPaid (base name: "totalPrincipalPaid")', function() {
      // uncomment below and update the code to test the property totalPrincipalPaid
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalInterestCharged (base name: "totalInterestCharged")', function() {
      // uncomment below and update the code to test the property totalInterestCharged
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalFeeChargesCharged (base name: "totalFeeChargesCharged")', function() {
      // uncomment below and update the code to test the property totalFeeChargesCharged
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalPenaltyChargesCharged (base name: "totalPenaltyChargesCharged")', function() {
      // uncomment below and update the code to test the property totalPenaltyChargesCharged
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalWaived (base name: "totalWaived")', function() {
      // uncomment below and update the code to test the property totalWaived
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalWrittenOff (base name: "totalWrittenOff")', function() {
      // uncomment below and update the code to test the property totalWrittenOff
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalRepaymentExpected (base name: "totalRepaymentExpected")', function() {
      // uncomment below and update the code to test the property totalRepaymentExpected
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalRepayment (base name: "totalRepayment")', function() {
      // uncomment below and update the code to test the property totalRepayment
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalOutstanding (base name: "totalOutstanding")', function() {
      // uncomment below and update the code to test the property totalOutstanding
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

    it('should have the property periods (base name: "periods")', function() {
      // uncomment below and update the code to test the property periods
      //var instane = new ApacheFineract.PostLoansResponse();
      //expect(instance).to.be();
    });

  });

}));
