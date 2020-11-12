

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
    instance = new ApacheFineract.HooksApi();
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

  describe('HooksApi', function() {
    describe('createHook', function() {
      it('should call createHook successfully', function(done) {
        //uncomment below and update the code to test createHook
        //instance.createHook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteHook', function() {
      it('should call deleteHook successfully', function(done) {
        //uncomment below and update the code to test deleteHook
        //instance.deleteHook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHook', function() {
      it('should call retrieveHook successfully', function(done) {
        //uncomment below and update the code to test retrieveHook
        //instance.retrieveHook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveHooks', function() {
      it('should call retrieveHooks successfully', function(done) {
        //uncomment below and update the code to test retrieveHooks
        //instance.retrieveHooks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template3', function() {
      it('should call template3 successfully', function(done) {
        //uncomment below and update the code to test template3
        //instance.template3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateHook', function() {
      it('should call updateHook successfully', function(done) {
        //uncomment below and update the code to test updateHook
        //instance.updateHook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
