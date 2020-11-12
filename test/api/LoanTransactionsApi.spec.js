

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
    instance = new ApacheFineract.LoanTransactionsApi();
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

  describe('LoanTransactionsApi', function() {
    describe('adjustLoanTransaction', function() {
      it('should call adjustLoanTransaction successfully', function(done) {
        //uncomment below and update the code to test adjustLoanTransaction
        //instance.adjustLoanTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('executeLoanTransaction', function() {
      it('should call executeLoanTransaction successfully', function(done) {
        //uncomment below and update the code to test executeLoanTransaction
        //instance.executeLoanTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTransaction', function() {
      it('should call retrieveTransaction successfully', function(done) {
        //uncomment below and update the code to test retrieveTransaction
        //instance.retrieveTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTransactionTemplate', function() {
      it('should call retrieveTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveTransactionTemplate
        //instance.retrieveTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
