

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
    instance = new ApacheFineract.PutReportResponseChanges();
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

  describe('PutReportResponseChanges', function() {
    it('should create an instance of PutReportResponseChanges', function() {
      // uncomment below and update the code to test PutReportResponseChanges
      //var instane = new ApacheFineract.PutReportResponseChanges();
      //expect(instance).to.be.a(ApacheFineract.PutReportResponseChanges);
    });

    it('should have the property reportName (base name: "reportName")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new ApacheFineract.PutReportResponseChanges();
      //expect(instance).to.be();
    });

    it('should have the property reportParameters (base name: "reportParameters")', function() {
      // uncomment below and update the code to test the property reportParameters
      //var instane = new ApacheFineract.PutReportResponseChanges();
      //expect(instance).to.be();
    });

  });

}));
