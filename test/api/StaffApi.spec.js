

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
    instance = new ApacheFineract.StaffApi();
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

  describe('StaffApi', function() {
    describe('createStaff', function() {
      it('should call createStaff successfully', function(done) {
        //uncomment below and update the code to test createStaff
        //instance.createStaff(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStaffTemplate', function() {
      it('should call getStaffTemplate successfully', function(done) {
        //uncomment below and update the code to test getStaffTemplate
        //instance.getStaffTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postStaffTemplate', function() {
      it('should call postStaffTemplate successfully', function(done) {
        //uncomment below and update the code to test postStaffTemplate
        //instance.postStaffTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retreiveStaff', function() {
      it('should call retreiveStaff successfully', function(done) {
        //uncomment below and update the code to test retreiveStaff
        //instance.retreiveStaff(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveStaff', function() {
      it('should call retrieveStaff successfully', function(done) {
        //uncomment below and update the code to test retrieveStaff
        //instance.retrieveStaff(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStaff', function() {
      it('should call updateStaff successfully', function(done) {
        //uncomment below and update the code to test updateStaff
        //instance.updateStaff(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
