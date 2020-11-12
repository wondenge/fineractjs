

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
    instance = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
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

  describe('GetStandingInstructionHistoryPageItemsResponse', function() {
    it('should create an instance of GetStandingInstructionHistoryPageItemsResponse', function() {
      // uncomment below and update the code to test GetStandingInstructionHistoryPageItemsResponse
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetStandingInstructionHistoryPageItemsResponse);
    });

    it('should have the property standingInstructionId (base name: "standingInstructionId")', function() {
      // uncomment below and update the code to test the property standingInstructionId
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromOffice (base name: "fromOffice")', function() {
      // uncomment below and update the code to test the property fromOffice
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromClient (base name: "fromClient")', function() {
      // uncomment below and update the code to test the property fromClient
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccountType (base name: "fromAccountType")', function() {
      // uncomment below and update the code to test the property fromAccountType
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property fromAccount (base name: "fromAccount")', function() {
      // uncomment below and update the code to test the property fromAccount
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccountType (base name: "toAccountType")', function() {
      // uncomment below and update the code to test the property toAccountType
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property toAccount (base name: "toAccount")', function() {
      // uncomment below and update the code to test the property toAccount
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property toOffice (base name: "toOffice")', function() {
      // uncomment below and update the code to test the property toOffice
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property toClient (base name: "toClient")', function() {
      // uncomment below and update the code to test the property toClient
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property executionTime (base name: "executionTime")', function() {
      // uncomment below and update the code to test the property executionTime
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

    it('should have the property errorLog (base name: "errorLog")', function() {
      // uncomment below and update the code to test the property errorLog
      //var instane = new ApacheFineract.GetStandingInstructionHistoryPageItemsResponse();
      //expect(instance).to.be();
    });

  });

}));
