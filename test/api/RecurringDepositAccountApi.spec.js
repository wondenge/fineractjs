

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
    instance = new ApacheFineract.RecurringDepositAccountApi();
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

  describe('RecurringDepositAccountApi', function() {
    describe('accountClosureTemplate1', function() {
      it('should call accountClosureTemplate1 successfully', function(done) {
        //uncomment below and update the code to test accountClosureTemplate1
        //instance.accountClosureTemplate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete16', function() {
      it('should call delete16 successfully', function(done) {
        //uncomment below and update the code to test delete16
        //instance.delete16(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecurringDepositTemplate', function() {
      it('should call getRecurringDepositTemplate successfully', function(done) {
        //uncomment below and update the code to test getRecurringDepositTemplate
        //instance.getRecurringDepositTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecurringDepositTransactionTemplate', function() {
      it('should call getRecurringDepositTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test getRecurringDepositTransactionTemplate
        //instance.getRecurringDepositTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands5', function() {
      it('should call handleCommands5 successfully', function(done) {
        //uncomment below and update the code to test handleCommands5
        //instance.handleCommands5(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postRecurringDepositTemplate', function() {
      it('should call postRecurringDepositTemplate successfully', function(done) {
        //uncomment below and update the code to test postRecurringDepositTemplate
        //instance.postRecurringDepositTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postRecurringDepositTransactionsTemplate', function() {
      it('should call postRecurringDepositTransactionsTemplate successfully', function(done) {
        //uncomment below and update the code to test postRecurringDepositTransactionsTemplate
        //instance.postRecurringDepositTransactionsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll30', function() {
      it('should call retrieveAll30 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll30
        //instance.retrieveAll30(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne20', function() {
      it('should call retrieveOne20 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne20
        //instance.retrieveOne20(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitApplication1', function() {
      it('should call submitApplication1 successfully', function(done) {
        //uncomment below and update the code to test submitApplication1
        //instance.submitApplication1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template13', function() {
      it('should call template13 successfully', function(done) {
        //uncomment below and update the code to test template13
        //instance.template13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update16', function() {
      it('should call update16 successfully', function(done) {
        //uncomment below and update the code to test update16
        //instance.update16(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
