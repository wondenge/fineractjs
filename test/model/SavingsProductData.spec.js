

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
    instance = new ApacheFineract.SavingsProductData();
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

  describe('SavingsProductData', function() {
    it('should create an instance of SavingsProductData', function() {
      // uncomment below and update the code to test SavingsProductData
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be.a(ApacheFineract.SavingsProductData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property nominalAnnualInterestRate (base name: "nominalAnnualInterestRate")', function() {
      // uncomment below and update the code to test the property nominalAnnualInterestRate
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestCompoundingPeriodType (base name: "interestCompoundingPeriodType")', function() {
      // uncomment below and update the code to test the property interestCompoundingPeriodType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestPostingPeriodType (base name: "interestPostingPeriodType")', function() {
      // uncomment below and update the code to test the property interestPostingPeriodType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationType (base name: "interestCalculationType")', function() {
      // uncomment below and update the code to test the property interestCalculationType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property interestCalculationDaysInYearType (base name: "interestCalculationDaysInYearType")', function() {
      // uncomment below and update the code to test the property interestCalculationDaysInYearType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property minRequiredOpeningBalance (base name: "minRequiredOpeningBalance")', function() {
      // uncomment below and update the code to test the property minRequiredOpeningBalance
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequency (base name: "lockinPeriodFrequency")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequency
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property lockinPeriodFrequencyType (base name: "lockinPeriodFrequencyType")', function() {
      // uncomment below and update the code to test the property lockinPeriodFrequencyType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalFeeForTransfers (base name: "withdrawalFeeForTransfers")', function() {
      // uncomment below and update the code to test the property withdrawalFeeForTransfers
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property allowOverdraft (base name: "allowOverdraft")', function() {
      // uncomment below and update the code to test the property allowOverdraft
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property overdraftLimit (base name: "overdraftLimit")', function() {
      // uncomment below and update the code to test the property overdraftLimit
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property minRequiredBalance (base name: "minRequiredBalance")', function() {
      // uncomment below and update the code to test the property minRequiredBalance
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

    it('should have the property depositAccountType (base name: "depositAccountType")', function() {
      // uncomment below and update the code to test the property depositAccountType
      //var instane = new ApacheFineract.SavingsProductData();
      //expect(instance).to.be();
    });

  });

}));
