

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
    instance = new ApacheFineract.SavingsChargesApi();
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

  describe('SavingsChargesApi', function() {
    describe('addSavingsAccountCharge', function() {
      it('should call addSavingsAccountCharge successfully', function(done) {
        //uncomment below and update the code to test addSavingsAccountCharge
        //instance.addSavingsAccountCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSavingsAccountCharge', function() {
      it('should call deleteSavingsAccountCharge successfully', function(done) {
        //uncomment below and update the code to test deleteSavingsAccountCharge
        //instance.deleteSavingsAccountCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('payOrWaiveSavingsAccountCharge', function() {
      it('should call payOrWaiveSavingsAccountCharge successfully', function(done) {
        //uncomment below and update the code to test payOrWaiveSavingsAccountCharge
        //instance.payOrWaiveSavingsAccountCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllSavingsAccountCharges', function() {
      it('should call retrieveAllSavingsAccountCharges successfully', function(done) {
        //uncomment below and update the code to test retrieveAllSavingsAccountCharges
        //instance.retrieveAllSavingsAccountCharges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSavingsAccountCharge', function() {
      it('should call retrieveSavingsAccountCharge successfully', function(done) {
        //uncomment below and update the code to test retrieveSavingsAccountCharge
        //instance.retrieveSavingsAccountCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate17', function() {
      it('should call retrieveTemplate17 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate17
        //instance.retrieveTemplate17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSavingsAccountCharge', function() {
      it('should call updateSavingsAccountCharge successfully', function(done) {
        //uncomment below and update the code to test updateSavingsAccountCharge
        //instance.updateSavingsAccountCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
