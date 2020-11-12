

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
    instance = new ApacheFineract.GetChargesTemplateResponse();
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

  describe('GetChargesTemplateResponse', function() {
    it('should create an instance of GetChargesTemplateResponse', function() {
      // uncomment below and update the code to test GetChargesTemplateResponse
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetChargesTemplateResponse);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property penalty (base name: "penalty")', function() {
      // uncomment below and update the code to test the property penalty
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property currencyOptions (base name: "currencyOptions")', function() {
      // uncomment below and update the code to test the property currencyOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeCalculationTypeOptions (base name: "chargeCalculationTypeOptions")', function() {
      // uncomment below and update the code to test the property chargeCalculationTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeAppliesToOptions (base name: "chargeAppliesToOptions")', function() {
      // uncomment below and update the code to test the property chargeAppliesToOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeTimeTypeOptions (base name: "chargeTimeTypeOptions")', function() {
      // uncomment below and update the code to test the property chargeTimeTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargePaymentModeOptions (base name: "chargePaymentModeOptions")', function() {
      // uncomment below and update the code to test the property chargePaymentModeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanChargeCalculationTypeOptions (base name: "loanChargeCalculationTypeOptions")', function() {
      // uncomment below and update the code to test the property loanChargeCalculationTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property loanChargeTimeTypeOptions (base name: "loanChargeTimeTypeOptions")', function() {
      // uncomment below and update the code to test the property loanChargeTimeTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsChargeCalculationTypeOptions (base name: "savingsChargeCalculationTypeOptions")', function() {
      // uncomment below and update the code to test the property savingsChargeCalculationTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsChargeTimeTypeOptions (base name: "savingsChargeTimeTypeOptions")', function() {
      // uncomment below and update the code to test the property savingsChargeTimeTypeOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property feeFrequencyOptions (base name: "feeFrequencyOptions")', function() {
      // uncomment below and update the code to test the property feeFrequencyOptions
      //var instane = new ApacheFineract.GetChargesTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
