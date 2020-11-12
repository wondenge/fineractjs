

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
    instance = new ApacheFineract.GetSavingsProductsTemplateResponse();
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

  describe('GetSavingsProductsTemplateResponse', function() {
    it('should create an instance of GetSavingsProductsTemplateResponse', function() {
      // uncomment below and update the code to test GetSavingsProductsTemplateResponse
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetSavingsProductsTemplateResponse);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRule (base name: "accountingRule")', function() {
      // uncomment below and update the code to test the property accountingRule
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOptions (base name: "currencyOptions")', function() {
      // uncomment below and update the code to test the property currencyOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodTypeOptions (base name: "interestCompoundingPeriodTypeOptions")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodTypeOptions (base name: "interestPostingPeriodTypeOptions")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationTypeOptions (base name: "interestCalculationTypeOptions")', function() {
      // uncomment below and update the code to test the property interestCalculationTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearTypeOptions (base name: "interestCalculationDaysInYearTypeOptions")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequencyTypeOptions (base name: "lockinPeriodFrequencyTypeOptions")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequencyTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalFeeTypeOptions (base name: "withdrawalFeeTypeOptions")', function() {
      // uncomment below and update the code to test the property withdrawalFeeTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentTypeOptions (base name: "paymentTypeOptions")', function() {
      // uncomment below and update the code to test the property paymentTypeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingRuleOptions (base name: "accountingRuleOptions")', function() {
      // uncomment below and update the code to test the property accountingRuleOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappingOptions (base name: "accountingMappingOptions")', function() {
      // uncomment below and update the code to test the property accountingMappingOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeOptions (base name: "chargeOptions")', function() {
      // uncomment below and update the code to test the property chargeOptions
      //var instane = new ApacheFineract.GetSavingsProductsTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
