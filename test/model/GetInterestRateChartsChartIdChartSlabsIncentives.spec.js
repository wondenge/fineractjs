

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
    instance = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
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

  describe('GetInterestRateChartsChartIdChartSlabsIncentives', function() {
    it('should create an instance of GetInterestRateChartsChartIdChartSlabsIncentives', function() {
      // uncomment below and update the code to test GetInterestRateChartsChartIdChartSlabsIncentives
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be.a(ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property attributeName (base name: "attributeName")', function() {
      // uncomment below and update the code to test the property attributeName
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property conditionType (base name: "conditionType")', function() {
      // uncomment below and update the code to test the property conditionType
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property attributeValue (base name: "attributeValue")', function() {
      // uncomment below and update the code to test the property attributeValue
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property attributeValueDesc (base name: "attributeValueDesc")', function() {
      // uncomment below and update the code to test the property attributeValueDesc
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property incentiveType (base name: "incentiveType")', function() {
      // uncomment below and update the code to test the property incentiveType
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetInterestRateChartsChartIdChartSlabsIncentives();
      //expect(instance).to.be();
    });

  });

}));
