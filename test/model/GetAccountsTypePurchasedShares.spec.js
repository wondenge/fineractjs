

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
    instance = new ApacheFineract.GetAccountsTypePurchasedShares();
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

  describe('GetAccountsTypePurchasedShares', function() {
    it('should create an instance of GetAccountsTypePurchasedShares', function() {
      // uncomment below and update the code to test GetAccountsTypePurchasedShares
      //var instane = new ApacheFineract.GetAccountsTypePurchasedShares();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsTypePurchasedShares);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountsTypePurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property purchasedDate (base name: "purchasedDate")', function() {
      // uncomment below and update the code to test the property purchasedDate
      //var instane = new ApacheFineract.GetAccountsTypePurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property numberOfShares (base name: "numberOfShares")', function() {
      // uncomment below and update the code to test the property numberOfShares
      //var instane = new ApacheFineract.GetAccountsTypePurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property purchasedPrice (base name: "purchasedPrice")', function() {
      // uncomment below and update the code to test the property purchasedPrice
      //var instane = new ApacheFineract.GetAccountsTypePurchasedShares();
      //expect(instance).to.be();
    });

  });

}));
