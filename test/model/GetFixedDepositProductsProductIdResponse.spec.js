

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
    instance = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
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

  describe('GetFixedDepositProductsProductIdResponse', function() {
    it('should create an instance of GetFixedDepositProductsProductIdResponse', function() {
      // uncomment below and update the code to test GetFixedDepositProductsProductIdResponse
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be.a(ApacheFineract.GetFixedDepositProductsProductIdResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "shortName")', function() {
      // uncomment below and update the code to test the property shortName
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountingMappings (base name: "accountingMappings")', function() {
      // uncomment below and update the code to test the property accountingMappings
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property feeToIncomeAccountMappings (base name: "feeToIncomeAccountMappings")', function() {
      // uncomment below and update the code to test the property feeToIncomeAccountMappings
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property penaltyToIncomeAccountMappings (base name: "penaltyToIncomeAccountMappings")', function() {
      // uncomment below and update the code to test the property penaltyToIncomeAccountMappings
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalApplicable (base name: "preClosurePenalApplicable")', function() {
      // uncomment below and update the code to test the property preClosurePenalApplicable
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalInterest (base name: "preClosurePenalInterest")', function() {
      // uncomment below and update the code to test the property preClosurePenalInterest
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property preClosurePenalInterestOnType (base name: "preClosurePenalInterestOnType")', function() {
      // uncomment below and update the code to test the property preClosurePenalInterestOnType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTerm (base name: "minDepositTerm")', function() {
      // uncomment below and update the code to test the property minDepositTerm
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTermType (base name: "minDepositTermType")', function() {
      // uncomment below and update the code to test the property minDepositTermType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTerm (base name: "maxDepositTerm")', function() {
      // uncomment below and update the code to test the property maxDepositTerm
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxDepositTermType (base name: "maxDepositTermType")', function() {
      // uncomment below and update the code to test the property maxDepositTermType
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property activeChart (base name: "activeChart")', function() {
      // uncomment below and update the code to test the property activeChart
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdResponse();
      //expect(instance).to.be();
    });

  });

}));
