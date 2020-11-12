

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
    instance = new ApacheFineract.LoansApi();
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

  describe('LoansApi', function() {
    describe('calculateLoanScheduleOrSubmitLoanApplication', function() {
      it('should call calculateLoanScheduleOrSubmitLoanApplication successfully', function(done) {
        //uncomment below and update the code to test calculateLoanScheduleOrSubmitLoanApplication
        //instance.calculateLoanScheduleOrSubmitLoanApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLoanApplication', function() {
      it('should call deleteLoanApplication successfully', function(done) {
        //uncomment below and update the code to test deleteLoanApplication
        //instance.deleteLoanApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGlimRepaymentTemplate', function() {
      it('should call getGlimRepaymentTemplate successfully', function(done) {
        //uncomment below and update the code to test getGlimRepaymentTemplate
        //instance.getGlimRepaymentTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoanRepaymentTemplate', function() {
      it('should call getLoanRepaymentTemplate successfully', function(done) {
        //uncomment below and update the code to test getLoanRepaymentTemplate
        //instance.getLoanRepaymentTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoansTemplate', function() {
      it('should call getLoansTemplate successfully', function(done) {
        //uncomment below and update the code to test getLoansTemplate
        //instance.getLoansTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('glimStateTransitions', function() {
      it('should call glimStateTransitions successfully', function(done) {
        //uncomment below and update the code to test glimStateTransitions
        //instance.glimStateTransitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyLoanApplication', function() {
      it('should call modifyLoanApplication successfully', function(done) {
        //uncomment below and update the code to test modifyLoanApplication
        //instance.modifyLoanApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postLoanRepaymentTemplate', function() {
      it('should call postLoanRepaymentTemplate successfully', function(done) {
        //uncomment below and update the code to test postLoanRepaymentTemplate
        //instance.postLoanRepaymentTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postLoanTemplate', function() {
      it('should call postLoanTemplate successfully', function(done) {
        //uncomment below and update the code to test postLoanTemplate
        //instance.postLoanTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll26', function() {
      it('should call retrieveAll26 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll26
        //instance.retrieveAll26(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveApprovalTemplate', function() {
      it('should call retrieveApprovalTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveApprovalTemplate
        //instance.retrieveApprovalTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoan', function() {
      it('should call retrieveLoan successfully', function(done) {
        //uncomment below and update the code to test retrieveLoan
        //instance.retrieveLoan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stateTransitions', function() {
      it('should call stateTransitions successfully', function(done) {
        //uncomment below and update the code to test stateTransitions
        //instance.stateTransitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template10', function() {
      it('should call template10 successfully', function(done) {
        //uncomment below and update the code to test template10
        //instance.template10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
