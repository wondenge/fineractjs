

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
    instance = new ApacheFineract.GetProductsCurrency();
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

  describe('GetProductsCurrency', function() {
    it('should create an instance of GetProductsCurrency', function() {
      // uncomment below and update the code to test GetProductsCurrency
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be.a(ApacheFineract.GetProductsCurrency);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property decimalPlaces (base name: "decimalPlaces")', function() {
      // uncomment below and update the code to test the property decimalPlaces
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property inMultiplesOf (base name: "inMultiplesOf")', function() {
      // uncomment below and update the code to test the property inMultiplesOf
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property displaySymbol (base name: "displaySymbol")', function() {
      // uncomment below and update the code to test the property displaySymbol
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property nameCode (base name: "nameCode")', function() {
      // uncomment below and update the code to test the property nameCode
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

    it('should have the property displayLabel (base name: "displayLabel")', function() {
      // uncomment below and update the code to test the property displayLabel
      //var instane = new ApacheFineract.GetProductsCurrency();
      //expect(instance).to.be();
    });

  });

}));
