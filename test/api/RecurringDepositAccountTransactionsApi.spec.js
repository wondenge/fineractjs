

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
    instance = new ApacheFineract.RecurringDepositAccountTransactionsApi();
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

  describe('RecurringDepositAccountTransactionsApi', function() {
    describe('handleTransactionCommands', function() {
      it('should call handleTransactionCommands successfully', function(done) {
        //uncomment below and update the code to test handleTransactionCommands
        //instance.handleTransactionCommands(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne19', function() {
      it('should call retrieveOne19 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne19
        //instance.retrieveOne19(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate15', function() {
      it('should call retrieveTemplate15 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate15
        //instance.retrieveTemplate15(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transaction1', function() {
      it('should call transaction1 successfully', function(done) {
        //uncomment below and update the code to test transaction1
        //instance.transaction1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
