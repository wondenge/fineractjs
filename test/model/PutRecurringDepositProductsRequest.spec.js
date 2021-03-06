

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
    instance = new ApacheFineract.PutRecurringDepositProductsRequest();
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

  describe('PutRecurringDepositProductsRequest', function() {
    it('should create an instance of PutRecurringDepositProductsRequest', function() {
      // uncomment below and update the code to test PutRecurringDepositProductsRequest
      //var instane = new ApacheFineract.PutRecurringDepositProductsRequest();
      //expect(instance).to.be.a(ApacheFineract.PutRecurringDepositProductsRequest);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.PutRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PutRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTerm (base name: "minDepositTerm")', function() {
      // uncomment below and update the code to test the property minDepositTerm
      //var instane = new ApacheFineract.PutRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minDepositTermTypeId (base name: "minDepositTermTypeId")', function() {
      // uncomment below and update the code to test the property minDepositTermTypeId
      //var instane = new ApacheFineract.PutRecurringDepositProductsRequest();
      //expect(instance).to.be();
    });

  });

}));
