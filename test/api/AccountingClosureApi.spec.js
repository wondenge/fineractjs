

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
    instance = new ApacheFineract.AccountingClosureApi();
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

  describe('AccountingClosureApi', function() {
    describe('createGLClosure', function() {
      it('should call createGLClosure successfully', function(done) {
        //uncomment below and update the code to test createGLClosure
        //instance.createGLClosure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGLClosure', function() {
      it('should call deleteGLClosure successfully', function(done) {
        //uncomment below and update the code to test deleteGLClosure
        //instance.deleteGLClosure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveClosure', function() {
      it('should call retreiveClosure successfully', function(done) {
        //uncomment below and update the code to test retreiveClosure
        //instance.retreiveClosure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllClosures', function() {
      it('should call retrieveAllClosures successfully', function(done) {
        //uncomment below and update the code to test retrieveAllClosures
        //instance.retrieveAllClosures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGLClosure', function() {
      it('should call updateGLClosure successfully', function(done) {
        //uncomment below and update the code to test updateGLClosure
        //instance.updateGLClosure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
