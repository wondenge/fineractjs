

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
    instance = new ApacheFineract.PaymentTypeApi();
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

  describe('PaymentTypeApi', function() {
    describe('createPaymentType', function() {
      it('should call createPaymentType successfully', function(done) {
        //uncomment below and update the code to test createPaymentType
        //instance.createPaymentType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCode1', function() {
      it('should call deleteCode1 successfully', function(done) {
        //uncomment below and update the code to test deleteCode1
        //instance.deleteCode1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllPaymentTypes', function() {
      it('should call getAllPaymentTypes successfully', function(done) {
        //uncomment below and update the code to test getAllPaymentTypes
        //instance.getAllPaymentTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOnePaymentType', function() {
      it('should call retrieveOnePaymentType successfully', function(done) {
        //uncomment below and update the code to test retrieveOnePaymentType
        //instance.retrieveOnePaymentType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePaymentType', function() {
      it('should call updatePaymentType successfully', function(done) {
        //uncomment below and update the code to test updatePaymentType
        //instance.updatePaymentType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
