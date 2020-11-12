

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
    instance = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
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

  describe('GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse', function() {
    it('should create an instance of GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse', function() {
      // uncomment below and update the code to test GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse);
    });

    it('should have the property sumCashAllocation (base name: "sumCashAllocation")', function() {
      // uncomment below and update the code to test the property sumCashAllocation
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property sumInwardCash (base name: "sumInwardCash")', function() {
      // uncomment below and update the code to test the property sumInwardCash
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property sumOutwardCash (base name: "sumOutwardCash")', function() {
      // uncomment below and update the code to test the property sumOutwardCash
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property sumCashSettlement (base name: "sumCashSettlement")', function() {
      // uncomment below and update the code to test the property sumCashSettlement
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property netCash (base name: "netCash")', function() {
      // uncomment below and update the code to test the property netCash
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerId (base name: "tellerId")', function() {
      // uncomment below and update the code to test the property tellerId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerName (base name: "tellerName")', function() {
      // uncomment below and update the code to test the property tellerName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierId (base name: "cashierId")', function() {
      // uncomment below and update the code to test the property cashierId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierName (base name: "cashierName")', function() {
      // uncomment below and update the code to test the property cashierName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierTransactions (base name: "cashierTransactions")', function() {
      // uncomment below and update the code to test the property cashierTransactions
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();
      //expect(instance).to.be();
    });

  });

}));
