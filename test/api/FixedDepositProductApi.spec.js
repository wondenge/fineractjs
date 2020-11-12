

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
    instance = new ApacheFineract.FixedDepositProductApi();
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

  describe('FixedDepositProductApi', function() {
    describe('create10', function() {
      it('should call create10 successfully', function(done) {
        //uncomment below and update the code to test create10
        //instance.create10(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete15', function() {
      it('should call delete15 successfully', function(done) {
        //uncomment below and update the code to test delete15
        //instance.delete15(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll29', function() {
      it('should call retrieveAll29 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll29
        //instance.retrieveAll29(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne18', function() {
      it('should call retrieveOne18 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne18
        //instance.retrieveOne18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate14', function() {
      it('should call retrieveTemplate14 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate14
        //instance.retrieveTemplate14(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update15', function() {
      it('should call update15 successfully', function(done) {
        //uncomment below and update the code to test update15
        //instance.update15(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
