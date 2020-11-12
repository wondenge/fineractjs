  

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
    instance = new ApacheFineract.GetAccountsLinkedToPocketResponse();
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

  describe('GetAccountsLinkedToPocketResponse', function() {
    it('should create an instance of GetAccountsLinkedToPocketResponse', function() {
      // uncomment below and update the code to test GetAccountsLinkedToPocketResponse
      //var instane = new ApacheFineract.GetAccountsLinkedToPocketResponse();
      //expect(instance).to.be.a(ApacheFineract.GetAccountsLinkedToPocketResponse);
    });

    it('should have the property loanAccounts (base name: "loanAccounts")', function() {
      // uncomment below and update the code to test the property loanAccounts
      //var instane = new ApacheFineract.GetAccountsLinkedToPocketResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingAccounts (base name: "savingAccounts")', function() {
      // uncomment below and update the code to test the property savingAccounts
      //var instane = new ApacheFineract.GetAccountsLinkedToPocketResponse();
      //expect(instance).to.be();
    });

    it('should have the property shareAccounts (base name: "shareAccounts")', function() {
      // uncomment below and update the code to test the property shareAccounts
      //var instane = new ApacheFineract.GetAccountsLinkedToPocketResponse();
      //expect(instance).to.be();
    });

  });

}));
