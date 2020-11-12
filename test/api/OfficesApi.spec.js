

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
    instance = new ApacheFineract.OfficesApi();
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

  describe('OfficesApi', function() {
    describe('createOffice', function() {
      it('should call createOffice successfully', function(done) {
        //uncomment below and update the code to test createOffice
        //instance.createOffice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOfficeTemplate', function() {
      it('should call getOfficeTemplate successfully', function(done) {
        //uncomment below and update the code to test getOfficeTemplate
        //instance.getOfficeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postOfficeTemplate', function() {
      it('should call postOfficeTemplate successfully', function(done) {
        //uncomment below and update the code to test postOfficeTemplate
        //instance.postOfficeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveOffice', function() {
      it('should call retreiveOffice successfully', function(done) {
        //uncomment below and update the code to test retreiveOffice
        //instance.retreiveOffice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOfficeTemplate1', function() {
      it('should call retrieveOfficeTemplate1 successfully', function(done) {
        //uncomment below and update the code to test retrieveOfficeTemplate1
        //instance.retrieveOfficeTemplate1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOffices', function() {
      it('should call retrieveOffices successfully', function(done) {
        //uncomment below and update the code to test retrieveOffices
        //instance.retrieveOffices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOffice', function() {
      it('should call updateOffice successfully', function(done) {
        //uncomment below and update the code to test updateOffice
        //instance.updateOffice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
