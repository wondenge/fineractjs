

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
    instance = new ApacheFineract.GetSavingsProductsPaymentChannelToFundSourceMappings();
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

  describe('GetSavingsProductsPaymentChannelToFundSourceMappings', function() {
    it('should create an instance of GetSavingsProductsPaymentChannelToFundSourceMappings', function() {
      // uncomment below and update the code to test GetSavingsProductsPaymentChannelToFundSourceMappings
      //var instane = new ApacheFineract.GetSavingsProductsPaymentChannelToFundSourceMappings();
      //expect(instance).to.be.a(ApacheFineract.GetSavingsProductsPaymentChannelToFundSourceMappings);
    });

    it('should have the property paymentType (base name: "paymentType")', function() {
      // uncomment below and update the code to test the property paymentType
      //var instane = new ApacheFineract.GetSavingsProductsPaymentChannelToFundSourceMappings();
      //expect(instance).to.be();
    });

    it('should have the property fundSourceAccount (base name: "fundSourceAccount")', function() {
      // uncomment below and update the code to test the property fundSourceAccount
      //var instane = new ApacheFineract.GetSavingsProductsPaymentChannelToFundSourceMappings();
      //expect(instance).to.be();
    });

  });

}));
