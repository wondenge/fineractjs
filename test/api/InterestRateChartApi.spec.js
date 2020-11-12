

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
    instance = new ApacheFineract.InterestRateChartApi();
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

  describe('InterestRateChartApi', function() {
    describe('create9', function() {
      it('should call create9 successfully', function(done) {
        //uncomment below and update the code to test create9
        //instance.create9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete13', function() {
      it('should call delete13 successfully', function(done) {
        //uncomment below and update the code to test delete13
        //instance.delete13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll25', function() {
      it('should call retrieveAll25 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll25
        //instance.retrieveAll25(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne15', function() {
      it('should call retrieveOne15 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne15
        //instance.retrieveOne15(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template9', function() {
      it('should call template9 successfully', function(done) {
        //uncomment below and update the code to test template9
        //instance.template9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update13', function() {
      it('should call update13 successfully', function(done) {
        //uncomment below and update the code to test update13
        //instance.update13(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
