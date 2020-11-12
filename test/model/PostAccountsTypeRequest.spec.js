

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
    instance = new ApacheFineract.PostAccountsTypeRequest();
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

  describe('PostAccountsTypeRequest', function() {
    it('should create an instance of PostAccountsTypeRequest', function() {
      // uncomment below and update the code to test PostAccountsTypeRequest
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be.a(ApacheFineract.PostAccountsTypeRequest);
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestedShares (base name: "requestedShares")', function() {
      // uncomment below and update the code to test the property requestedShares
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property submittedDate (base name: "submittedDate")', function() {
      // uncomment below and update the code to test the property submittedDate
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriod (base name: "minimumActivePeriod")', function() {
      // uncomment below and update the code to test the property minimumActivePeriod
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriodFrequencyType (base name: "minimumActivePeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property minimumActivePeriodFrequencyType
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequency (base name: "lockinPeriodFrequency")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequency
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequencyType (base name: "lockinPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequencyType
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationDate (base name: "applicationDate")', function() {
      // uncomment below and update the code to test the property applicationDate
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property allowDividendCalculationForInactiveClients (base name: "allowDividendCalculationForInactiveClients")', function() {
      // uncomment below and update the code to test the property allowDividendCalculationForInactiveClients
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property charges (base name: "charges")', function() {
      // uncomment below and update the code to test the property charges
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccountId (base name: "savingsAccountId")', function() {
      // uncomment below and update the code to test the property savingsAccountId
      //var instane = new ApacheFineract.PostAccountsTypeRequest();
      //expect(instance).to.be();
    });

  });

}));
