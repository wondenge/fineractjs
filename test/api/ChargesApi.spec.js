

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
    instance = new ApacheFineract.ChargesApi();
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

  describe('ChargesApi', function() {
    describe('createCharge', function() {
      it('should call createCharge successfully', function(done) {
        //uncomment below and update the code to test createCharge
        //instance.createCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCharge', function() {
      it('should call deleteCharge successfully', function(done) {
        //uncomment below and update the code to test deleteCharge
        //instance.deleteCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllCharges', function() {
      it('should call retrieveAllCharges successfully', function(done) {
        //uncomment below and update the code to test retrieveAllCharges
        //instance.retrieveAllCharges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCharge', function() {
      it('should call retrieveCharge successfully', function(done) {
        //uncomment below and update the code to test retrieveCharge
        //instance.retrieveCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveNewChargeDetails', function() {
      it('should call retrieveNewChargeDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveNewChargeDetails
        //instance.retrieveNewChargeDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCharge', function() {
      it('should call updateCharge successfully', function(done) {
        //uncomment below and update the code to test updateCharge
        //instance.updateCharge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
