

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
    instance = new ApacheFineract.ReportMailingJobRunHistoryData();
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

  describe('ReportMailingJobRunHistoryData', function() {
    it('should create an instance of ReportMailingJobRunHistoryData', function() {
      // uncomment below and update the code to test ReportMailingJobRunHistoryData
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be.a(ApacheFineract.ReportMailingJobRunHistoryData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property reportMailingJobId (base name: "reportMailingJobId")', function() {
      // uncomment below and update the code to test the property reportMailingJobId
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property startDateTime (base name: "startDateTime")', function() {
      // uncomment below and update the code to test the property startDateTime
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property endDateTime (base name: "endDateTime")', function() {
      // uncomment below and update the code to test the property endDateTime
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

    it('should have the property errorLog (base name: "errorLog")', function() {
      // uncomment below and update the code to test the property errorLog
      //var instane = new ApacheFineract.ReportMailingJobRunHistoryData();
      //expect(instance).to.be();
    });

  });

}));
