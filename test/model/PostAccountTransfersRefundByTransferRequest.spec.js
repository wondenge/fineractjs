

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
    instance = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
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

  describe('PostAccountTransfersRefundByTransferRequest', function() {
    it('should create an instance of PostAccountTransfersRefundByTransferRequest', function() {
      // uncomment below and update the code to test PostAccountTransfersRefundByTransferRequest
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be.a(ApacheFineract.PostAccountTransfersRefundByTransferRequest);
    });

    it('should have the property fromAccountId (base name: "fromAccountId")', function() {
      // uncomment below and update the code to test the property fromAccountId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property toOfficeId (base name: "toOfficeId")', function() {
      // uncomment below and update the code to test the property toOfficeId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property toClientId (base name: "toClientId")', function() {
      // uncomment below and update the code to test the property toClientId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property toAccountId (base name: "toAccountId")', function() {
      // uncomment below and update the code to test the property toAccountId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property transferAmount (base name: "transferAmount")', function() {
      // uncomment below and update the code to test the property transferAmount
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property transferDate (base name: "transferDate")', function() {
      // uncomment below and update the code to test the property transferDate
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property transferDescription (base name: "transferDescription")', function() {
      // uncomment below and update the code to test the property transferDescription
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateFormat (base name: "dateFormat")', function() {
      // uncomment below and update the code to test the property dateFormat
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromClientId (base name: "fromClientId")', function() {
      // uncomment below and update the code to test the property fromClientId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromOfficeId (base name: "fromOfficeId")', function() {
      // uncomment below and update the code to test the property fromOfficeId
      //var instane = new ApacheFineract.PostAccountTransfersRefundByTransferRequest();
      //expect(instance).to.be();
    });

  });

}));
