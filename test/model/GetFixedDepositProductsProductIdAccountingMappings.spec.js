

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
    instance = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
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

  describe('GetFixedDepositProductsProductIdAccountingMappings', function() {
    it('should create an instance of GetFixedDepositProductsProductIdAccountingMappings', function() {
      // uncomment below and update the code to test GetFixedDepositProductsProductIdAccountingMappings
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be.a(ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings);
    });

    it('should have the property savingsReferenceAccount (base name: "savingsReferenceAccount")', function() {
      // uncomment below and update the code to test the property savingsReferenceAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property incomeFromFeeAccount (base name: "incomeFromFeeAccount")', function() {
      // uncomment below and update the code to test the property incomeFromFeeAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property incomeFromPenaltyAccount (base name: "incomeFromPenaltyAccount")', function() {
      // uncomment below and update the code to test the property incomeFromPenaltyAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property interestOnSavingsAccount (base name: "interestOnSavingsAccount")', function() {
      // uncomment below and update the code to test the property interestOnSavingsAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property savingsControlAccount (base name: "savingsControlAccount")', function() {
      // uncomment below and update the code to test the property savingsControlAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

    it('should have the property transfersInSuspenseAccount (base name: "transfersInSuspenseAccount")', function() {
      // uncomment below and update the code to test the property transfersInSuspenseAccount
      //var instane = new ApacheFineract.GetFixedDepositProductsProductIdAccountingMappings();
      //expect(instance).to.be();
    });

  });

}));
