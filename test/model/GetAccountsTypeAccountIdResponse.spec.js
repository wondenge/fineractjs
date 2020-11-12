

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
    instance = new ApacheFineract.GetAccountsTypeAccountIdResponse();
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

  describe('GetAccountsTypeAccountIdResponse', function() {
    it('should create an instance of GetAccountsTypeAccountIdResponse', function() {
      // uncomment below and update the code to test GetAccountsTypeAccountIdResponse
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsTypeAccountIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccountNumber (base name: "savingsAccountNumber")', function() {
      // uncomment below and update the code to test the property savingsAccountNumber
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property purchasedShares (base name: "purchasedShares")', function() {
      // uncomment below and update the code to test the property purchasedShares
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccountId (base name: "savingsAccountId")', function() {
      // uncomment below and update the code to test the property savingsAccountId
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currentMarketPrice (base name: "currentMarketPrice")', function() {
      // uncomment below and update the code to test the property currentMarketPrice
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriod (base name: "lockinPeriod")', function() {
      // uncomment below and update the code to test the property lockinPeriod
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockPeriodTypeEnum (base name: "lockPeriodTypeEnum")', function() {
      // uncomment below and update the code to test the property lockPeriodTypeEnum
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriod (base name: "minimumActivePeriod")', function() {
      // uncomment below and update the code to test the property minimumActivePeriod
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriodTypeEnum (base name: "minimumActivePeriodTypeEnum")', function() {
      // uncomment below and update the code to test the property minimumActivePeriodTypeEnum
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowDividendCalculationForInactiveClients (base name: "allowDividendCalculationForInactiveClients")', function() {
      // uncomment below and update the code to test the property allowDividendCalculationForInactiveClients
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property charges (base name: "charges")', function() {
      // uncomment below and update the code to test the property charges
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property dividends (base name: "dividends")', function() {
      // uncomment below and update the code to test the property dividends
      //var instane = new ApacheFineract.GetAccountsTypeAccountIdResponse();
      //expect(instance).to.be();
    });

  });

}));
