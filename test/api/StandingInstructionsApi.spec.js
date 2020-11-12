

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
    instance = new ApacheFineract.StandingInstructionsApi();
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

  describe('StandingInstructionsApi', function() {
    describe('create4', function() {
      it('should call create4 successfully', function(done) {
        //uncomment below and update the code to test create4
        //instance.create4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll18', function() {
      it('should call retrieveAll18 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll18
        //instance.retrieveAll18(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOne9', function() {
      it('should call retrieveOne9 successfully', function(done) {
        //uncomment below and update the code to test retrieveOne9
        //instance.retrieveOne9(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template6', function() {
      it('should call template6 successfully', function(done) {
        //uncomment below and update the code to test template6
        //instance.template6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update8', function() {
      it('should call update8 successfully', function(done) {
        //uncomment below and update the code to test update8
        //instance.update8(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
