

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
    instance = new ApacheFineract.GeneralLedgerAccountApi();
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

  describe('GeneralLedgerAccountApi', function() {
    describe('createGLAccount1', function() {
      it('should call createGLAccount1 successfully', function(done) {
        //uncomment below and update the code to test createGLAccount1
        //instance.createGLAccount1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGLAccount1', function() {
      it('should call deleteGLAccount1 successfully', function(done) {
        //uncomment below and update the code to test deleteGLAccount1
        //instance.deleteGLAccount1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGlAccountsTemplate', function() {
      it('should call getGlAccountsTemplate successfully', function(done) {
        //uncomment below and update the code to test getGlAccountsTemplate
        //instance.getGlAccountsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGlAccountsTemplate', function() {
      it('should call postGlAccountsTemplate successfully', function(done) {
        //uncomment below and update the code to test postGlAccountsTemplate
        //instance.postGlAccountsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveAccount', function() {
      it('should call retreiveAccount successfully', function(done) {
        //uncomment below and update the code to test retreiveAccount
        //instance.retreiveAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllAccounts', function() {
      it('should call retrieveAllAccounts successfully', function(done) {
        //uncomment below and update the code to test retrieveAllAccounts
        //instance.retrieveAllAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveNewAccountDetails', function() {
      it('should call retrieveNewAccountDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveNewAccountDetails
        //instance.retrieveNewAccountDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGLAccount1', function() {
      it('should call updateGLAccount1 successfully', function(done) {
        //uncomment below and update the code to test updateGLAccount1
        //instance.updateGLAccount1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
