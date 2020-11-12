

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
    instance = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
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

  describe('PostLoansRepaymentSchedulePeriods', function() {
    it('should create an instance of PostLoansRepaymentSchedulePeriods', function() {
      // uncomment below and update the code to test PostLoansRepaymentSchedulePeriods
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be.a(ApacheFineract.PostLoansRepaymentSchedulePeriods);
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property principalDisbursed (base name: "principalDisbursed")', function() {
      // uncomment below and update the code to test the property principalDisbursed
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property principalLoanBalanceOutstanding (base name: "principalLoanBalanceOutstanding")', function() {
      // uncomment below and update the code to test the property principalLoanBalanceOutstanding
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesDue (base name: "feeChargesDue")', function() {
      // uncomment below and update the code to test the property feeChargesDue
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property feeChargesOutstanding (base name: "feeChargesOutstanding")', function() {
      // uncomment below and update the code to test the property feeChargesOutstanding
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property totalOriginalDueForPeriod (base name: "totalOriginalDueForPeriod")', function() {
      // uncomment below and update the code to test the property totalOriginalDueForPeriod
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property totalDueForPeriod (base name: "totalDueForPeriod")', function() {
      // uncomment below and update the code to test the property totalDueForPeriod
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property totalOutstandingForPeriod (base name: "totalOutstandingForPeriod")', function() {
      // uncomment below and update the code to test the property totalOutstandingForPeriod
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property totalOverdue (base name: "totalOverdue")', function() {
      // uncomment below and update the code to test the property totalOverdue
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

    it('should have the property totalActualCostOfLoanForPeriod (base name: "totalActualCostOfLoanForPeriod")', function() {
      // uncomment below and update the code to test the property totalActualCostOfLoanForPeriod
      //var instane = new ApacheFineract.PostLoansRepaymentSchedulePeriods();
      //expect(instance).to.be();
    });

  });

}));
