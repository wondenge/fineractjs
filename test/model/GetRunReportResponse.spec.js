

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
    instance = new ApacheFineract.GetRunReportResponse();
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

  describe('GetRunReportResponse', function() {
    it('should create an instance of GetRunReportResponse', function() {
      // uncomment below and update the code to test GetRunReportResponse
      //var instane = new ApacheFineract.GetRunReportResponse();
      //expect(instance).to.be.a(ApacheFineract.GetRunReportResponse);
    });

    it('should have the property columnHeaders (base name: "columnHeaders")', function() {
      // uncomment below and update the code to test the property columnHeaders
      //var instane = new ApacheFineract.GetRunReportResponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ApacheFineract.GetRunReportResponse();
      //expect(instance).to.be();
    });

  });

}));
