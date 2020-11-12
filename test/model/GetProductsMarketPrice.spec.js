

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
    instance = new ApacheFineract.GetProductsMarketPrice();
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

  describe('GetProductsMarketPrice', function() {
    it('should create an instance of GetProductsMarketPrice', function() {
      // uncomment below and update the code to test GetProductsMarketPrice
      //var instane = new ApacheFineract.GetProductsMarketPrice();
      //expect(instance).to.be.a(ApacheFineract.GetProductsMarketPrice);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetProductsMarketPrice();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instane = new ApacheFineract.GetProductsMarketPrice();
      //expect(instance).to.be();
    });

    it('should have the property shareValue (base name: "shareValue")', function() {
      // uncomment below and update the code to test the property shareValue
      //var instane = new ApacheFineract.GetProductsMarketPrice();
      //expect(instance).to.be();
    });

  });

}));
