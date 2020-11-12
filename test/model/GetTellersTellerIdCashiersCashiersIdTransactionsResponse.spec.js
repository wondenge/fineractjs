

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
    instance = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
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

  describe('GetTellersTellerIdCashiersCashiersIdTransactionsResponse', function() {
    it('should create an instance of GetTellersTellerIdCashiersCashiersIdTransactionsResponse', function() {
      // uncomment below and update the code to test GetTellersTellerIdCashiersCashiersIdTransactionsResponse
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierId (base name: "cashierId")', function() {
      // uncomment below and update the code to test the property cashierId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property txnType (base name: "txnType")', function() {
      // uncomment below and update the code to test the property txnType
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property txnAmount (base name: "txnAmount")', function() {
      // uncomment below and update the code to test the property txnAmount
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property txnDate (base name: "txnDate")', function() {
      // uncomment below and update the code to test the property txnDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityId (base name: "entityId")', function() {
      // uncomment below and update the code to test the property entityId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property entityType (base name: "entityType")', function() {
      // uncomment below and update the code to test the property entityType
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property txnNote (base name: "txnNote")', function() {
      // uncomment below and update the code to test the property txnNote
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerId (base name: "tellerId")', function() {
      // uncomment below and update the code to test the property tellerId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierName (base name: "cashierName")', function() {
      // uncomment below and update the code to test the property cashierName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsResponse();
      //expect(instance).to.be();
    });

  });

}));
