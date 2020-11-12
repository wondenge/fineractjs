

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
    instance = new ApacheFineract.ClientChargesApi();
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

  describe('ClientChargesApi', function() {
    describe('applyClientCharge', function() {
      it('should call applyClientCharge successfully', function(done) {
        //uncomment below and update the code to test applyClientCharge
        //instance.applyClientCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientCharge', function() {
      it('should call deleteClientCharge successfully', function(done) {
        //uncomment below and update the code to test deleteClientCharge
        //instance.deleteClientCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('payOrWaiveClientCharge', function() {
      it('should call payOrWaiveClientCharge successfully', function(done) {
        //uncomment below and update the code to test payOrWaiveClientCharge
        //instance.payOrWaiveClientCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllClientCharges', function() {
      it('should call retrieveAllClientCharges successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClientCharges
        //instance.retrieveAllClientCharges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveClientCharge', function() {
      it('should call retrieveClientCharge successfully', function(done) {
        //uncomment below and update the code to test retrieveClientCharge
        //instance.retrieveClientCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate4', function() {
      it('should call retrieveTemplate4 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate4
        //instance.retrieveTemplate4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
