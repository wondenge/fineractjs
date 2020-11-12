

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
    instance = new ApacheFineract.GetAccountsPurchasedShares();
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

  describe('GetAccountsPurchasedShares', function() {
    it('should create an instance of GetAccountsPurchasedShares', function() {
      // uncomment below and update the code to test GetAccountsPurchasedShares
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsPurchasedShares);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property purchasedDate (base name: "purchasedDate")', function() {
      // uncomment below and update the code to test the property purchasedDate
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property numberOfShares (base name: "numberOfShares")', function() {
      // uncomment below and update the code to test the property numberOfShares
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property purchasedPrice (base name: "purchasedPrice")', function() {
      // uncomment below and update the code to test the property purchasedPrice
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property chargeAmount (base name: "chargeAmount")', function() {
      // uncomment below and update the code to test the property chargeAmount
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

    it('should have the property amountPaid (base name: "amountPaid")', function() {
      // uncomment below and update the code to test the property amountPaid
      //var instane = new ApacheFineract.GetAccountsPurchasedShares();
      //expect(instance).to.be();
    });

  });

}));
