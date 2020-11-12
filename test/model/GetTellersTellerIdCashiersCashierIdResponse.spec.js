

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
    instance = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
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

  describe('GetTellersTellerIdCashiersCashierIdResponse', function() {
    it('should create an instance of GetTellersTellerIdCashiersCashierIdResponse', function() {
      // uncomment below and update the code to test GetTellersTellerIdCashiersCashierIdResponse
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerId (base name: "tellerId")', function() {
      // uncomment below and update the code to test the property tellerId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffId (base name: "staffId")', function() {
      // uncomment below and update the code to test the property staffId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property isFullDay (base name: "isFullDay")', function() {
      // uncomment below and update the code to test the property isFullDay
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerName (base name: "tellerName")', function() {
      // uncomment below and update the code to test the property tellerName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property staffName (base name: "staffName")', function() {
      // uncomment below and update the code to test the property staffName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashierIdResponse();
      //expect(instance).to.be();
    });

  });

}));
