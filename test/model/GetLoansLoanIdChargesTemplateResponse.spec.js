

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
    instance = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
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

  describe('GetLoansLoanIdChargesTemplateResponse', function() {
    it('should create an instance of GetLoansLoanIdChargesTemplateResponse', function() {
      // uncomment below and update the code to test GetLoansLoanIdChargesTemplateResponse
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be.a(ApacheFineract.GetLoansLoanIdChargesTemplateResponse);
    });

    it('should have the property amountPaid (base name: "amountPaid")', function() {
      // uncomment below and update the code to test the property amountPaid
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property amountWaived (base name: "amountWaived")', function() {
      // uncomment below and update the code to test the property amountWaived
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property amountWrittenOff (base name: "amountWrittenOff")', function() {
      // uncomment below and update the code to test the property amountWrittenOff
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeOptions (base name: "chargeOptions")', function() {
      // uncomment below and update the code to test the property chargeOptions
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be();
    });

    it('should have the property penalty (base name: "penalty")', function() {
      // uncomment below and update the code to test the property penalty
      //var instane = new ApacheFineract.GetLoansLoanIdChargesTemplateResponse();
      //expect(instance).to.be();
    });

  });

}));
