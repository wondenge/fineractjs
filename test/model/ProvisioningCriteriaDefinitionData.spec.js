

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
    instance = new ApacheFineract.ProvisioningCriteriaDefinitionData();
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

  describe('ProvisioningCriteriaDefinitionData', function() {
    it('should create an instance of ProvisioningCriteriaDefinitionData', function() {
      // uncomment below and update the code to test ProvisioningCriteriaDefinitionData
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be.a(ApacheFineract.ProvisioningCriteriaDefinitionData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property categoryName (base name: "categoryName")', function() {
      // uncomment below and update the code to test the property categoryName
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property minAge (base name: "minAge")', function() {
      // uncomment below and update the code to test the property minAge
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property maxAge (base name: "maxAge")', function() {
      // uncomment below and update the code to test the property maxAge
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property provisioningPercentage (base name: "provisioningPercentage")', function() {
      // uncomment below and update the code to test the property provisioningPercentage
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property liabilityAccount (base name: "liabilityAccount")', function() {
      // uncomment below and update the code to test the property liabilityAccount
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property liabilityCode (base name: "liabilityCode")', function() {
      // uncomment below and update the code to test the property liabilityCode
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property expenseAccount (base name: "expenseAccount")', function() {
      // uncomment below and update the code to test the property expenseAccount
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

    it('should have the property expenseCode (base name: "expenseCode")', function() {
      // uncomment below and update the code to test the property expenseCode
      //var instane = new ApacheFineract.ProvisioningCriteriaDefinitionData();
      //expect(instance).to.be();
    });

  });

}));
