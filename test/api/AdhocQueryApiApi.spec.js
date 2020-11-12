

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
    instance = new ApacheFineract.AdhocQueryApiApi();
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

  describe('AdhocQueryApiApi', function() {
    describe('createAdHocQuery', function() {
      it('should call createAdHocQuery successfully', function(done) {
        //uncomment below and update the code to test createAdHocQuery
        //instance.createAdHocQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdHocQuery', function() {
      it('should call deleteAdHocQuery successfully', function(done) {
        //uncomment below and update the code to test deleteAdHocQuery
        //instance.deleteAdHocQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAdHocQuery', function() {
      it('should call retrieveAdHocQuery successfully', function(done) {
        //uncomment below and update the code to test retrieveAdHocQuery
        //instance.retrieveAdHocQuery(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll2', function() {
      it('should call retrieveAll2 successfully', function(done) {
        //uncomment below and update the code to test retrieveAll2
        //instance.retrieveAll2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('template', function() {
      it('should call template successfully', function(done) {
        //uncomment below and update the code to test template
        //instance.template(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update', function() {
      it('should call update successfully', function(done) {
        //uncomment below and update the code to test update
        //instance.update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
