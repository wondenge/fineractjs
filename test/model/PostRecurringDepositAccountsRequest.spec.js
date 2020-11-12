

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
    instance = new ApacheFineract.PostRecurringDepositAccountsRequest();
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

  describe('PostRecurringDepositAccountsRequest', function() {
    it('should create an instance of PostRecurringDepositAccountsRequest', function() {
      // uncomment below and update the code to test PostRecurringDepositAccountsRequest
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be.a(ApacheFineract.PostRecurringDepositAccountsRequest);
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property submittedOnDate (base name: "submittedOnDate")', function() {
      // uncomment below and update the code to test the property submittedOnDate
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositPeriod (base name: "depositPeriod")', function() {
      // uncomment below and update the code to test the property depositPeriod
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositPeriodFrequencyId (base name: "depositPeriodFrequencyId")', function() {
      // uncomment below and update the code to test the property depositPeriodFrequencyId
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property isCalendarInherited (base name: "isCalendarInherited")', function() {
      // uncomment below and update the code to test the property isCalendarInherited
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurringFrequency (base name: "recurringFrequency")', function() {
      // uncomment below and update the code to test the property recurringFrequency
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property recurringFrequencyType (base name: "recurringFrequencyType")', function() {
      // uncomment below and update the code to test the property recurringFrequencyType
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

    it('should have the property mandatoryRecommendedDepositAmount (base name: "mandatoryRecommendedDepositAmount")', function() {
      // uncomment below and update the code to test the property mandatoryRecommendedDepositAmount
      //var instane = new ApacheFineract.PostRecurringDepositAccountsRequest();
      //expect(instance).to.be();
    });

  });

}));
