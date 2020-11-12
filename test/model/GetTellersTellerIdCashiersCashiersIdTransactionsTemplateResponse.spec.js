

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
    instance = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
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

  describe('GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse', function() {
    it('should create an instance of GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse', function() {
      // uncomment below and update the code to test GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse);
    });

    it('should have the property cashierId (base name: "cashierId")', function() {
      // uncomment below and update the code to test the property cashierId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property officeName (base name: "officeName")', function() {
      // uncomment below and update the code to test the property officeName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerId (base name: "tellerId")', function() {
      // uncomment below and update the code to test the property tellerId
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property tellerName (base name: "tellerName")', function() {
      // uncomment below and update the code to test the property tellerName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierName (base name: "cashierName")', function() {
      // uncomment below and update the code to test the property cashierName
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property cashierData (base name: "cashierData")', function() {
      // uncomment below and update the code to test the property cashierData
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOptions (base name: "currencyOptions")', function() {
      // uncomment below and update the code to test the property currencyOptions
      //var instane = new ApacheFineract.GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
