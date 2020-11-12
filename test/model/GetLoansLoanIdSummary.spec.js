

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
    instance = new ApacheFineract.GetLoansLoanIdSummary();
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

  describe('GetLoansLoanIdSummary', function() {
    it('should create an instance of GetLoansLoanIdSummary', function() {
      // uncomment below and update the code to test GetLoansLoanIdSummary
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be.a(ApacheFineract.GetLoansLoanIdSummary);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property principalDisbursed (base name: "principalDisbursed")', function() {
      // uncomment below and update the code to test the property principalDisbursed
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property principalPaid (base name: "principalPaid")', function() {
      // uncomment below and update the code to test the property principalPaid
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property principalWrittenOff (base name: "principalWrittenOff")', function() {
      // uncomment below and update the code to test the property principalWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property principalOutstanding (base name: "principalOutstanding")', function() {
      // uncomment below and update the code to test the property principalOutstanding
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property principalOverdue (base name: "principalOverdue")', function() {
      // uncomment below and update the code to test the property principalOverdue
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestCharged (base name: "interestCharged")', function() {
      // uncomment below and update the code to test the property interestCharged
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestPaid (base name: "interestPaid")', function() {
      // uncomment below and update the code to test the property interestPaid
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestWaived (base name: "interestWaived")', function() {
      // uncomment below and update the code to test the property interestWaived
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestWrittenOff (base name: "interestWrittenOff")', function() {
      // uncomment below and update the code to test the property interestWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestOutstanding (base name: "interestOutstanding")', function() {
      // uncomment below and update the code to test the property interestOutstanding
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property interestOverdue (base name: "interestOverdue")', function() {
      // uncomment below and update the code to test the property interestOverdue
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesCharged (base name: "feeChargesCharged")', function() {
      // uncomment below and update the code to test the property feeChargesCharged
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesDueAtDisbursementCharged (base name: "feeChargesDueAtDisbursementCharged")', function() {
      // uncomment below and update the code to test the property feeChargesDueAtDisbursementCharged
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesPaid (base name: "feeChargesPaid")', function() {
      // uncomment below and update the code to test the property feeChargesPaid
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesWaived (base name: "feeChargesWaived")', function() {
      // uncomment below and update the code to test the property feeChargesWaived
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesWrittenOff (base name: "feeChargesWrittenOff")', function() {
      // uncomment below and update the code to test the property feeChargesWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesOutstanding (base name: "feeChargesOutstanding")', function() {
      // uncomment below and update the code to test the property feeChargesOutstanding
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesOverdue (base name: "feeChargesOverdue")', function() {
      // uncomment below and update the code to test the property feeChargesOverdue
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesCharged (base name: "penaltyChargesCharged")', function() {
      // uncomment below and update the code to test the property penaltyChargesCharged
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesPaid (base name: "penaltyChargesPaid")', function() {
      // uncomment below and update the code to test the property penaltyChargesPaid
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesWaived (base name: "penaltyChargesWaived")', function() {
      // uncomment below and update the code to test the property penaltyChargesWaived
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesWrittenOff (base name: "penaltyChargesWrittenOff")', function() {
      // uncomment below and update the code to test the property penaltyChargesWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesOutstanding (base name: "penaltyChargesOutstanding")', function() {
      // uncomment below and update the code to test the property penaltyChargesOutstanding
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property penaltyChargesOverdue (base name: "penaltyChargesOverdue")', function() {
      // uncomment below and update the code to test the property penaltyChargesOverdue
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalExpectedRepayment (base name: "totalExpectedRepayment")', function() {
      // uncomment below and update the code to test the property totalExpectedRepayment
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalRepayment (base name: "totalRepayment")', function() {
      // uncomment below and update the code to test the property totalRepayment
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalExpectedCostOfLoan (base name: "totalExpectedCostOfLoan")', function() {
      // uncomment below and update the code to test the property totalExpectedCostOfLoan
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalCostOfLoan (base name: "totalCostOfLoan")', function() {
      // uncomment below and update the code to test the property totalCostOfLoan
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalWaived (base name: "totalWaived")', function() {
      // uncomment below and update the code to test the property totalWaived
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalWrittenOff (base name: "totalWrittenOff")', function() {
      // uncomment below and update the code to test the property totalWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalOutstanding (base name: "totalOutstanding")', function() {
      // uncomment below and update the code to test the property totalOutstanding
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property totalOverdue (base name: "totalOverdue")', function() {
      // uncomment below and update the code to test the property totalOverdue
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property overdueSinceDate (base name: "overdueSinceDate")', function() {
      // uncomment below and update the code to test the property overdueSinceDate
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property linkedAccount (base name: "linkedAccount")', function() {
      // uncomment below and update the code to test the property linkedAccount
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property disbursementDetails (base name: "disbursementDetails")', function() {
      // uncomment below and update the code to test the property disbursementDetails
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property fixedEmiAmount (base name: "fixedEmiAmount")', function() {
      // uncomment below and update the code to test the property fixedEmiAmount
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property maxOutstandingLoanBalance (base name: "maxOutstandingLoanBalance")', function() {
      // uncomment below and update the code to test the property maxOutstandingLoanBalance
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property canDisburse (base name: "canDisburse")', function() {
      // uncomment below and update the code to test the property canDisburse
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property emiAmountVariations (base name: "emiAmountVariations")', function() {
      // uncomment below and update the code to test the property emiAmountVariations
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property inArrears (base name: "inArrears")', function() {
      // uncomment below and update the code to test the property inArrears
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property isNPA (base name: "isNPA")', function() {
      // uncomment below and update the code to test the property isNPA
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

    it('should have the property overdueCharges (base name: "overdueCharges")', function() {
      // uncomment below and update the code to test the property overdueCharges
      //var instane = new ApacheFineract.GetLoansLoanIdSummary();
      //expect(instance).to.be();
    });

  });

}));
