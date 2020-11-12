

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
    instance = new ApacheFineract.GetReportMailingJobsResponse();
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

  describe('GetReportMailingJobsResponse', function() {
    it('should create an instance of GetReportMailingJobsResponse', function() {
      // uncomment below and update the code to test GetReportMailingJobsResponse
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetReportMailingJobsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "startDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property recurrence (base name: "recurrence")', function() {
      // uncomment below and update the code to test the property recurrence
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailRecipients (base name: "emailRecipients")', function() {
      // uncomment below and update the code to test the property emailRecipients
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailSubject (base name: "emailSubject")', function() {
      // uncomment below and update the code to test the property emailSubject
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailMessage (base name: "emailMessage")', function() {
      // uncomment below and update the code to test the property emailMessage
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property emailAttachmentFileFormat (base name: "emailAttachmentFileFormat")', function() {
      // uncomment below and update the code to test the property emailAttachmentFileFormat
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property stretchyReport (base name: "stretchyReport")', function() {
      // uncomment below and update the code to test the property stretchyReport
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property stretchyReportParamMap (base name: "stretchyReportParamMap")', function() {
      // uncomment below and update the code to test the property stretchyReportParamMap
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextRunDateTime (base name: "nextRunDateTime")', function() {
      // uncomment below and update the code to test the property nextRunDateTime
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property numberOfRuns (base name: "numberOfRuns")', function() {
      // uncomment below and update the code to test the property numberOfRuns
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

    it('should have the property runAsUserId (base name: "runAsUserId")', function() {
      // uncomment below and update the code to test the property runAsUserId
      //var instane = new ApacheFineract.GetReportMailingJobsResponse();
      //expect(instance).to.be();
    });

  });

}));
