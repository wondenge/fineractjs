  

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
    instance = new ApacheFineract.TaxComponentsApi();
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

  describe('TaxComponentsApi', function() {
    describe('createTaxCompoent', function() {
      it('should call createTaxCompoent successfully', function(done) {
        //uncomment below and update the code to test createTaxCompoent
        //instance.createTaxCompoent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllTaxComponents', function() {
      it('should call retrieveAllTaxComponents successfully', function(done) {
        //uncomment below and update the code to test retrieveAllTaxComponents
        //instance.retrieveAllTaxComponents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTaxComponent', function() {
      it('should call retrieveTaxComponent successfully', function(done) {
        //uncomment below and update the code to test retrieveTaxComponent
        //instance.retrieveTaxComponent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate20', function() {
      it('should call retrieveTemplate20 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate20
        //instance.retrieveTemplate20(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaxCompoent', function() {
      it('should call updateTaxCompoent successfully', function(done) {
        //uncomment below and update the code to test updateTaxCompoent
        //instance.updateTaxCompoent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
