

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
    instance = new ApacheFineract.LoanCollateralApi();
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

  describe('LoanCollateralApi', function() {
    describe('createCollateral', function() {
      it('should call createCollateral successfully', function(done) {
        //uncomment below and update the code to test createCollateral
        //instance.createCollateral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollateral', function() {
      it('should call deleteCollateral successfully', function(done) {
        //uncomment below and update the code to test deleteCollateral
        //instance.deleteCollateral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newCollateralTemplate', function() {
      it('should call newCollateralTemplate successfully', function(done) {
        //uncomment below and update the code to test newCollateralTemplate
        //instance.newCollateralTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCollateralDetails', function() {
      it('should call retrieveCollateralDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveCollateralDetails
        //instance.retrieveCollateralDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCollateralDetails1', function() {
      it('should call retrieveCollateralDetails1 successfully', function(done) {
        //uncomment below and update the code to test retrieveCollateralDetails1
        //instance.retrieveCollateralDetails1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCollateral', function() {
      it('should call updateCollateral successfully', function(done) {
        //uncomment below and update the code to test updateCollateral
        //instance.updateCollateral(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
