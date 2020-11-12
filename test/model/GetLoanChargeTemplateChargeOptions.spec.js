

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
    instance = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
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

  describe('GetLoanChargeTemplateChargeOptions', function() {
    it('should create an instance of GetLoanChargeTemplateChargeOptions', function() {
      // uncomment below and update the code to test GetLoanChargeTemplateChargeOptions
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be.a(ApacheFineract.GetLoanChargeTemplateChargeOptions);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property penalty (base name: "penalty")', function() {
      // uncomment below and update the code to test the property penalty
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property chargeTimeType (base name: "chargeTimeType")', function() {
      // uncomment below and update the code to test the property chargeTimeType
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property chargeAppliesTo (base name: "chargeAppliesTo")', function() {
      // uncomment below and update the code to test the property chargeAppliesTo
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

    it('should have the property chargeCalculationType (base name: "chargeCalculationType")', function() {
      // uncomment below and update the code to test the property chargeCalculationType
      //var instane = new ApacheFineract.GetLoanChargeTemplateChargeOptions();
      //expect(instance).to.be();
    });

  });

}));
