

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
    instance = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
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

  describe('GetAccountTransfersTemplateRefundByTransferFromAccountOptions', function() {
    it('should create an instance of GetAccountTransfersTemplateRefundByTransferFromAccountOptions', function() {
      // uncomment below and update the code to test GetAccountTransfersTemplateRefundByTransferFromAccountOptions
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be.a(ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property accountNo (base name: "accountNo")', function() {
      // uncomment below and update the code to test the property accountNo
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property fieldOfficerId (base name: "fieldOfficerId")', function() {
      // uncomment below and update the code to test the property fieldOfficerId
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ApacheFineract.GetAccountTransfersTemplateRefundByTransferFromAccountOptions();
      //expect(instance).to.be();
    });

  });

}));
