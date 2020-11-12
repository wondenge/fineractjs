

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
    instance = new ApacheFineract.GetReportsResponse();
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

  describe('GetReportsResponse', function() {
    it('should create an instance of GetReportsResponse', function() {
      // uncomment below and update the code to test GetReportsResponse
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetReportsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "reportType")', function() {
      // uncomment below and update the code to test the property reportType
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportSubType (base name: "reportSubType")', function() {
      // uncomment below and update the code to test the property reportSubType
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportCategory (base name: "reportCategory")', function() {
      // uncomment below and update the code to test the property reportCategory
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportSql (base name: "reportSql")', function() {
      // uncomment below and update the code to test the property reportSql
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property coreReport (base name: "coreReport")', function() {
      // uncomment below and update the code to test the property coreReport
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property useReport (base name: "useReport")', function() {
      // uncomment below and update the code to test the property useReport
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

    it('should have the property reportParameters (base name: "reportParameters")', function() {
      // uncomment below and update the code to test the property reportParameters
      //var instane = new ApacheFineract.GetReportsResponse();
      //expect(instance).to.be();
    });

  });

}));
