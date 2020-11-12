

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
    instance = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
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

  describe('GetSelfLoansLoanIdTransactionsTransactionIdResponse', function() {
    it('should create an instance of GetSelfLoansLoanIdTransactionsTransactionIdResponse', function() {
      // uncomment below and update the code to test GetSelfLoansLoanIdTransactionsTransactionIdResponse
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property manuallyReversed (base name: "manuallyReversed")', function() {
      // uncomment below and update the code to test the property manuallyReversed
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPortion (base name: "interestPortion")', function() {
      // uncomment below and update the code to test the property interestPortion
      //var instane = new ApacheFineract.GetSelfLoansLoanIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

  });

}));
