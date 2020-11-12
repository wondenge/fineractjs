

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
    instance = new ApacheFineract.SelfDividendApi();
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

  describe('SelfDividendApi', function() {
    describe('createDividendDetail', function() {
      it('should call createDividendDetail successfully', function(done) {
        //uncomment below and update the code to test createDividendDetail
        //instance.createDividendDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDividendDetail', function() {
      it('should call deleteDividendDetail successfully', function(done) {
        //uncomment below and update the code to test deleteDividendDetail
        //instance.deleteDividendDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll38', function() {
      it('should call retrieveAll38 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll38
        //instance.retrieveAll38(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveDividendDetails', function() {
      it('should call retrieveDividendDetails successfully', function(done) {
        //uncomment below and update the code to test retrieveDividendDetails
        //instance.retrieveDividendDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDividendDetail', function() {
      it('should call updateDividendDetail successfully', function(done) {
        //uncomment below and update the code to test updateDividendDetail
        //instance.updateDividendDetail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
