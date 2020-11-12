

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
    instance = new ApacheFineract.TaxGroupApi();
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

  describe('TaxGroupApi', function() {
    describe('createTaxGroup', function() {
      it('should call createTaxGroup successfully', function(done) {
        //uncomment below and update the code to test createTaxGroup
        //instance.createTaxGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllTaxGroups', function() {
      it('should call retrieveAllTaxGroups successfully', function(done) {
        //uncomment below and update the code to test retrieveAllTaxGroups
        //instance.retrieveAllTaxGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTaxGroup', function() {
      it('should call retrieveTaxGroup successfully', function(done) {
        //uncomment below and update the code to test retrieveTaxGroup
        //instance.retrieveTaxGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate21', function() {
      it('should call retrieveTemplate21 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate21
        //instance.retrieveTemplate21(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTaxGroup', function() {
      it('should call updateTaxGroup successfully', function(done) {
        //uncomment below and update the code to test updateTaxGroup
        //instance.updateTaxGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
