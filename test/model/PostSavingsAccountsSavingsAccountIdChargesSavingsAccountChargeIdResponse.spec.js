

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
    instance = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
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

  describe('PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse', function() {
    it('should create an instance of PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse', function() {
      // uncomment below and update the code to test PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
      //var instane = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
      //expect(instance).to.be.a(ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse);
    });

    it('should have the property officeId (base name: "officeId")', function() {
      // uncomment below and update the code to test the property officeId
      //var instane = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property savingsId (base name: "savingsId")', function() {
      // uncomment below and update the code to test the property savingsId
      //var instane = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
      //expect(instance).to.be();
    });

    it('should have the property resourceId (base name: "resourceId")', function() {
      // uncomment below and update the code to test the property resourceId
      //var instane = new ApacheFineract.PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();
      //expect(instance).to.be();
    });

  });

}));
