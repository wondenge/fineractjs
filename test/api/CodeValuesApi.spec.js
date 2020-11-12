

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
    instance = new ApacheFineract.CodeValuesApi();
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

  describe('CodeValuesApi', function() {
    describe('createCodeValue', function() {
      it('should call createCodeValue successfully', function(done) {
        //uncomment below and update the code to test createCodeValue
        //instance.createCodeValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCodeValue', function() {
      it('should call deleteCodeValue successfully', function(done) {
        //uncomment below and update the code to test deleteCodeValue
        //instance.deleteCodeValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllCodeValues', function() {
      it('should call retrieveAllCodeValues successfully', function(done) {
        //uncomment below and update the code to test retrieveAllCodeValues
        //instance.retrieveAllCodeValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveCodeValue', function() {
      it('should call retrieveCodeValue successfully', function(done) {
        //uncomment below and update the code to test retrieveCodeValue
        //instance.retrieveCodeValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCodeValue', function() {
      it('should call updateCodeValue successfully', function(done) {
        //uncomment below and update the code to test updateCodeValue
        //instance.updateCodeValue(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
