

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
    instance = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
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

  describe('GetAccountTransfersTemplateRefundByTransferResponse', function() {
    it('should create an instance of GetAccountTransfersTemplateRefundByTransferResponse', function() {
      // uncomment below and update the code to test GetAccountTransfersTemplateRefundByTransferResponse
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property transferAmount (base name: "transferAmount")', function() {
      // uncomment below and update the code to test the property transferAmount
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property transferDate (base name: "transferDate")', function() {
      // uncomment below and update the code to test the property transferDate
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromClient (base name: "fromClient")', function() {
      // uncomment below and update the code to test the property fromClient
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccount (base name: "fromAccount")', function() {
      // uncomment below and update the code to test the property fromAccount
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toOffice (base name: "toOffice")', function() {
      // uncomment below and update the code to test the property toOffice
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toClient (base name: "toClient")', function() {
      // uncomment below and update the code to test the property toClient
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccount (base name: "toAccount")', function() {
      // uncomment below and update the code to test the property toAccount
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOfficeOptions (base name: "fromOfficeOptions")', function() {
      // uncomment below and update the code to test the property fromOfficeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromClientOptions (base name: "fromClientOptions")', function() {
      // uncomment below and update the code to test the property fromClientOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountTypeOptions (base name: "fromAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property fromAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountOptions (base name: "fromAccountOptions")', function() {
      // uncomment below and update the code to test the property fromAccountOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toOfficeOptions (base name: "toOfficeOptions")', function() {
      // uncomment below and update the code to test the property toOfficeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toClientOptions (base name: "toClientOptions")', function() {
      // uncomment below and update the code to test the property toClientOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountTypeOptions (base name: "toAccountTypeOptions")', function() {
      // uncomment below and update the code to test the property toAccountTypeOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountOptions (base name: "toAccountOptions")', function() {
      // uncomment below and update the code to test the property toAccountOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferResponse();
      //expect(instance).to.be();
    });

  });

}));
