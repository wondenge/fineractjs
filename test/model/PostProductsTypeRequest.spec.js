

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
    instance = new ApacheFineract.PostProductsTypeRequest();
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

  describe('PostProductsTypeRequest', function() {
    it('should create an instance of PostProductsTypeRequest', function() {
      // uncomment below and update the code to test PostProductsTypeRequest
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be.a(ApacheFineract.PostProductsTypeRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property digitsAfterDecimal (base name: "digitsAfterDecimal")', function() {
      // uncomment below and update the code to test the property digitsAfterDecimal
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property inMultiplesOf (base name: "inMultiplesOf")', function() {
      // uncomment below and update the code to test the property inMultiplesOf
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalShares (base name: "totalShares")', function() {
      // uncomment below and update the code to test the property totalShares
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property sharesIssued (base name: "sharesIssued")', function() {
      // uncomment below and update the code to test the property sharesIssued
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimumShares (base name: "minimumShares")', function() {
      // uncomment below and update the code to test the property minimumShares
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property nominalShares (base name: "nominalShares")', function() {
      // uncomment below and update the code to test the property nominalShares
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property maximumShares (base name: "maximumShares")', function() {
      // uncomment below and update the code to test the property maximumShares
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriodForDividends (base name: "minimumActivePeriodForDividends")', function() {
      // uncomment below and update the code to test the property minimumActivePeriodForDividends
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property minimumactiveperiodFrequencyType (base name: "minimumactiveperiodFrequencyType")', function() {
      // uncomment below and update the code to test the property minimumactiveperiodFrequencyType
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequency (base name: "lockinPeriodFrequency")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequency
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequencyType (base name: "lockinPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequencyType
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property allowDividendCalculationForInactiveClients (base name: "allowDividendCalculationForInactiveClients")', function() {
      // uncomment below and update the code to test the property allowDividendCalculationForInactiveClients
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property marketPricePeriods (base name: "marketPricePeriods")', function() {
      // uncomment below and update the code to test the property marketPricePeriods
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargesSelected (base name: "chargesSelected")', function() {
      // uncomment below and update the code to test the property chargesSelected
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.PostProductsTypeRequest();
      //expect(instance).to.be();
    });

  });

}));
