

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
    instance = new ApacheFineract.GetProductsTypeProductIdResponse();
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

  describe('GetProductsTypeProductIdResponse', function() {
    it('should create an instance of GetProductsTypeProductIdResponse', function() {
      // uncomment below and update the code to test GetProductsTypeProductIdResponse
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetProductsTypeProductIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalShares (base name: "totalShares")', function() {
      // uncomment below and update the code to test the property totalShares
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalSharesIssued (base name: "totalSharesIssued")', function() {
      // uncomment below and update the code to test the property totalSharesIssued
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property shareCapital (base name: "shareCapital")', function() {
      // uncomment below and update the code to test the property shareCapital
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumShares (base name: "minimumShares")', function() {
      // uncomment below and update the code to test the property minimumShares
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property nominalShares (base name: "nominalShares")', function() {
      // uncomment below and update the code to test the property nominalShares
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property maximumShares (base name: "maximumShares")', function() {
      // uncomment below and update the code to test the property maximumShares
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property marketPrice (base name: "marketPrice")', function() {
      // uncomment below and update the code to test the property marketPrice
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property charges (base name: "charges")', function() {
      // uncomment below and update the code to test the property charges
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowDividendCalculationForInactiveClients (base name: "allowDividendCalculationForInactiveClients")', function() {
      // uncomment below and update the code to test the property allowDividendCalculationForInactiveClients
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriod (base name: "lockinPeriod")', function() {
      // uncomment below and update the code to test the property lockinPeriod
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockPeriodTypeEnum (base name: "lockPeriodTypeEnum")', function() {
      // uncomment below and update the code to test the property lockPeriodTypeEnum
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriod (base name: "minimumActivePeriod")', function() {
      // uncomment below and update the code to test the property minimumActivePeriod
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriodForDividendsTypeEnum (base name: "minimumActivePeriodForDividendsTypeEnum")', function() {
      // uncomment below and update the code to test the property minimumActivePeriodForDividendsTypeEnum
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappings (base name: "accountingMappings")', function() {
      // uncomment below and update the code to test the property accountingMappings
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOptions (base name: "currencyOptions")', function() {
      // uncomment below and update the code to test the property currencyOptions
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeOptions (base name: "chargeOptions")', function() {
      // uncomment below and update the code to test the property chargeOptions
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minimumActivePeriodFrequencyTypeOptions (base name: "minimumActivePeriodFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property minimumActivePeriodFrequencyTypeOptions
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequencyTypeOptions (base name: "lockinPeriodFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequencyTypeOptions
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappingOptions (base name: "accountingMappingOptions")', function() {
      // uncomment below and update the code to test the property accountingMappingOptions
      //var instane = new ApacheFineract.GetProductsTypeProductIdResponse();
      //expect(instance).to.be();
    });

  });

}));
