

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
    instance = new ApacheFineract.LoanChargesApi();
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

  describe('LoanChargesApi', function() {
    describe('deleteLoanCharge', function() {
      it('should call deleteLoanCharge successfully', function(done) {
        //uncomment below and update the code to test deleteLoanCharge
        //instance.deleteLoanCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('executeLoanCharge', function() {
      it('should call executeLoanCharge successfully', function(done) {
        //uncomment below and update the code to test executeLoanCharge
        //instance.executeLoanCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('executeLoanCharge1', function() {
      it('should call executeLoanCharge1 successfully', function(done) {
        //uncomment below and update the code to test executeLoanCharge1
        //instance.executeLoanCharge1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllLoanCharges', function() {
      it('should call retrieveAllLoanCharges successfully', function(done) {
        //uncomment below and update the code to test retrieveAllLoanCharges
        //instance.retrieveAllLoanCharges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoanCharge', function() {
      it('should call retrieveLoanCharge successfully', function(done) {
        //uncomment below and update the code to test retrieveLoanCharge
        //instance.retrieveLoanCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate8', function() {
      it('should call retrieveTemplate8 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate8
        //instance.retrieveTemplate8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoanCharge', function() {
      it('should call updateLoanCharge successfully', function(done) {
        //uncomment below and update the code to test updateLoanCharge
        //instance.updateLoanCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
