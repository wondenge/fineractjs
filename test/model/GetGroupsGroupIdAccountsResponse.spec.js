

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
    instance = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
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

  describe('GetGroupsGroupIdAccountsResponse', function() {
    it('should create an instance of GetGroupsGroupIdAccountsResponse', function() {
      // uncomment below and update the code to test GetGroupsGroupIdAccountsResponse
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
      //expect(instance).to.be.a(ApacheFineract.GetGroupsGroupIdAccountsResponse);
    });

    it('should have the property loanAccounts (base name: "loanAccounts")', function() {
      // uncomment below and update the code to test the property loanAccounts
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsAccounts (base name: "savingsAccounts")', function() {
      // uncomment below and update the code to test the property savingsAccounts
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property memberLoanAccounts (base name: "memberLoanAccounts")', function() {
      // uncomment below and update the code to test the property memberLoanAccounts
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
      //expect(instance).to.be();
    });

    it('should have the property memberSavingsAccounts (base name: "memberSavingsAccounts")', function() {
      // uncomment below and update the code to test the property memberSavingsAccounts
      //var instane = new ApacheFineract.GetGroupsGroupIdAccountsResponse();
      //expect(instance).to.be();
    });

  });

}));
