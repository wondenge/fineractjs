

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
    instance = new ApacheFineract.PostProvisioningCriteriaRequest();
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

  describe('PostProvisioningCriteriaRequest', function() {
    it('should create an instance of PostProvisioningCriteriaRequest', function() {
      // uncomment below and update the code to test PostProvisioningCriteriaRequest
      //var instane = new ApacheFineract.PostProvisioningCriteriaRequest();
      //expect(instance).to.be.a(ApacheFineract.PostProvisioningCriteriaRequest);
    });

    it('should have the property criteriaName (base name: "criteriaName")', function() {
      // uncomment below and update the code to test the property criteriaName
      //var instane = new ApacheFineract.PostProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanProducts (base name: "loanProducts")', function() {
      // uncomment below and update the code to test the property loanProducts
      //var instane = new ApacheFineract.PostProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

    it('should have the property provisioningcriteria (base name: "provisioningcriteria")', function() {
      // uncomment below and update the code to test the property provisioningcriteria
      //var instane = new ApacheFineract.PostProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

  });

}));
