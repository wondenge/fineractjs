

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
    instance = new ApacheFineract.SelfSavingsAccountApi();
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

  describe('SelfSavingsAccountApi', function() {
    describe('modifySavingsAccountApplication', function() {
      it('should call modifySavingsAccountApplication successfully', function(done) {
        //uncomment below and update the code to test modifySavingsAccountApplication
        //instance.modifySavingsAccountApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllSavingsAccountCharges1', function() {
      it('should call retrieveAllSavingsAccountCharges1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllSavingsAccountCharges1
        //instance.retrieveAllSavingsAccountCharges1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSavings', function() {
      it('should call retrieveSavings successfully', function(done) {
        //uncomment below and update the code to test retrieveSavings
        //instance.retrieveSavings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSavingsAccountCharge1', function() {
      it('should call retrieveSavingsAccountCharge1 successfully', function(done) {
        //uncomment below and update the code to test retrieveSavingsAccountCharge1
        //instance.retrieveSavingsAccountCharge1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSavingsTransaction', function() {
      it('should call retrieveSavingsTransaction successfully', function(done) {
        //uncomment below and update the code to test retrieveSavingsTransaction
        //instance.retrieveSavingsTransaction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitSavingsAccountApplication', function() {
      it('should call submitSavingsAccountApplication successfully', function(done) {
        //uncomment below and update the code to test submitSavingsAccountApplication
        //instance.submitSavingsAccountApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template18', function() {
      it('should call template18 successfully', function(done) {
        //uncomment below and update the code to test template18
        //instance.template18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
