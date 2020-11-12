

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
    instance = new ApacheFineract.PutWorkingDaysRequest();
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

  describe('PutWorkingDaysRequest', function() {
    it('should create an instance of PutWorkingDaysRequest', function() {
      // uncomment below and update the code to test PutWorkingDaysRequest
      //var instane = new ApacheFineract.PutWorkingDaysRequest();
      //expect(instance).to.be.a(ApacheFineract.PutWorkingDaysRequest);
    });

    it('should have the property recurrence (base name: "recurrence")', function() {
      // uncomment below and update the code to test the property recurrence
      //var instane = new ApacheFineract.PutWorkingDaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutWorkingDaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property repaymentRescheduleType (base name: "repaymentRescheduleType")', function() {
      // uncomment below and update the code to test the property repaymentRescheduleType
      //var instane = new ApacheFineract.PutWorkingDaysRequest();
      //expect(instance).to.be();
    });

    it('should have the property extendTermForDailyRepayments (base name: "extendTermForDailyRepayments")', function() {
      // uncomment below and update the code to test the property extendTermForDailyRepayments
      //var instane = new ApacheFineract.PutWorkingDaysRequest();
      //expect(instance).to.be();
    });

  });

}));
