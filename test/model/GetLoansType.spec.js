

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
    instance = new ApacheFineract.GetLoansType();
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

  describe('GetLoansType', function() {
    it('should create an instance of GetLoansType', function() {
      // uncomment below and update the code to test GetLoansType
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be.a(ApacheFineract.GetLoansType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property disbursement (base name: "disbursement")', function() {
      // uncomment below and update the code to test the property disbursement
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property repaymentAtDisbursement (base name: "repaymentAtDisbursement")', function() {
      // uncomment below and update the code to test the property repaymentAtDisbursement
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property repayment (base name: "repayment")', function() {
      // uncomment below and update the code to test the property repayment
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property contra (base name: "contra")', function() {
      // uncomment below and update the code to test the property contra
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property waiveInterest (base name: "waiveInterest")', function() {
      // uncomment below and update the code to test the property waiveInterest
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property waiveCharges (base name: "waiveCharges")', function() {
      // uncomment below and update the code to test the property waiveCharges
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property writeOff (base name: "writeOff")', function() {
      // uncomment below and update the code to test the property writeOff
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

    it('should have the property recoveryRepayment (base name: "recoveryRepayment")', function() {
      // uncomment below and update the code to test the property recoveryRepayment
      //var instane = new ApacheFineract.GetLoansType();
      //expect(instance).to.be();
    });

  });

}));
