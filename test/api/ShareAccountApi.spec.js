

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
    instance = new ApacheFineract.ShareAccountApi();
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

  describe('ShareAccountApi', function() {
    describe('createAccount', function() {
      it('should call createAccount successfully', function(done) {
        //uncomment below and update the code to test createAccount
        //instance.createAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSharedAccountsTemplate', function() {
      it('should call getSharedAccountsTemplate successfully', function(done) {
        //uncomment below and update the code to test getSharedAccountsTemplate
        //instance.getSharedAccountsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands2', function() {
      it('should call handleCommands2 successfully', function(done) {
        //uncomment below and update the code to test handleCommands2
        //instance.handleCommands2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postSharedAccountsTemplate', function() {
      it('should call postSharedAccountsTemplate successfully', function(done) {
        //uncomment below and update the code to test postSharedAccountsTemplate
        //instance.postSharedAccountsTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAccount', function() {
      it('should call retrieveAccount successfully', function(done) {
        //uncomment below and update the code to test retrieveAccount
        //instance.retrieveAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllAccounts1', function() {
      it('should call retrieveAllAccounts1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllAccounts1
        //instance.retrieveAllAccounts1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template7', function() {
      it('should call template7 successfully', function(done) {
        //uncomment below and update the code to test template7
        //instance.template7(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccount', function() {
      it('should call updateAccount successfully', function(done) {
        //uncomment below and update the code to test updateAccount
        //instance.updateAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
