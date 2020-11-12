

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
    instance = new ApacheFineract.SmsCampaignData();
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

  describe('SmsCampaignData', function() {
    it('should create an instance of SmsCampaignData', function() {
      // uncomment below and update the code to test SmsCampaignData
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be.a(ApacheFineract.SmsCampaignData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property campaignName (base name: "campaignName")', function() {
      // uncomment below and update the code to test the property campaignName
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property campaignType (base name: "campaignType")', function() {
      // uncomment below and update the code to test the property campaignType
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property runReportId (base name: "runReportId")', function() {
      // uncomment below and update the code to test the property runReportId
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property paramValue (base name: "paramValue")', function() {
      // uncomment below and update the code to test the property paramValue
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property campaignStatus (base name: "campaignStatus")', function() {
      // uncomment below and update the code to test the property campaignStatus
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property nextTriggerDate (base name: "nextTriggerDate")', function() {
      // uncomment below and update the code to test the property nextTriggerDate
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property lastTriggerDate (base name: "lastTriggerDate")', function() {
      // uncomment below and update the code to test the property lastTriggerDate
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property recurrenceStartDate (base name: "recurrenceStartDate")', function() {
      // uncomment below and update the code to test the property recurrenceStartDate
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property recurrence (base name: "recurrence")', function() {
      // uncomment below and update the code to test the property recurrence
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new ApacheFineract.SmsCampaignData();
      //expect(instance).to.be();
    });

  });

}));
