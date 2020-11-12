

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
    instance = new ApacheFineract.GetProductsAccountingMappingOptions();
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

  describe('GetProductsAccountingMappingOptions', function() {
    it('should create an instance of GetProductsAccountingMappingOptions', function() {
      // uncomment below and update the code to test GetProductsAccountingMappingOptions
      //var instane = new ApacheFineract.GetProductsAccountingMappingOptions();
      //expect(instance).to.be.a(ApacheFineract.GetProductsAccountingMappingOptions);
    });

    it('should have the property liabilityAccountOptions (base name: "liabilityAccountOptions")', function() {
      // uncomment below and update the code to test the property liabilityAccountOptions
      //var instane = new ApacheFineract.GetProductsAccountingMappingOptions();
      //expect(instance).to.be();
    });

    it('should have the property assetAccountOptions (base name: "assetAccountOptions")', function() {
      // uncomment below and update the code to test the property assetAccountOptions
      //var instane = new ApacheFineract.GetProductsAccountingMappingOptions();
      //expect(instance).to.be();
    });

    it('should have the property incomeAccountOptions (base name: "incomeAccountOptions")', function() {
      // uncomment below and update the code to test the property incomeAccountOptions
      //var instane = new ApacheFineract.GetProductsAccountingMappingOptions();
      //expect(instance).to.be();
    });

    it('should have the property equityAccountOptions (base name: "equityAccountOptions")', function() {
      // uncomment below and update the code to test the property equityAccountOptions
      //var instane = new ApacheFineract.GetProductsAccountingMappingOptions();
      //expect(instance).to.be();
    });

  });

}));
