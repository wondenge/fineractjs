

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
    instance = new ApacheFineract.InteropTransferResponseData();
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

  describe('InteropTransferResponseData', function() {
    it('should create an instance of InteropTransferResponseData', function() {
      // uncomment below and update the code to test InteropTransferResponseData
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be.a(ApacheFineract.InteropTransferResponseData);
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property loanId (base name: "loanId")', function() {
      // uncomment below and update the code to test the property loanId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property savingsId (base name: "savingsId")', function() {
      // uncomment below and update the code to test the property savingsId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property subResourceId (base name: "subResourceId")', function() {
      // uncomment below and update the code to test the property subResourceId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function() {
      // uncomment below and update the code to test the property changes
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property gsimId (base name: "gsimId")', function() {
      // uncomment below and update the code to test the property gsimId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property glimId (base name: "glimId")', function() {
      // uncomment below and update the code to test the property glimId
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property rollbackTransaction (base name: "rollbackTransaction")', function() {
      // uncomment below and update the code to test the property rollbackTransaction
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property transactionCode (base name: "transactionCode")', function() {
      // uncomment below and update the code to test the property transactionCode
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property expiration (base name: "expiration")', function() {
      // uncomment below and update the code to test the property expiration
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property extensionList (base name: "extensionList")', function() {
      // uncomment below and update the code to test the property extensionList
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property transferCode (base name: "transferCode")', function() {
      // uncomment below and update the code to test the property transferCode
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

    it('should have the property completedTimestamp (base name: "completedTimestamp")', function() {
      // uncomment below and update the code to test the property completedTimestamp
      //var instane = new ApacheFineract.InteropTransferResponseData();
      //expect(instance).to.be();
    });

  });

}));
