

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
    instance = new ApacheFineract.InterestRateSlabAKAInterestBandsApi();
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

  describe('InterestRateSlabAKAInterestBandsApi', function() {
    describe('create8', function() {
      it('should call create8 successfully', function(done) {
        //uncomment below and update the code to test create8
        //instance.create8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete12', function() {
      it('should call delete12 successfully', function(done) {
        //uncomment below and update the code to test delete12
        //instance.delete12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll24', function() {
      it('should call retrieveAll24 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll24
        //instance.retrieveAll24(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne14', function() {
      it('should call retrieveOne14 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne14
        //instance.retrieveOne14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template8', function() {
      it('should call template8 successfully', function(done) {
        //uncomment below and update the code to test template8
        //instance.template8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update12', function() {
      it('should call update12 successfully', function(done) {
        //uncomment below and update the code to test update12
        //instance.update12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
