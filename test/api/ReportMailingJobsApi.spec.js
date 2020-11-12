

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
    instance = new ApacheFineract.ReportMailingJobsApi();
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

  describe('ReportMailingJobsApi', function() {
    describe('createReportMailingJob', function() {
      it('should call createReportMailingJob successfully', function(done) {
        //uncomment below and update the code to test createReportMailingJob
        //instance.createReportMailingJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteReportMailingJob', function() {
      it('should call deleteReportMailingJob successfully', function(done) {
        //uncomment below and update the code to test deleteReportMailingJob
        //instance.deleteReportMailingJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAllReportMailingJobs', function() {
      it('should call retrieveAllReportMailingJobs successfully', function(done) {
        //uncomment below and update the code to test retrieveAllReportMailingJobs
        //instance.retrieveAllReportMailingJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveReportMailingJob', function() {
      it('should call retrieveReportMailingJob successfully', function(done) {
        //uncomment below and update the code to test retrieveReportMailingJob
        //instance.retrieveReportMailingJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveReportMailingJobTemplate', function() {
      it('should call retrieveReportMailingJobTemplate successfully', function(done) {
        //uncomment below and update the code to test retrieveReportMailingJobTemplate
        //instance.retrieveReportMailingJobTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateReportMailingJob', function() {
      it('should call updateReportMailingJob successfully', function(done) {
        //uncomment below and update the code to test updateReportMailingJob
        //instance.updateReportMailingJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
