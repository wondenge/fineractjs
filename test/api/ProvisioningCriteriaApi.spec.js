

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
    instance = new ApacheFineract.ProvisioningCriteriaApi();
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

  describe('ProvisioningCriteriaApi', function() {
    describe('createProvisioningCriteria', function() {
      it('should call createProvisioningCriteria successfully', function(done) {
        //uncomment below and update the code to test createProvisioningCriteria
        //instance.createProvisioningCriteria(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProvisioningCriteria', function() {
      it('should call deleteProvisioningCriteria successfully', function(done) {
        //uncomment below and update the code to test deleteProvisioningCriteria
        //instance.deleteProvisioningCriteria(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllProvisioningCriterias', function() {
      it('should call retrieveAllProvisioningCriterias successfully', function(done) {
        //uncomment below and update the code to test retrieveAllProvisioningCriterias
        //instance.retrieveAllProvisioningCriterias(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveProvisioningCriteria', function() {
      it('should call retrieveProvisioningCriteria successfully', function(done) {
        //uncomment below and update the code to test retrieveProvisioningCriteria
        //instance.retrieveProvisioningCriteria(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate3', function() {
      it('should call retrieveTemplate3 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate3
        //instance.retrieveTemplate3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProvisioningCriteria', function() {
      it('should call updateProvisioningCriteria successfully', function(done) {
        //uncomment below and update the code to test updateProvisioningCriteria
        //instance.updateProvisioningCriteria(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
