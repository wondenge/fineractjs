

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
    instance = new ApacheFineract.MappingFinancialActivitiesToAccountsApi();
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

  describe('MappingFinancialActivitiesToAccountsApi', function() {
    describe('createGLAccount', function() {
      it('should call createGLAccount successfully', function(done) {
        //uncomment below and update the code to test createGLAccount
        //instance.createGLAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGLAccount', function() {
      it('should call deleteGLAccount successfully', function(done) {
        //uncomment below and update the code to test deleteGLAccount
        //instance.deleteGLAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreive', function() {
      it('should call retreive successfully', function(done) {
        //uncomment below and update the code to test retreive
        //instance.retreive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAll', function() {
      it('should call retrieveAll successfully', function(done) {
        //uncomment below and update the code to test retrieveAll
        //instance.retrieveAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveTemplate', function() {
      it('should call retrieveTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveTemplate
        //instance.retrieveTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGLAccount', function() {
      it('should call updateGLAccount successfully', function(done) {
        //uncomment below and update the code to test updateGLAccount
        //instance.updateGLAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
