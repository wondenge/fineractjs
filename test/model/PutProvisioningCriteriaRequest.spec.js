

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
    instance = new ApacheFineract.PutProvisioningCriteriaRequest();
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

  describe('PutProvisioningCriteriaRequest', function() {
    it('should create an instance of PutProvisioningCriteriaRequest', function() {
      // uncomment below and update the code to test PutProvisioningCriteriaRequest
      //var instane = new ApacheFineract.PutProvisioningCriteriaRequest();
      //expect(instance).to.be.a(ApacheFineract.PutProvisioningCriteriaRequest);
    });

    it('should have the property criteriaName (base name: "criteriaName")', function() {
      // uncomment below and update the code to test the property criteriaName
      //var instane = new ApacheFineract.PutProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

    it('should have the property loanProducts (base name: "loanProducts")', function() {
      // uncomment below and update the code to test the property loanProducts
      //var instane = new ApacheFineract.PutProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

    it('should have the property provisioningcriteria (base name: "provisioningcriteria")', function() {
      // uncomment below and update the code to test the property provisioningcriteria
      //var instane = new ApacheFineract.PutProvisioningCriteriaRequest();
      //expect(instance).to.be();
    });

  });

}));
