

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
    instance = new ApacheFineract.ReportsApi();
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

  describe('ReportsApi', function() {
    describe('createReport', function() {
      it('should call createReport successfully', function(done) {
        //uncomment below and update the code to test createReport
        //instance.createReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReport', function() {
      it('should call deleteReport successfully', function(done) {
        //uncomment below and update the code to test deleteReport
        //instance.deleteReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveOfficeTemplate', function() {
      it('should call retrieveOfficeTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveOfficeTemplate
        //instance.retrieveOfficeTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveReport', function() {
      it('should call retrieveReport successfully', function(done) {
        //uncomment below and update the code to test retrieveReport
        //instance.retrieveReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveReportList', function() {
      it('should call retrieveReportList successfully', function(done) {
        //uncomment below and update the code to test retrieveReportList
        //instance.retrieveReportList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReport', function() {
      it('should call updateReport successfully', function(done) {
        //uncomment below and update the code to test updateReport
        //instance.updateReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
