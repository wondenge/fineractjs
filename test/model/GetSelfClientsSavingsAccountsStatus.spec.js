

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
    instance = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
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

  describe('GetSelfClientsSavingsAccountsStatus', function() {
    it('should create an instance of GetSelfClientsSavingsAccountsStatus', function() {
      // uncomment below and update the code to test GetSelfClientsSavingsAccountsStatus
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be.a(ApacheFineract.GetSelfClientsSavingsAccountsStatus);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property submittedAndPendingApproval (base name: "submittedAndPendingApproval")', function() {
      // uncomment below and update the code to test the property submittedAndPendingApproval
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property approved (base name: "approved")', function() {
      // uncomment below and update the code to test the property approved
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property rejected (base name: "rejected")', function() {
      // uncomment below and update the code to test the property rejected
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property withdrawnByApplicant (base name: "withdrawnByApplicant")', function() {
      // uncomment below and update the code to test the property withdrawnByApplicant
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

    it('should have the property closed (base name: "closed")', function() {
      // uncomment below and update the code to test the property closed
      //var instane = new ApacheFineract.GetSelfClientsSavingsAccountsStatus();
      //expect(instance).to.be();
    });

  });

}));
