

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
    instance = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
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

  describe('PostCollectionSheetBulkRepaymentTransactions', function() {
    it('should create an instance of PostCollectionSheetBulkRepaymentTransactions', function() {
      // uncomment below and update the code to test PostCollectionSheetBulkRepaymentTransactions
      //var instane = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
      //expect(instance).to.be.a(ApacheFineract.PostCollectionSheetBulkRepaymentTransactions);
    });

    it('should have the property loanId (base name: "loanId")', function() {
      // uncomment below and update the code to test the property loanId
      //var instane = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
      //expect(instance).to.be();
    });

    it('should have the property transactionAmount (base name: "transactionAmount")', function() {
      // uncomment below and update the code to test the property transactionAmount
      //var instane = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
      //expect(instance).to.be();
    });

    it('should have the property paymentTypeId (base name: "paymentTypeId")', function() {
      // uncomment below and update the code to test the property paymentTypeId
      //var instane = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
      //expect(instance).to.be();
    });

    it('should have the property receiptNumber (base name: "receiptNumber")', function() {
      // uncomment below and update the code to test the property receiptNumber
      //var instane = new ApacheFineract.PostCollectionSheetBulkRepaymentTransactions();
      //expect(instance).to.be();
    });

  });

}));
