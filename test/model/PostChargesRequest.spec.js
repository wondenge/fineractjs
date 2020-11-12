

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
    instance = new ApacheFineract.PostChargesRequest();
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

  describe('PostChargesRequest', function() {
    it('should create an instance of PostChargesRequest', function() {
      // uncomment below and update the code to test PostChargesRequest
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be.a(ApacheFineract.PostChargesRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargeAppliesTo (base name: "chargeAppliesTo")', function() {
      // uncomment below and update the code to test the property chargeAppliesTo
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargeTimeType (base name: "chargeTimeType")', function() {
      // uncomment below and update the code to test the property chargeTimeType
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargeCalculationType (base name: "chargeCalculationType")', function() {
      // uncomment below and update the code to test the property chargeCalculationType
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargePaymentMode (base name: "chargePaymentMode")', function() {
      // uncomment below and update the code to test the property chargePaymentMode
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.PostChargesRequest();
      //expect(instance).to.be();
    });

  });

}));
