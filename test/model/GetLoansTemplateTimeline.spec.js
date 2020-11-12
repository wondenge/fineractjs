

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
    instance = new ApacheFineract.GetLoansTemplateTimeline();
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

  describe('GetLoansTemplateTimeline', function() {
    it('should create an instance of GetLoansTemplateTimeline', function() {
      // uncomment below and update the code to test GetLoansTemplateTimeline
      //var instane = new ApacheFineract.GetLoansTemplateTimeline();
      //expect(instance).to.be.a(ApacheFineract.GetLoansTemplateTimeline);
    });

    it('should have the property expectedDisbursementDate (base name: "expectedDisbursementDate")', function() {
      // uncomment below and update the code to test the property expectedDisbursementDate
      //var instane = new ApacheFineract.GetLoansTemplateTimeline();
      //expect(instance).to.be();
    });

  });

}));
