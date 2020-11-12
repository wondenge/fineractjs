

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
    instance = new ApacheFineract.EntityDataTableApi();
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

  describe('EntityDataTableApi', function() {
    describe('createEntityDatatableCheck', function() {
      it('should call createEntityDatatableCheck successfully', function(done) {
        //uncomment below and update the code to test createEntityDatatableCheck
        //instance.createEntityDatatableCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDatatable1', function() {
      it('should call deleteDatatable1 successfully', function(done) {
        //uncomment below and update the code to test deleteDatatable1
        //instance.deleteDatatable1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplate', function() {
      it('should call getTemplate successfully', function(done) {
        //uncomment below and update the code to test getTemplate
        //instance.getTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll6', function() {
      it('should call retrieveAll6 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll6
        //instance.retrieveAll6(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
