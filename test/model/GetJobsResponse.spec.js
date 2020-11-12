

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
    instance = new ApacheFineract.GetJobsResponse();
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

  describe('GetJobsResponse', function() {
    it('should create an instance of GetJobsResponse', function() {
      // uncomment below and update the code to test GetJobsResponse
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetJobsResponse);
    });

    it('should have the property jobId (base name: "jobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextRunTime (base name: "nextRunTime")', function() {
      // uncomment below and update the code to test the property nextRunTime
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property initializingError (base name: "initializingError")', function() {
      // uncomment below and update the code to test the property initializingError
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cronExpression (base name: "cronExpression")', function() {
      // uncomment below and update the code to test the property cronExpression
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property currentlyRunning (base name: "currentlyRunning")', function() {
      // uncomment below and update the code to test the property currentlyRunning
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property lastRunHistory (base name: "lastRunHistory")', function() {
      // uncomment below and update the code to test the property lastRunHistory
      //var instane = new ApacheFineract.GetJobsResponse();
      //expect(instance).to.be();
    });

  });

}));
