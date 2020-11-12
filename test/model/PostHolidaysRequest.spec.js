

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
    instance = new ApacheFineract.PostHolidaysRequest();
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

  describe('PostHolidaysRequest', function() {
    it('should create an instance of PostHolidaysRequest', function() {
      // uncomment below and update the code to test PostHolidaysRequest
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be.a(ApacheFineract.PostHolidaysRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "toDate")', function() {
      // uncomment below and update the code to test the property toDate
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentsRescheduledTo (base name: "repaymentsRescheduledTo")', function() {
      // uncomment below and update the code to test the property repaymentsRescheduledTo
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property offices (base name: "offices")', function() {
      // uncomment below and update the code to test the property offices
      //var instane = new ApacheFineract.PostHolidaysRequest();
      //expect(instance).to.be();
    });

  });

}));
