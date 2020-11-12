

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
    instance = new ApacheFineract.LoanProductProvisioningEntryData();
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

  describe('LoanProductProvisioningEntryData', function() {
    it('should create an instance of LoanProductProvisioningEntryData', function() {
      // uncomment below and update the code to test LoanProductProvisioningEntryData
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be.a(ApacheFineract.LoanProductProvisioningEntryData);
    });

    it('should have the property historyId (base name: "historyId")', function() {
      // uncomment below and update the code to test the property historyId
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property overdueInDays (base name: "overdueInDays")', function() {
      // uncomment below and update the code to test the property overdueInDays
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property percentage (base name: "percentage")', function() {
      // uncomment below and update the code to test the property percentage
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property liablityAccount (base name: "liablityAccount")', function() {
      // uncomment below and update the code to test the property liablityAccount
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property expenseAccount (base name: "expenseAccount")', function() {
      // uncomment below and update the code to test the property expenseAccount
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property criteriaId (base name: "criteriaId")', function() {
      // uncomment below and update the code to test the property criteriaId
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

    it('should have the property outstandingBalance (base name: "outstandingBalance")', function() {
      // uncomment below and update the code to test the property outstandingBalance
      //var instane = new ApacheFineract.LoanProductProvisioningEntryData();
      //expect(instance).to.be();
    });

  });

}));
