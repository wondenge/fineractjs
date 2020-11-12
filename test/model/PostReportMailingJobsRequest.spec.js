

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
    instance = new ApacheFineract.PostReportMailingJobsRequest();
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

  describe('PostReportMailingJobsRequest', function() {
    it('should create an instance of PostReportMailingJobsRequest', function() {
      // uncomment below and update the code to test PostReportMailingJobsRequest
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostReportMailingJobsRequest);
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "startDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property stretchyReportId (base name: "stretchyReportId")', function() {
      // uncomment below and update the code to test the property stretchyReportId
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property emailRecipients (base name: "emailRecipients")', function() {
      // uncomment below and update the code to test the property emailRecipients
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property emailSubject (base name: "emailSubject")', function() {
      // uncomment below and update the code to test the property emailSubject
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property emailMessage (base name: "emailMessage")', function() {
      // uncomment below and update the code to test the property emailMessage
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurrence (base name: "recurrence")', function() {
      // uncomment below and update the code to test the property recurrence
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

    it('should have the property stretchyReportParamMap (base name: "stretchyReportParamMap")', function() {
      // uncomment below and update the code to test the property stretchyReportParamMap
      //var instane = new ApacheFineract.PostReportMailingJobsRequest();
      //expect(instance).to.be();
    });

  });

}));
