

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
    instance = new ApacheFineract.AccountingRulesApi();
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

  describe('AccountingRulesApi', function() {
    describe('createAccountingRule', function() {
      it('should call createAccountingRule successfully', function(done) {
        //uncomment below and update the code to test createAccountingRule
        //instance.createAccountingRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountingRule', function() {
      it('should call deleteAccountingRule successfully', function(done) {
        //uncomment below and update the code to test deleteAccountingRule
        //instance.deleteAccountingRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveAccountingRule', function() {
      it('should call retreiveAccountingRule successfully', function(done) {
        //uncomment below and update the code to test retreiveAccountingRule
        //instance.retreiveAccountingRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllAccountingRules', function() {
      it('should call retrieveAllAccountingRules successfully', function(done) {
        //uncomment below and update the code to test retrieveAllAccountingRules
        //instance.retrieveAllAccountingRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate1', function() {
      it('should call retrieveTemplate1 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate1
        //instance.retrieveTemplate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountingRule', function() {
      it('should call updateAccountingRule successfully', function(done) {
        //uncomment below and update the code to test updateAccountingRule
        //instance.updateAccountingRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
