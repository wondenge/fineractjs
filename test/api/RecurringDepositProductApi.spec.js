

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
    instance = new ApacheFineract.RecurringDepositProductApi();
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

  describe('RecurringDepositProductApi', function() {
    describe('create11', function() {
      it('should call create11 successfully', function(done) {
        //uncomment below and update the code to test create11
        //instance.create11(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete17', function() {
      it('should call delete17 successfully', function(done) {
        //uncomment below and update the code to test delete17
        //instance.delete17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll31', function() {
      it('should call retrieveAll31 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll31
        //instance.retrieveAll31(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne21', function() {
      it('should call retrieveOne21 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne21
        //instance.retrieveOne21(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate16', function() {
      it('should call retrieveTemplate16 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate16
        //instance.retrieveTemplate16(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update17', function() {
      it('should call update17 successfully', function(done) {
        //uncomment below and update the code to test update17
        //instance.update17(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
