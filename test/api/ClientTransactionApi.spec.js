

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
    instance = new ApacheFineract.ClientTransactionApi();
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

  describe('ClientTransactionApi', function() {
    describe('retrieveAllClientTransactions', function() {
      it('should call retrieveAllClientTransactions successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClientTransactions
        //instance.retrieveAllClientTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveClientTransaction', function() {
      it('should call retrieveClientTransaction successfully', function(done) {
        //uncomment below and update the code to test retrieveClientTransaction
        //instance.retrieveClientTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('undoClientTransaction', function() {
      it('should call undoClientTransaction successfully', function(done) {
        //uncomment below and update the code to test undoClientTransaction
        //instance.undoClientTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
