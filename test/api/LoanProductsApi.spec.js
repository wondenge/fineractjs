

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
    instance = new ApacheFineract.LoanProductsApi();
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

  describe('LoanProductsApi', function() {
    describe('createLoanProduct', function() {
      it('should call createLoanProduct successfully', function(done) {
        //uncomment below and update the code to test createLoanProduct
        //instance.createLoanProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllLoanProducts', function() {
      it('should call retrieveAllLoanProducts successfully', function(done) {
        //uncomment below and update the code to test retrieveAllLoanProducts
        //instance.retrieveAllLoanProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveLoanProductDetails', function() {
      it('should call retrieveLoanProductDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveLoanProductDetails
        //instance.retrieveLoanProductDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate10', function() {
      it('should call retrieveTemplate10 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate10
        //instance.retrieveTemplate10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoanProduct', function() {
      it('should call updateLoanProduct successfully', function(done) {
        //uncomment below and update the code to test updateLoanProduct
        //instance.updateLoanProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
