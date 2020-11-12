

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
    instance = new ApacheFineract.SavingsProductApi();
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

  describe('SavingsProductApi', function() {
    describe('create12', function() {
      it('should call create12 successfully', function(done) {
        //uncomment below and update the code to test create12
        //instance.create12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('delete19', function() {
      it('should call delete19 successfully', function(done) {
        //uncomment below and update the code to test delete19
        //instance.delete19(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll33', function() {
      it('should call retrieveAll33 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll33
        //instance.retrieveAll33(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne24', function() {
      it('should call retrieveOne24 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne24
        //instance.retrieveOne24(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate19', function() {
      it('should call retrieveTemplate19 successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate19
        //instance.retrieveTemplate19(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update19', function() {
      it('should call update19 successfully', function(done) {
        //uncomment below and update the code to test update19
        //instance.update19(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
