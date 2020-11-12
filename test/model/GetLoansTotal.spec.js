

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
    instance = new ApacheFineract.GetLoansTotal();
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

  describe('GetLoansTotal', function() {
    it('should create an instance of GetLoansTotal', function() {
      // uncomment below and update the code to test GetLoansTotal
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be.a(ApacheFineract.GetLoansTotal);
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property digitsAfterDecimal (base name: "digitsAfterDecimal")', function() {
      // uncomment below and update the code to test the property digitsAfterDecimal
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property inMultiplesOf (base name: "inMultiplesOf")', function() {
      // uncomment below and update the code to test the property inMultiplesOf
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property defaultName (base name: "defaultName")', function() {
      // uncomment below and update the code to test the property defaultName
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property nameCode (base name: "nameCode")', function() {
      // uncomment below and update the code to test the property nameCode
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property displaySymbol (base name: "displaySymbol")', function() {
      // uncomment below and update the code to test the property displaySymbol
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property zero (base name: "zero")', function() {
      // uncomment below and update the code to test the property zero
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property greaterThanZero (base name: "greaterThanZero")', function() {
      // uncomment below and update the code to test the property greaterThanZero
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

    it('should have the property displaySymbolValue (base name: "displaySymbolValue")', function() {
      // uncomment below and update the code to test the property displaySymbolValue
      //var instane = new ApacheFineract.GetLoansTotal();
      //expect(instance).to.be();
    });

  });

}));
