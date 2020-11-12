

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
    instance = new ApacheFineract.PostFixedDepositProductsCharts();
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

  describe('PostFixedDepositProductsCharts', function() {
    it('should create an instance of PostFixedDepositProductsCharts', function() {
      // uncomment below and update the code to test PostFixedDepositProductsCharts
      //var instane = new ApacheFineract.PostFixedDepositProductsCharts();
      //expect(instance).to.be.a(ApacheFineract.PostFixedDepositProductsCharts);
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instane = new ApacheFineract.PostFixedDepositProductsCharts();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostFixedDepositProductsCharts();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostFixedDepositProductsCharts();
      //expect(instance).to.be();
    });

    it('should have the property chartSlabs (base name: "chartSlabs")', function() {
      // uncomment below and update the code to test the property chartSlabs
      //var instane = new ApacheFineract.PostFixedDepositProductsCharts();
      //expect(instance).to.be();
    });

  });

}));
