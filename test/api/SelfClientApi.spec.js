

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
    instance = new ApacheFineract.SelfClientApi();
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

  describe('SelfClientApi', function() {
    describe('addNewClientImage2', function() {
      it('should call addNewClientImage2 successfully', function(done) {
        //uncomment below and update the code to test addNewClientImage2
        //instance.addNewClientImage2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientImage1', function() {
      it('should call deleteClientImage1 successfully', function(done) {
        //uncomment below and update the code to test deleteClientImage1
        //instance.deleteClientImage1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll35', function() {
      it('should call retrieveAll35 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll35
        //instance.retrieveAll35(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllClientCharges1', function() {
      it('should call retrieveAllClientCharges1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClientCharges1
        //instance.retrieveAllClientCharges1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllClientTransactions1', function() {
      it('should call retrieveAllClientTransactions1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClientTransactions1
        //instance.retrieveAllClientTransactions1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAssociatedAccounts1', function() {
      it('should call retrieveAssociatedAccounts1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAssociatedAccounts1
        //instance.retrieveAssociatedAccounts1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveClientCharge1', function() {
      it('should call retrieveClientCharge1 successfully', function(done) {
        //uncomment below and update the code to test retrieveClientCharge1
        //instance.retrieveClientCharge1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveClientTransaction1', function() {
      it('should call retrieveClientTransaction1 successfully', function(done) {
        //uncomment below and update the code to test retrieveClientTransaction1
        //instance.retrieveClientTransaction1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveImage', function() {
      it('should call retrieveImage successfully', function(done) {
        //uncomment below and update the code to test retrieveImage
        //instance.retrieveImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveObligeeDetails1', function() {
      it('should call retrieveObligeeDetails1 successfully', function(done) {
        //uncomment below and update the code to test retrieveObligeeDetails1
        //instance.retrieveObligeeDetails1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne25', function() {
      it('should call retrieveOne25 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne25
        //instance.retrieveOne25(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
