

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
    instance = new ApacheFineract.GetAccountTransfersPageItems();
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

  describe('GetAccountTransfersPageItems', function() {
    it('should create an instance of GetAccountTransfersPageItems', function() {
      // uncomment below and update the code to test GetAccountTransfersPageItems
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransfersPageItems);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property reversed (base name: "reversed")', function() {
      // uncomment below and update the code to test the property reversed
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property transferAmount (base name: "transferAmount")', function() {
      // uncomment below and update the code to test the property transferAmount
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property transferDate (base name: "transferDate")', function() {
      // uncomment below and update the code to test the property transferDate
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property transferDescription (base name: "transferDescription")', function() {
      // uncomment below and update the code to test the property transferDescription
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property fromClient (base name: "fromClient")', function() {
      // uncomment below and update the code to test the property fromClient
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property fromAccount (base name: "fromAccount")', function() {
      // uncomment below and update the code to test the property fromAccount
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property toOffice (base name: "toOffice")', function() {
      // uncomment below and update the code to test the property toOffice
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property toClient (base name: "toClient")', function() {
      // uncomment below and update the code to test the property toClient
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

    it('should have the property toAccount (base name: "toAccount")', function() {
      // uncomment below and update the code to test the property toAccount
      //var instane = new ApacheFineract.GetAccountTransfersPageItems();
      //expect(instance).to.be();
    });

  });

}));
