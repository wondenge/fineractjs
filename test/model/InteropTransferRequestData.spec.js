

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
    instance = new ApacheFineract.InteropTransferRequestData();
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

  describe('InteropTransferRequestData', function() {
    it('should create an instance of InteropTransferRequestData', function() {
      // uncomment below and update the code to test InteropTransferRequestData
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be.a(ApacheFineract.InteropTransferRequestData);
    });

    it('should have the property transactionCode (base name: "transactionCode")', function() {
      // uncomment below and update the code to test the property transactionCode
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property requestCode (base name: "requestCode")', function() {
      // uncomment below and update the code to test the property requestCode
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property transactionRole (base name: "transactionRole")', function() {
      // uncomment below and update the code to test the property transactionRole
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property geoCode (base name: "geoCode")', function() {
      // uncomment below and update the code to test the property geoCode
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function() {
      // uncomment below and update the code to test the property expiration
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property extensionList (base name: "extensionList")', function() {
      // uncomment below and update the code to test the property extensionList
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property transferCode (base name: "transferCode")', function() {
      // uncomment below and update the code to test the property transferCode
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property fspFee (base name: "fspFee")', function() {
      // uncomment below and update the code to test the property fspFee
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property fspCommission (base name: "fspCommission")', function() {
      // uncomment below and update the code to test the property fspCommission
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

    it('should have the property expirationLocalDate (base name: "expirationLocalDate")', function() {
      // uncomment below and update the code to test the property expirationLocalDate
      //var instane = new ApacheFineract.InteropTransferRequestData();
      //expect(instance).to.be();
    });

  });

}));
