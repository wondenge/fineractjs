

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
    instance = new ApacheFineract.Charge();
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

  describe('Charge', function() {
    it('should create an instance of Charge', function() {
      // uncomment below and update the code to test Charge
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be.a(ApacheFineract.Charge);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property chargeTimeType (base name: "chargeTimeType")', function() {
      // uncomment below and update the code to test the property chargeTimeType
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property chargeCalculation (base name: "chargeCalculation")', function() {
      // uncomment below and update the code to test the property chargeCalculation
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property chargePaymentMode (base name: "chargePaymentMode")', function() {
      // uncomment below and update the code to test the property chargePaymentMode
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property feeInterval (base name: "feeInterval")', function() {
      // uncomment below and update the code to test the property feeInterval
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property penalty (base name: "penalty")', function() {
      // uncomment below and update the code to test the property penalty
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property minCap (base name: "minCap")', function() {
      // uncomment below and update the code to test the property minCap
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property maxCap (base name: "maxCap")', function() {
      // uncomment below and update the code to test the property maxCap
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property taxGroup (base name: "taxGroup")', function() {
      // uncomment below and update the code to test the property taxGroup
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property savingsCharge (base name: "savingsCharge")', function() {
      // uncomment below and update the code to test the property savingsCharge
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property feeOnMonthDay (base name: "feeOnMonthDay")', function() {
      // uncomment below and update the code to test the property feeOnMonthDay
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property annualFee (base name: "annualFee")', function() {
      // uncomment below and update the code to test the property annualFee
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property monthlyFee (base name: "monthlyFee")', function() {
      // uncomment below and update the code to test the property monthlyFee
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property loanCharge (base name: "loanCharge")', function() {
      // uncomment below and update the code to test the property loanCharge
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property clientCharge (base name: "clientCharge")', function() {
      // uncomment below and update the code to test the property clientCharge
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property overdueInstallment (base name: "overdueInstallment")', function() {
      // uncomment below and update the code to test the property overdueInstallment
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property allowedLoanChargeTime (base name: "allowedLoanChargeTime")', function() {
      // uncomment below and update the code to test the property allowedLoanChargeTime
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property allowedClientChargeTime (base name: "allowedClientChargeTime")', function() {
      // uncomment below and update the code to test the property allowedClientChargeTime
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property allowedSavingsChargeTime (base name: "allowedSavingsChargeTime")', function() {
      // uncomment below and update the code to test the property allowedSavingsChargeTime
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property disbursementCharge (base name: "disbursementCharge")', function() {
      // uncomment below and update the code to test the property disbursementCharge
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property allowedSavingsChargeCalculationType (base name: "allowedSavingsChargeCalculationType")', function() {
      // uncomment below and update the code to test the property allowedSavingsChargeCalculationType
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property allowedClientChargeCalculationType (base name: "allowedClientChargeCalculationType")', function() {
      // uncomment below and update the code to test the property allowedClientChargeCalculationType
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property percentageOfApprovedAmount (base name: "percentageOfApprovedAmount")', function() {
      // uncomment below and update the code to test the property percentageOfApprovedAmount
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property percentageOfDisbursementAmount (base name: "percentageOfDisbursementAmount")', function() {
      // uncomment below and update the code to test the property percentageOfDisbursementAmount
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new ApacheFineract.Charge();
      //expect(instance).to.be();
    });

  });

}));
