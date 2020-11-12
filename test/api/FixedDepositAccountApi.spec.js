

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
    instance = new ApacheFineract.FixedDepositAccountApi();
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

  describe('FixedDepositAccountApi', function() {
    describe('accountClosureTemplate', function() {
      it('should call accountClosureTemplate successfully', function(done) {
        //uncomment below and update the code to test accountClosureTemplate
        //instance.accountClosureTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete14', function() {
      it('should call delete14 successfully', function(done) {
        //uncomment below and update the code to test delete14
        //instance.delete14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFixedDepositTemplate', function() {
      it('should call getFixedDepositTemplate successfully', function(done) {
        //uncomment below and update the code to test getFixedDepositTemplate
        //instance.getFixedDepositTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFixedDepositTransactionTemplate', function() {
      it('should call getFixedDepositTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test getFixedDepositTransactionTemplate
        //instance.getFixedDepositTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleCommands4', function() {
      it('should call handleCommands4 successfully', function(done) {
        //uncomment below and update the code to test handleCommands4
        //instance.handleCommands4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFixedDepositTemplate', function() {
      it('should call postFixedDepositTemplate successfully', function(done) {
        //uncomment below and update the code to test postFixedDepositTemplate
        //instance.postFixedDepositTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFixedDepositTransactionTemplate', function() {
      it('should call postFixedDepositTransactionTemplate successfully', function(done) {
        //uncomment below and update the code to test postFixedDepositTransactionTemplate
        //instance.postFixedDepositTransactionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll28', function() {
      it('should call retrieveAll28 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll28
        //instance.retrieveAll28(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne17', function() {
      it('should call retrieveOne17 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne17
        //instance.retrieveOne17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitApplication', function() {
      it('should call submitApplication successfully', function(done) {
        //uncomment below and update the code to test submitApplication
        //instance.submitApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template12', function() {
      it('should call template12 successfully', function(done) {
        //uncomment below and update the code to test template12
        //instance.template12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update14', function() {
      it('should call update14 successfully', function(done) {
        //uncomment below and update the code to test update14
        //instance.update14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
