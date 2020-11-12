

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
    instance = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
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

  describe('GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse', function() {
    it('should create an instance of GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse', function() {
      // uncomment below and update the code to test GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentDetailData (base name: "paymentDetailData")', function() {
      // uncomment below and update the code to test the property paymentDetailData
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property runningBalance (base name: "runningBalance")', function() {
      // uncomment below and update the code to test the property runningBalance
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property reversed (base name: "reversed")', function() {
      // uncomment below and update the code to test the property reversed
      //var instane = new ApacheFineract.GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse();
      //expect(instance).to.be();
    });

  });

}));
