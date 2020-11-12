

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
    instance = new ApacheFineract.GetReportMailingJobsTemplate();
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

  describe('GetReportMailingJobsTemplate', function() {
    it('should create an instance of GetReportMailingJobsTemplate', function() {
      // uncomment below and update the code to test GetReportMailingJobsTemplate
      //var instane = new ApacheFineract.GetReportMailingJobsTemplate();
      //expect(instance).to.be.a(ApacheFineract.GetReportMailingJobsTemplate);
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ApacheFineract.GetReportMailingJobsTemplate();
      //expect(instance).to.be();
    });

    it('should have the property emailAttachmentFileFormatOptions (base name: "emailAttachmentFileFormatOptions")', function() {
      // uncomment below and update the code to test the property emailAttachmentFileFormatOptions
      //var instane = new ApacheFineract.GetReportMailingJobsTemplate();
      //expect(instance).to.be();
    });

    it('should have the property stretchyReportParamDateOptions (base name: "stretchyReportParamDateOptions")', function() {
      // uncomment below and update the code to test the property stretchyReportParamDateOptions
      //var instane = new ApacheFineract.GetReportMailingJobsTemplate();
      //expect(instance).to.be();
    });

  });

}));
