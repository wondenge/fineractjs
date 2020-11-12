

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
    instance = new ApacheFineract.Money();
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

  describe('Money', function() {
    it('should create an instance of Money', function() {
      // uncomment below and update the code to test Money
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be.a(ApacheFineract.Money);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property currencyDigitsAfterDecimal (base name: "currencyDigitsAfterDecimal")', function() {
      // uncomment below and update the code to test the property currencyDigitsAfterDecimal
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property greaterThanZero (base name: "greaterThanZero")', function() {
      // uncomment below and update the code to test the property greaterThanZero
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property lessThanZero (base name: "lessThanZero")', function() {
      // uncomment below and update the code to test the property lessThanZero
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property currencyInMultiplesOf (base name: "currencyInMultiplesOf")', function() {
      // uncomment below and update the code to test the property currencyInMultiplesOf
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property amountDefaultedToNullIfZero (base name: "amountDefaultedToNullIfZero")', function() {
      // uncomment below and update the code to test the property amountDefaultedToNullIfZero
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

    it('should have the property zero (base name: "zero")', function() {
      // uncomment below and update the code to test the property zero
      //var instane = new ApacheFineract.Money();
      //expect(instance).to.be();
    });

  });

}));
