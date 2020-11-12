

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
    instance = new ApacheFineract.GetHolidaysResponse();
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

  describe('GetHolidaysResponse', function() {
    it('should create an instance of GetHolidaysResponse', function() {
      // uncomment below and update the code to test GetHolidaysResponse
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be.a(ApacheFineract.GetHolidaysResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "toDate")', function() {
      // uncomment below and update the code to test the property toDate
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property repaymentsRescheduledTo (base name: "repaymentsRescheduledTo")', function() {
      // uncomment below and update the code to test the property repaymentsRescheduledTo
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetHolidaysResponse();
      //expect(instance).to.be();
    });

  });

}));
