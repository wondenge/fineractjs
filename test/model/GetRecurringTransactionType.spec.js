

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
    instance = new ApacheFineract.GetRecurringTransactionType();
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

  describe('GetRecurringTransactionType', function() {
    it('should create an instance of GetRecurringTransactionType', function() {
      // uncomment below and update the code to test GetRecurringTransactionType
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be.a(ApacheFineract.GetRecurringTransactionType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property deposit (base name: "deposit")', function() {
      // uncomment below and update the code to test the property deposit
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property withdrawal (base name: "withdrawal")', function() {
      // uncomment below and update the code to test the property withdrawal
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property interestPosting (base name: "interestPosting")', function() {
      // uncomment below and update the code to test the property interestPosting
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property feeDeduction (base name: "feeDeduction")', function() {
      // uncomment below and update the code to test the property feeDeduction
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property initiateTransfer (base name: "initiateTransfer")', function() {
      // uncomment below and update the code to test the property initiateTransfer
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property approveTransfer (base name: "approveTransfer")', function() {
      // uncomment below and update the code to test the property approveTransfer
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property withdrawTransfer (base name: "withdrawTransfer")', function() {
      // uncomment below and update the code to test the property withdrawTransfer
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property rejectTransfer (base name: "rejectTransfer")', function() {
      // uncomment below and update the code to test the property rejectTransfer
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property overdraftInterest (base name: "overdraftInterest")', function() {
      // uncomment below and update the code to test the property overdraftInterest
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property writtenoff (base name: "writtenoff")', function() {
      // uncomment below and update the code to test the property writtenoff
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

    it('should have the property overdraftFee (base name: "overdraftFee")', function() {
      // uncomment below and update the code to test the property overdraftFee
      //var instane = new ApacheFineract.GetRecurringTransactionType();
      //expect(instance).to.be();
    });

  });

}));
