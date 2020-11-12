

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
    instance = new ApacheFineract.SelfLoansApi();
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

  describe('SelfLoansApi', function() {
    describe('calculateLoanScheduleOrSubmitLoanApplication1', function() {
      it('should call calculateLoanScheduleOrSubmitLoanApplication1 successfully', function(done) {
        //uncomment below and update the code to test calculateLoanScheduleOrSubmitLoanApplication1
        //instance.calculateLoanScheduleOrSubmitLoanApplication1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyLoanApplication1', function() {
      it('should call modifyLoanApplication1 successfully', function(done) {
        //uncomment below and update the code to test modifyLoanApplication1
        //instance.modifyLoanApplication1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllLoanCharges1', function() {
      it('should call retrieveAllLoanCharges1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAllLoanCharges1
        //instance.retrieveAllLoanCharges1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveGuarantorDetails2', function() {
      it('should call retrieveGuarantorDetails2 successfully', function(done) {
        //uncomment below and update the code to test retrieveGuarantorDetails2
        //instance.retrieveGuarantorDetails2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoan1', function() {
      it('should call retrieveLoan1 successfully', function(done) {
        //uncomment below and update the code to test retrieveLoan1
        //instance.retrieveLoan1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoanCharge1', function() {
      it('should call retrieveLoanCharge1 successfully', function(done) {
        //uncomment below and update the code to test retrieveLoanCharge1
        //instance.retrieveLoanCharge1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTransaction1', function() {
      it('should call retrieveTransaction1 successfully', function(done) {
        //uncomment below and update the code to test retrieveTransaction1
        //instance.retrieveTransaction1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stateTransitions1', function() {
      it('should call stateTransitions1 successfully', function(done) {
        //uncomment below and update the code to test stateTransitions1
        //instance.stateTransitions1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template17', function() {
      it('should call template17 successfully', function(done) {
        //uncomment below and update the code to test template17
        //instance.template17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
